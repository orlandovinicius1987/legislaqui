<?php

namespace App\Listeners;

use App\Events\ProposalWasCreated;
use App\Notifications\SendProposalChanged;
use App\ProposalFollow;
use App\User;
use App\Events\ProposalChanged;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyProposalCreator
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalWasCreated $event)
    {
        $event->proposal->sendProposalCreatedEmail();
    }
}
