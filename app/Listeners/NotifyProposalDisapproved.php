<?php

namespace App\Listeners;

use App\Events\ProposalDisapproved;

class NotifyProposalDisapproved
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalDisapproved $event)
    {
        $event->proposal->sendProposalDisapprovedEmail();
    }
}
