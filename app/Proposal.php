<?php

namespace App;

use App\Data\Repositories\Notifications;
use App\Notifications\SendProposalChanged;
use App\Notifications\SendProposalCreated;
use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;

class Proposal extends Eloquent
{
    use SoftDeletes;

    //public $timestamps = false;

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

    /*public function getTotalLikeCountAttribute()
    {
        return $this->like_count - $this->unlike_count;
    }*/

    /* public function getApprovalsCountAttribute()
    {
        return User::all()->approvals()->get()->count();
    }*/
}
