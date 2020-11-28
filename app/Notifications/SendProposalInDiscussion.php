<?php

namespace App\Notifications;

use App\Mail\ProposalInDiscussion;

class SendProposalInDiscussion extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalInDiscussion
     */
    public function toMail($notification)
    {
        return new ProposalInDiscussion($notification);
    }
}
