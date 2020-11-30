<?php

namespace App\Listeners;

use App\Events\ProposalBillProject;

class NotifyProposalBillProject
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalBillProject $event)
    {
        $event->proposal->sendProposalBillProjectEmail();
    }
}
