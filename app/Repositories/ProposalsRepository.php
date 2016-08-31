<?php

namespace App\Repositories;

use App\Proposal;
use App\User;
use Auth;
use DB;
use Illuminate\Support\Facades\Mail;
use Session;

class ProposalsRepository
{
    private $searchColumns = [
        'name',
        'idea_central',
        'problem',
        'idea_exposition',
        'response',
    ];

    public function all()
    {
        return Proposal::all();
    }

    public function find($id)
    {
        return Proposal::findOrFail($id);
    }

    public function approve($id)
    {
        $proposal = $this->find($id);

        $user = Auth::user();

        $approvals = $user->approvals()->where('proposal_id', $id)->get()->count();

        if ($approvals > '0') {
            Session::flash('error_msg', 'Você já apoiou este projeto.');
        } else {
            $proposal->approvals()->save($user);
            Session::flash('flash_msg', 'Seu apoio foi incluído com sucesso.');
        }

        // Event Trigger
        // Condition: 20.000 approved this proposal + is not in_committee
        if (($approvals >= config('global.approvalGoal')) && ($proposal->in_committee == null)) {

            // Set approval_goal flag
            $proposal->approval_goal = true;

            // Fire Event
            event(new ProposalReachedApprovalGoal($proposal));

            // Set in_committee flag
            $proposal->in_committee = true;
        }
    }

    public function notResponded()
    {
        return Proposal::whereNull('approved_by')->whereNull('disapproved_by')->whereNull('response')->get();
    }

    public function approved()
    {
        return Proposal::whereNotNull('approved_at')->get();
    }

    public function disapproved()
    {
        return Proposal::whereNotNull('disapproved_at')->get();
    }

    public function expired()
    {
        return Proposal::where('time_limit', true)->get();
    }

    public function approvalGoal()
    {
        return Proposal::where('approval_goal', true)->get();
    }

    public function approvedByCommittee()
    {
        return Proposal::whereNotNull('approved_by_committee')->get();
    }

    public function disapprovedByCommittee()
    {
        return Proposal::whereNotNull('disapproved_by_committee')->get();
    }

    public function timeLimit()
    {
        // Get approveds Proposals
        $proposals_approveds = $this->approved();

        // Get today - 2015-12-19 00:00:00
        $today = Carbon::today();

        foreach ($proposals_approveds as $proposal_approved) {
            //If expired
            if ($proposal_approved->approved_at->addDays(config('global.timeLimit'))->diffInDays($today) < 0) {
                $proposal_approved->time_limit = true;

                $proposal_approved->save();
            }
        }
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

    public function sendProposalToCreator($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-to-creator', ['proposal' => $proposal], function ($message) use ($proposal) {
            //Mail::send('emails.reminder', ['user' => $user], function ($message) use ($user) {
            //$m->from('hello@app.com', 'Your Application');
            //$message->from('us@example.com', 'Laravel');
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name)->subject('Your Reminder!');

            $message->subject('e-democracia: Proposta Criada');
        });
    }

    public function sendProposalApprovalGoalNotification($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-goal-notification', ['proposal' => $proposal], function ($message) use ($proposal) {
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name);
            $message->bcc('admin@alerj.rj.gov.br', 'e-democracia');

            $message->subject('e-democracia: Notificação - Sua Proposta atingiu o número necessário de Apoios');
        });
    }

    public function sendProposalApprovalByCommittee($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-approval-by-committee', ['proposal' => $proposal], function ($message) use ($proposal) {
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name);
            $message->bcc('admin@alerj.rj.gov.br', 'e-democracia');

            $message->subject('e-democracia: Notificação - Proposta aprovada pelo Comitê');
        });
    }

    public function sendProposalClosedByCommittee($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-closed-by-committee', ['proposal' => $proposal], function ($message) use ($proposal) {
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name);
            $message->bcc('admin@alerj.rj.gov.br', 'e-democracia');

            $message->subject('e-democracia: Notificação - Proposta encerrada pelo Comitê');
        });
    }

    public function sendProposalTimeLimit($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-time-limit', ['proposal' => $proposal], function ($message) use ($proposal) {
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name);
            $message->bcc('admin@alerj.rj.gov.br', 'e-democracia');

            $message->subject('e-democracia: Notificação - Proposta aprovada pelo Comitê');
        });
    }

    public function sendProposalClosed($proposal)
    {
        //dd($proposal);

        Mail::send('emails.proposal-closed', ['proposal' => $proposal], function ($message) use ($proposal) {
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name);
            $message->bcc('admin@alerj.rj.gov.br', 'e-democracia');

            $message->subject('e-democracia: Notificação - Proposta encerrada');
        });
    }

    /**
     * @return mixed
     */
    public function filterProposals($q, $s)
    {
        if (empty($q)) {
            $q = 'open';
        }
        // Users cannot see what's not approved
        $query = Proposal::whereNotNull('approved_by');

        if ($q == 'open') {
            $query->where(['open' => true, 'in_committee' => false]);
        }

        if ($q == 'comittee') {
            $query->where(['open' => true, 'in_committee' => true]);
        }

        if ($q == 'expired') {
            $query->whereNotNull('time_limit_by')->where(['open' => false, 'time_limit' => true]);
        }

        if ($q == 'disapprove') {
            $query->whereNotNull('disapproved_by_committee')->where('open', false);
        }

        $this->buildSearch($query, $s);
        $query->orderBy('created_at', 'desc');

        return $query;
    }

    public function buildSearch($sqlQuery, $search)
    {
        $sqlQuery->where(function ($sqlQuery) use ($search) {
            foreach ($this->searchColumns as $searchColumn) {
                $sqlQuery->orWhere(DB::raw("lower({$searchColumn})"), 'LIKE', '%'.strtolower($search).'%');
            }
        });
    }
}
