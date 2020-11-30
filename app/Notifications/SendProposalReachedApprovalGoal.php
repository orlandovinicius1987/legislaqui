<?php

namespace App\Notifications;

use App\Mail\ProposalReachedApprovalGoal;

class SendProposalReachedApprovalGoal extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalReachedApprovalGoal
     */
    public function toMail($notification)
    {
        return new ProposalReachedApprovalGoal($notification);
    }
}
