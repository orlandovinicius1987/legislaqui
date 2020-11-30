<?php

namespace App\Repositories;

use App\Data\Models\ProposalFollow;
use App\Data\Repositories\Repository;
use App\Enums\ProposalState;
use App\Events\ProposalApproved;
use App\Events\ProposalReachedApprovalGoal;
use App\Data\Models\Proposal;
use App\Data\Models\User;
use Auth;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Mail;
use Session;

class ProposalsRepository extends Repository
{
    private $searchColumns = ['name', 'problem', 'idea_exposition', 'response'];

    protected $model = Proposal::class;

    public function addCustomSelects($query, $orderBy)
    {
        if ($orderBy['field'] == 'approvals_count') {
            $query->selectRaw(
                '(SELECT COUNT(*) from approvals a where a.proposal_id="proposals".id) as approvals_count'
            );
        }

        if ($orderBy['field'] == 'likes_count') {
            $query->selectRaw(
                '(((SELECT COUNT(*) from likes dis where dis.like=1 and dis.proposal_id="proposals".id))-(SELECT COUNT(*) from likes l where l.like=0 and l.proposal_id="proposals".id)) as likes_count'
            );
        }
    }

    public function getOrderByVariables($data)
    {
        return [
            'order_by' =>
                isset($data['order_by']) && $data['order_by']
                    ? $data['order_by']
                    : json_encode([
                        'field' => 'approvals_count',
                        'order' => 'desc'
                    ]),

            'orderBys' => array_merge(
                [
                    json_encode([
                        'field' => 'approvals_count',
                        'order' => 'desc'
                    ]) => 'Mais apoiado',

                    json_encode([
                        'field' => 'approvals_count',
                        'order' => 'asc'
                    ]) => 'Menos apoiado',
                    json_encode([
                        'field' => 'pub_date',
                        'order' => 'desc'
                    ]) => 'Mais recente',

                    json_encode([
                        'field' => 'pub_date',
                        'order' => 'asc'
                    ]) => 'Mais antigo'
                ],
                //Caso as curtidas estejam habilitadas
                config('app.likes_enabled')
                    ? [
                        json_encode([
                            'field' => 'likes_count',
                            'order' => 'desc'
                        ]) => 'Mais curtido',

                        json_encode([
                            'field' => 'likes_count',
                            'order' => 'asc'
                        ]) => 'Menos curtido'
                    ]
                    : []
            )
        ];
    }

    public function ofState($states)
    {
        return Proposal::ofState($states)->get();
    }

    public function all()
    {
        //return Proposal::orderBy('updated_at', 'desc')->get();
        //Verificar com o Antônio
        //
        return Proposal::whereNotNull('id')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function find($id)
    {
        return Proposal::findOrFail($id);
    }

    public function follow($proposalId, $userId)
    {
        return ProposalFollow::firstOrCreate([
            'user_id' => $userId,
            'proposal_id' => $proposalId
        ]);
    }

    public function unfollow($proposalId, $userId)
    {
        $follow = ProposalFollow::where('user_id', $userId)
            ->where('proposal_id', $proposalId)
            ->first();

        if ($follow) {
            $follow->delete();
            return true;
        } else {
            return false;
        }
    }

    public function approve($id)
    {
        $proposal = $this->find($id);

        $state = $proposal->state;

        $user = Auth::user();

        $user_approvals = $user
            ->approvals()
            ->where('proposal_id', $id)
            ->get()
            ->count();

        if ($user_approvals > '0') {
            Session::flash('error_msg', 'Você já apoiou este projeto.');
        } else {
            $proposal->approvals()->save($user);
            Session::flash('flash_msg', 'Seu apoio foi incluído com sucesso.');
        }

        $total_approvals = $proposal
            ->approvals()
            ->where('proposal_id', $id)
            ->get()
            ->count();

        // Event Trigger
        // Condition: 20.000 approved this proposal + is not in_committee
        if (
            $total_approvals >= config('global.approvalGoal') &&
            $state == ProposalState::Approved &&
            $proposal->in_committee == false
        ) {
            // Set approval_goal flag
            $proposal->approval_goal = true;
            $proposal->save();

            // Fire Event
            event(new ProposalReachedApprovalGoal($proposal));
        }
    }

    public function toCommittee($id)
    {
        $proposal = $this->find($id);

        // Set in_committee flag
        $proposal->in_committee = true;
        $proposal->save();

        //event(new ProposalSent($proposal))

        return $proposal;
    }

    public function setApprovalGoal($id)
    {
        $proposal = $this->find($id);

        // Set approval_goal flag
        $proposal->approval_goal = true;
        $proposal->save();

        return $proposal;
    }

    public function publish($id)
    {
        $proposal = $this->find($id);

        //Append Moderation Info only if never been Moderated before
        if ($proposal->approved_at == null && $proposal->approved_by == null) {
            $proposal->approved_at = Carbon::now();
            $proposal->approved_by = Auth::user()->id;
            $proposal->pub_date = Carbon::now();
            $proposal->limit_date = Carbon::now()->addDays(
                config('global.daysUntilExpiration')
            );
            $proposal->disapproved_at = null;
            $proposal->disapproved_by = null;

            //Save
            $proposal->save();
            event(new ProposalApproved($proposal));
        }

        return $proposal;
    }

    public function notResponded()
    {
        return Proposal::whereNull('approved_by')
            ->whereNull('disapproved_by')
            ->whereNull('response')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function approved()
    {
        return Proposal::whereNotNull('approved_by')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function disapproved()
    {
        return Proposal::whereNotNull('disapproved_by')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function expired()
    {
        return Proposal::where('time_limit', true)
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function approvalGoal()
    {
        return Proposal::where('approval_goal', true)
            ->where('in_committee', false)
            ->whereNotNull('approved_by')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function inCommittee()
    {
        return Proposal::where(function ($query) {
            $query
                ->where('approved_by', '<>', null)
                ->orwhere('disapproved_by', '<>', null);
        })
            ->where('in_committee', true)
            ->whereNull('approved_by_committee')
            ->whereNull('disapproved_by_committee')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function approvedByCommittee()
    {
        return Proposal::whereNotNull('approved_by_committee')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function disapprovedByCommittee()
    {
        return Proposal::whereNotNull('disapproved_by_committee')
            ->orderBy('updated_at', 'desc')
            ->get();
    }

    public function timeLimit()
    {
        // Get approveds Proposals
        $proposals_approveds = $this->approved();

        // Get today - 2015-12-19 00:00:00
        $today = Carbon::today();

        foreach ($proposals_approveds as $proposal_approved) {
            //If expired
            if (
                $proposal_approved->approved_at
                    ->addDays(config('global.timeLimit'))
                    ->diffInDays($today) < 0
            ) {
                $proposal_approved->time_limit = true;

                $proposal_approved->save();
            }
        }
    }

    public function storeBillProject()
    {
        $user = new BillProject();

        $uuid = Uuid::uuid4();

        $user->name = Input::get('name');
        $user->email = Input::get('email');
        $user->password = Hash::make(Input::get('password'));

        $user->uf = Input::get('uf');
        $user->role_id = Input::get('role_id');
        $user->cpf = Input::get('cpf');

        $user->uuid = $uuid;

        $user->save();
    }

    /**
     * Get all of the proposals for a given user.
     *
     * @param User $user
     *
     * @return Collection
     */
    public function forUser($user_id)
    {
        return Proposal::where('user_id', $user_id)
            ->orderBy('created_at', 'asc')
            ->get();
    }

    /**
     * Get all of the responses proposals for a given user.
     *
     * @param User $user
     *
     * @return Collection
     */
    public function getResponsesForUser($user_id)
    {
        return Proposal::where('responder_id', $user_id)
            ->orderBy('created_at', 'asc')
            ->get();
    }

    public function sendProposalApprovalGoalNotification($proposal)
    {
        //dd($proposal);

        Mail::send(
            'emails.proposal-goal-notification',
            ['proposal' => $proposal],
            function ($message) use ($proposal) {
                $message->from(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->to($proposal->user->email, $proposal->user->name);
                $message->bcc(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->subject(
                    'e-democracia: Notificação - Sua Proposta atingiu o número necessário de Apoios'
                );
            }
        );
    }

    public function sendProposalApprovedByCommittee($proposal)
    {
        //dd($proposal);

        Mail::send(
            'emails.proposal-approval-by-committee',
            ['proposal' => $proposal],
            function ($message) use ($proposal) {
                $message->from(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->to($proposal->user->email, $proposal->user->name);
                $message->bcc(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->subject(
                    'e-democracia: Notificação - Proposta aprovada pelo Comitê'
                );
            }
        );
    }

    public function sendProposalClosedByCommittee($proposal)
    {
        //dd($proposal);

        Mail::send(
            'emails.proposal-closed-by-committee',
            ['proposal' => $proposal],
            function ($message) use ($proposal) {
                $message->from(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->to($proposal->user->email, $proposal->user->name);
                $message->bcc(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->subject(
                    'e-democracia: Notificação - Proposta encerrada pelo Comitê'
                );
            }
        );
    }

    public function sendProposalTimeLimit($proposal)
    {
        //dd($proposal);

        Mail::send(
            'emails.proposal-time-limit',
            ['proposal' => $proposal],
            function ($message) use ($proposal) {
                $message->from(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->to($proposal->user->email, $proposal->user->name);
                $message->bcc(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->subject(
                    'e-democracia: Notificação - Proposta aprovada pelo Comitê'
                );
            }
        );
    }

    public function sendProposalClosed($proposal)
    {
        //dd($proposal);

        Mail::send(
            'emails.proposal-closed',
            ['proposal' => $proposal],
            function ($message) use ($proposal) {
                $message->from(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->to($proposal->user->email, $proposal->user->name);
                $message->bcc(
                    config('mail.from.address'),
                    config('mail.from.name')
                );

                $message->subject(
                    'e-democracia: Notificação - Proposta encerrada'
                );
            }
        );
    }

    /**
     * @return mixed
     */
    public function filterProposals($q, $subjectsIds, $s)
    {
        if (empty($q)) {
            $q = 'All';
        }

        $query = Proposal::select('*');

        if (is_string($q)) {
            $q = json_decode($q);
        }
        $query->ofState($q);

        if ($subjectsIds) {
            $query->whereExists(function ($query) use ($subjectsIds) {
                $query
                    ->select(DB::raw(1))
                    ->from('proposal_subject')
                    ->whereRaw('proposal_id = "proposals".id')
                    ->whereIn('subject_id', $subjectsIds);
            });
        }

        $this->buildSearch($query, $s);

        return $query;
    }

    public function buildSearch($sqlQuery, $search)
    {
        $sqlQuery->where(function ($sqlQuery) use ($search) {
            foreach ($this->searchColumns as $searchColumn) {
                $sqlQuery->orWhere(
                    DB::raw("lower({$searchColumn})"),
                    'LIKE',
                    '%' . strtolower($search) . '%'
                );
            }
        });
    }
}
