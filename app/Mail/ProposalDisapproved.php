<?php
namespace App\Mail;

use App\Data\Models\Proposal as ProposalModel;

class ProposalDisapproved extends Mailable
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
            ->markdown('emails.proposal-disapproved')
            ->with([
                'notification' => $this->notification,
                'proposal' => ProposalModel::withoutGlobalScopes()
                    ->find($this->notification->proposal_id)
                    ->load('user')
            ]);

        return $this;
    }
}
