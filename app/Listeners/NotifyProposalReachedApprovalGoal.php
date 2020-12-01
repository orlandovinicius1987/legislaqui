<?php

namespace App\Listeners;

use App\Events\ProposalReachedApprovalGoal;

class NotifyProposalReachedApprovalGoal extends Listener
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalReachedApprovalGoal $event)
    {
        $event->proposal->sendProposalReachedApprovalGoalEmail();
    }
}
