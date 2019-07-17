<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\ProposalChanged;
use App\Listeners\NotifyProposalSubscribers;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [SendEmailVerificationNotification::class],
        'App\Events\ProposalWasCreated' => [
            'App\Listeners\EmailProposalCreator',
        ],
        'App\Events\ProposalApproved' => [
            'App\Listeners\EmailProposalApproved',
        ],
        'App\Events\ProposalClosed' => ['App\Listeners\EmailProposalClosed'],
        'App\Events\ProposalReachedApprovalGoal' => [
            'App\Listeners\EmailProposalReachedApprovalGoal',
        ],
        'App\Events\ProposalTimeLimit' => [
            'App\Listeners\EmailProposalTimeLimit',
        ],
        'App\Events\ProposalApprovedByCommittee' => [
            'App\Listeners\EmailProposalApprovedByCommittee',
        ],
        'App\Events\ProposalClosedByCommittee' => [
            'App\Listeners\EmailProposalClosedByCommittee',
        ],

        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // add your listeners (aka providers) here
            'SocialiteProviders\YouTube\YouTubeExtendSocialite@handle',
            'SocialiteProviders\Instagram\InstagramExtendSocialite@handle',
        ],

        ProposalChanged::class => [NotifyProposalSubscribers::class],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }
}
