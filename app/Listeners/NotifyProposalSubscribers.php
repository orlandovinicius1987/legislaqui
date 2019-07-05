<?php

namespace App\Listeners;

use App\Notifications\SendProposalChanged;
use App\ProposalFollow;
use App\User;
use App\Events\ProposalChanged;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyProposalSubscribers
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalChanged $event)
    {
        $event->proposal->sendProposalChangedEmail();
    }
}
