<?php

namespace App\Notifications;

use App\Mail\ProposalDisapproved;

class SendProposalDisapproved extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalDisapproved
     */
    public function toMail($notification)
    {
        return new ProposalDisapproved($notification);
    }
}
