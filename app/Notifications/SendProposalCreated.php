<?php

namespace App\Notifications;

use App\Mail\ProposalCreated;

class SendProposalCreated extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalCreated
     */
    public function toMail($notification)
    {
        return new ProposalCreated($notification);
    }
}
