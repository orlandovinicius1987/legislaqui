<?php
namespace App\Mail;

use App\Proposal as ProposalModel;

class ProposalChanged extends Mailable
{
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->to($this->notification->routeNotificationForMail())
            ->from('example@gamil.com','name')
            ->subject($this->notification->subject)
            ->markdown('emails.proposal-changed')
            ->with([
                'notification' => $this->notification,
                'proposal' => ProposalModel::find(
                    $this->notification->proposal_id
                )->load('user')
            ]);

        return $this;
    }
}
