<?php

namespace App\Repositories;

use Auth;
use Session;
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

    /**
     * Get all of the responses proposals for a given user.
     *
     * @param  User  $user
     * @return Collection
     */
    public function getResponsesForUser($user_id)
    {
        return Proposal::where('responder_id', $user_id)
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

    public function all()
    {
        return Proposal::all();
    }

    public function find($id)
    {
        return Proposal::findOrFail($id);
    }

    public function approve($id)
    {
        $proposal = $this->find($id);

        $user = Auth::user();

        $approvals = $user->approvals()->where('proposal_id', $id)->get()->count();

        if ($approvals > '0') {
            Session::flash('error_msg','Você já apoiou este projeto.');
        }
        else {
            $proposal->approvals()->save($user);
            Session::flash('flash_msg','Seu apoio foi incluído com sucesso.');
        }
    }
}