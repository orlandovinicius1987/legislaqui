<?php

namespace App\Providers;

use App\Events\ProposalApproved;
use App\Events\ProposalBillProject;
use App\Events\ProposalDisapproved;
use App\Events\ProposalInDiscussion;
use App\Events\ProposalReachedApprovalGoal;
use App\Listeners\NotifyProposalApproved;
use App\Listeners\NotifyProposalBillProject;
use App\Listeners\NotifyProposalDisapproved;
use App\Listeners\NotifyProposalInDiscussion;
use App\Listeners\NotifyProposalReachedApprovalGoal;
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
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [SendEmailVerificationNotification::class],

        \SocialiteProviders\Manager\SocialiteWasCalled::class => [
            // add your listeners (aka providers) here
            'SocialiteProviders\YouTube\YouTubeExtendSocialite@handle',
            'SocialiteProviders\Instagram\InstagramExtendSocialite@handle'
        ],

        ProposalWasCreated::class => [NotifyProposalCreator::class],
        ProposalChanged::class => [NotifyProposalChanged::class],
        ProposalApproved::class => [NotifyProposalApproved::class],
        ProposalDisapproved::class => [NotifyProposalDisapproved::class],
        ProposalInDiscussion::class => [NotifyProposalInDiscussion::class],
        ProposalReachedApprovalGoal::class => [
            NotifyProposalReachedApprovalGoal::class
        ],
        ProposalBillProject::class => [NotifyProposalBillProject::class]
    ];
}
