<?php

namespace App\Providers;

use App\Events\ProposalApproved;
use App\Events\ProposalBillProject;
use App\Events\ProposalDisapproved;
use App\Events\ProposalnDiscussion;
use App\Events\ProposalReachedApprovalGoal;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\ProposalChanged;
use App\Events\ProposalWasCreated;
use App\Listeners\NotifyProposalChanged;
use App\Listeners\NotifyProposalCreator;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [SendEmailVerificationNotification::class],
        ProposalWasCreated::class => [NotifyProposalCreator::class],

        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // add your listeners (aka providers) here
            'SocialiteProviders\YouTube\YouTubeExtendSocialite@handle',
            'SocialiteProviders\Instagram\InstagramExtendSocialite@handle'
        ],

        ProposalChanged::class => [NotifyProposalChanged::class],
        ProposalApproved::class => [NotifyProposalChanged::class],
        ProposalDisapproved::class => [NotifyProposalChanged::class],
        ProposalnDiscussion::class => [NotifyProposalChanged::class],
        ProposalReachedApprovalGoal::class => [NotifyProposalChanged::class],
        ProposalBillProject::class => [NotifyProposalChanged::class]
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
