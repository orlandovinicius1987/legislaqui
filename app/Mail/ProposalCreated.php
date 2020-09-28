<?php
namespace App\Mail;

use App\Proposal as ProposalModel;

class ProposalCreated extends Mailable
{
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->to($this->notification->routeNotificationForMail())
            ->from($this->fromArray('address'), $this->fromArray('name'))
            ->subject($this->notification->subject)
            ->markdown('emails.proposal-to-creator')
            ->with([
                'notification' => $this->notification,
                'proposal' => ProposalModel::find(
                    $this->notification->proposal_id
                )->load('user')
            ]);

        return $this;
    }
}
