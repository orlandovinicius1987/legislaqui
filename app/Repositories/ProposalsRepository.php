<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Mail;
use App\User;
use App\Proposal;

class ProposalsRepository
{
    /**
     * Get all of the proposals for a given user.
     *
     * @param  User  $user
     * @return Collection
     */
    public function forUser($user_id)
    {
        return Proposal::where('user_id', $user_id)
            ->orderBy('created_at', 'asc')
            ->get();
    }

    public function sendProposalToCreator ($proposal)
    {
        //dd($proposal);

            Mail::send('emails.proposal', ['proposal' => $proposal], function ($message) use ($proposal) {
            //Mail::send('emails.reminder', ['user' => $user], function ($message) use ($user) {
            //$m->from('hello@app.com', 'Your Application');
            //$message->from('us@example.com', 'Laravel');
            $message->from('admin@alerj.rj.gov.br', 'e-democracia');

            $message->to($proposal->user->email, $proposal->user->name)->subject('Your Reminder!');

            $message->subject('e-democracia: Proposta Criada');
        });
    }
}