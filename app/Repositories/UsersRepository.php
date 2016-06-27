<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 10:49
 */

namespace App\Repositories;

use Auth;
use Session;
use App\User;
use App\Proposal;


class UsersRepository
{
    public function all()
    {
        return User::all();
    }

    public function find($id)
    {
        return User::findOrFail($id);
    }

    public function destroy($id)
    {
        return User::destroy($id);
    }

}
