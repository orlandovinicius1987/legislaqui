<?php

namespace App\Policies;

use App\Proposal;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProposalPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the given proposal can be bypassed to committee by the user.
     *
     * @param \App\User     $user
     * @param \App\Proposal $proposal
     *
     * @return bool
     */
    public function bypass(User $user, Proposal $proposal)
    {
        return $user->is_committee_user;
    }

    /**
     * Determine if the given proposal can be updated by the user.
     *
     * @param \App\User     $user
     * @param \App\Proposal $proposal
     *
     * @return bool
     */
    public function edit(User $user, Proposal $proposal)
    {
        return $this->isProposalOwner($user, $proposal);
    }

    /**
     * Determine if the given proposal can be destroyed by the user.
     *
     * @param \App\User     $user
     * @param \App\Proposal $proposal
     *
     * @return bool
     */
    public function destroy(User $user, Proposal $proposal)
    {
        return $this->isProposalOwner($user, $proposal);
    }

    /**
     * @param User     $user
     * @param Proposal $proposal
     *
     * @return bool
     */
    public function isProposalOwner(User $user, Proposal $proposal)
    {
        return $user->id === $proposal->user_id;
    }

    public function before($user, $ability)
    {
        return $user->is_admin;
    }
}
