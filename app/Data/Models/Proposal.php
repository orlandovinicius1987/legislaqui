<?php

namespace App\Data\Models;

use App\Data\Models\Approval;
use App\Data\Models\BillsProject;
use App\Data\Repositories\Notifications;
use App\Data\Models\Like;
use App\Data\Scopes\ViewableProposals;
use App\Notifications\SendProposalChanged;
use App\Notifications\SendProposalCreated;
use App\Data\Models\ProposalFollow;
use App\Data\Models\Subject;
use App\Data\Models\User;
use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;
use App\Enums\ProposalState;

class Proposal extends Eloquent implements Auditable
{
    use AuditableI, SoftDeletes;

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
        'pub_date',
        'limit_date'
    ];

    protected $fillable = [
        'name',
        'problem',
        'idea_exposition',
        'user_id',
        'approved',
        'pub_date',
        'limit_date'
    ];

    protected $appends = ['days_left', 'subject_ids_array'];

    protected $with = ['subjects'];

    public $orderBy = ['field' => 'pub_date', 'order' => 'desc'];

    //protected $guarded = ['id', 'pub_date', 'limit_date'];

    // Proposal __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Approvals __belongs_to_many__ Proposal
    public function approvals()
    {
        return $this->belongsToMany(
            User::class,
            'approvals',
            'proposal_id',
            'user_id'
        );
    }

    // Proposal __belongs_to__ Responder (User)
    public function responder()
    {
        return $this->belongsTo(User::class, 'responder_id');
    }

    // Proposal __has_many__ Likes
    /*public function likes()
    {
        return $this->hasMany(Like::class);
    }*/

    // Proposal __has_one_Bill_Project
    public function bill_project()
    {
        return $this->hasOne(BillsProject::class, 'id', 'bill_project_id');
    }

    // Rating = Lower bound of Wilson score confidence interval for a Bernoulli parameter
    /*public function getRatingAttribute()
    {
        $like = $this->like_count;
        //$like = Like::where('proposal_id', $this->id)->where('like', 1)->count();
        $unlike = $this->unlike_count;
        //$unlike = Like::where('proposal_id', $this->id)->where('like', 0)->count();

        if ($like == 0 && $unlike == 0) {
            return 0;
        }

        return (($like + 1.9208) / ($like + $unlike) -
                1.96 * sqrt(($like * $unlike) / ($like + $unlike) + 0.9604) /
                ($like + $unlike)) / (1 + 3.8416 / ($like + $unlike));
    }*/

    public function getLikeCountAttribute()
    {
        return Like::where('proposal_id', $this->id)
            ->where('like', 1)
            ->count();
    }

    public function getUnlikeCountAttribute()
    {
        return Like::where('proposal_id', $this->id)
            ->where('like', 0)
            ->count();
    }

    public function followers()
    {
        return $this->hasMany(ProposalFollow::class);
    }

    /**
     * @return \Illuminate\Support\Collection|\IlluminateAgnostic\Arr\Support\Collection|\IlluminateAgnostic\Collection\Support\Collection|\IlluminateAgnostic\Str\Support\Collection|\Vanilla\Support\Collection
     */
    public function getFollowersEmails()
    {
        $emailsArray = [];

        //Followers emails
        $this->followers->each(function (ProposalFollow $follower) use (
            &$emailsArray
        ) {
            $emailsArray[] = $follower->user->email;
        });

        //Owner email
        if ($this->user) {
            $emailsArray[] = $this->user->email;
        }

        return collect($emailsArray);
    }

    protected function dispatchMails($notification, Collection $emails)
    {
        $emails->each(function ($email) use ($notification) {
            $this->createNotificationModel($email, $notification)->notify(
                new $notification()
            );
        });
    }

    protected function makeSubject($notification)
    {
        return 'LEGISLAQUI - ' . $this->makeSubjectText($notification);
    }

    protected function makeSubjectText($notification): string
    {
        switch ($notification) {
            case SendProposalChanged::class:
                return 'Uma ideia legislativa que você acompanha foi alterada';
            case SendProposalCreated::class:
                return 'Sua ideia legislativa foi criada';
        }

        throw new \Exception(
            'Notification class not supported: ' . $notification
        );
    }

    public function createNotificationModel($destination, $notification)
    {
        return app(Notifications::class)->create([
            'proposal_id' => $this->id,
            'destination' => $destination,
            'subject' => $this->makeSubject($notification),
            'content_type' => $this->makeNotificationContentType($notification)
        ]);
    }

    protected function makeNotificationContentType($notification): string
    {
        switch ($notification) {
            case SendProposalChanged::class:
                return 'changed';
            case SendProposalCreated::class:
                return 'created';
        }

        throw new \Exception(
            'Notification class not supported: ' . $notification
        );
    }

    public function sendProposalChangedEmail()
    {
        $this->dispatchMails(
            SendProposalChanged::class,
            $this->getFollowersEmails()
        );
    }

    public function sendProposalCreatedEmail()
    {
        $this->dispatchMails(
            SendProposalCreated::class,
            $this->getFollowersEmails()
        );
    }

    public function getTotalLikeCountAttribute()
    {
        return $this->like_count - $this->unlike_count;
    }

    public function getApprovalsCountAttribute()
    {
        return Approval::where('proposal_id', $this->id)->count();
    }

    public function getDaysLeftAttribute()
    {
        return now() > $this->limit_date
            ? 0
            : now()->diffInDays($this->limit_date);
    }

    public function subjects()
    {
        return $this->belongsToMany(Subject::class);
    }

    public function getSubjectIdsArrayAttribute()
    {
        return $this->subjects()
            ->get()
            ->pluck('id');
    }

    public function getStateAttribute()
    {
        if (!blank($this->bill_project_id)) {
            //Projeto de lei
            return ProposalState::BillProject;
        } else {
            if (!blank($this->disapproved_at_committee)) {
                //Não encaminhada
                return ProposalState::NotForwarded;
            } elseif (!blank($this->approved_at_committee)) {
                //Encaminhada
                return ProposalState::Forwarded;
            } else {
                if ($this->in_committee) {
                    //Enviada
                    return ProposalState::Sent;
                } else {
                    if (
                        $this->approvals_count <
                            config('global.approvalGoal') &&
                        $this->days_left == 0 &&
                        blank($this->disapproved_at)
                    ) {
                        //Expirada
                        return ProposalState::Expired;
                    } elseif (
                        $this->approvals_count >=
                            config('global.approvalGoal') &&
                        blank($this->disapproved_at)
                    ) {
                        //Apoiada
                        return ProposalState::Supported;
                    } else {
                        if (!blank($this->disapproved_at)) {
                            //Desaprovada
                            return ProposalState::Disapproved;
                        } elseif (!blank($this->approved_at)) {
                            //Aprovada
                            return ProposalState::Approved;
                        } else {
                            //Não moderada
                            return ProposalState::NotModerated;
                        }
                    }
                }
            }
        }
    }

    public function isModeratable()
    {
        $state = $this->state;
        return $state == ProposalState::NotModerated ||
            $state == ProposalState::Disapproved ||
            $state == ProposalState::Approved ||
            $state == ProposalState::Expired ||
            $state == ProposalState::Supported;
    }

    public function scopeOfState($query, $states)
    {
        collect($states)->each(function ($state) use ($query) {
            $query->orWhere(function ($query) use ($state) {
                switch ($state) {
                    case ProposalState::NotModerated:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 0)
                            ->whereNull('approved_at')
                            ->whereNull('disapproved_at');

                        break;
                    case ProposalState::Approved:
                        //Aprovada, não atingiu o limite e não expirou
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 0)
                            ->whereRaw(
                                '(select count(*) from approvals a where a.proposal_id = proposals.id) < ' .
                                    config('global.approvalGoal')
                            )
                            ->whereNotNull('approved_at')
                            ->whereNull('disapproved_at');

                        break;
                    case ProposalState::Disapproved:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 0)
                            ->whereRaw(
                                '(select count(*) from approvals a where a.proposal_id = proposals.id) < ' .
                                    config('global.approvalGoal')
                            )
                            ->whereNull('approved_at')
                            ->whereNotNull('disapproved_at');
                        break;
                    case ProposalState::Supported:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 0)
                            ->whereRaw(
                                '(select count(*) from approvals a where a.proposal_id = proposals.id) >= ' .
                                    config('global.approvalGoal')
                            )
                            ->whereNull('disapproved_at')
                            ->whereNotNull('approved_at');
                        break;
                    case ProposalState::Expired:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 0)
                            ->whereRaw(
                                '(select count(*) from approvals a where a.proposal_id = proposals.id) < ' .
                                    config('global.approvalGoal')
                            )
                            ->whereDate('limit_date', '<', now())
                            ->whereNull('disapproved_at')
                            ->whereNotNull('approved_at');
                        break;
                    case ProposalState::Sent:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 1)
                            ->whereNotNull('approved_at');
                        break;
                    case ProposalState::Forwarded:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNull('disapproved_at_committee')
                            ->whereNotNull('approved_at_committee')
                            ->where('in_committee', 1)
                            ->whereNotNull('approved_at');
                        break;
                    case ProposalState::NotForwarded:
                        $query
                            ->whereNull('bill_project_id')
                            ->whereNotNull('disapproved_at_committee')
                            ->whereNull('approved_at_committee')
                            ->where('in_committee', 1)
                            ->whereNotNull('approved_at');
                        break;
                    case ProposalState::BillProject:
                        $query
                            ->whereNotNull('bill_project_id')
                            ->whereNotNull('approved_at');
                        break;
                }
            });
        });

        return $query;
    }

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope(new ViewableProposals());
    }
}
