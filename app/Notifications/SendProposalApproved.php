<?php

namespace App\Notifications;

use App\Mail\ProposalApproved;

class SendProposalApproved extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalApproved
     */
    public function toMail($notification)
    {
        return new ProposalApproved($notification);
    }
}
