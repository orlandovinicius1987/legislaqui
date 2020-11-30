<?php

namespace App\Listeners;

use App\Events\ProposalInDiscussion;

class NotifyProposalInDiscussion
{
    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ProposalInDiscussion $event)
    {
        $event->proposal->sendProposalInDiscussionEmail();
    }
}
