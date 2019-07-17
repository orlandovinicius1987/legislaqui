<?php

namespace App\Notifications;

use App\Mail\ProposalChanged;

class SendProposalChanged extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalChanged
     */
    public function toMail($notification)
    {
        return new ProposalChanged($notification);
    }
}
