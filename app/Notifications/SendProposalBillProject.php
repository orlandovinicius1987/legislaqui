<?php

namespace App\Notifications;

use App\Mail\ProposalBillProject;

class SendProposalBillProject extends Notification
{
    protected $notification;

    /**
     * Get the mail representation of the notification.
     *
     * @param  $notification
     *
     * @return \App\Mail\ProposalBillProject
     */
    public function toMail($notification)
    {
        return new ProposalBillProject($notification);
    }
}
