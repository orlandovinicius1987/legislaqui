<?php

namespace App\Policies;

use App\Data\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
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

    public function edit(User $loggedUser, User $userCan)
    {
        return $loggedUser->is_super_user;
    }

    public function bypass(User $loggedUser, User $userCan)
    {
        return false;
    }
}
