<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 17:24
 */

namespace App\Repositories;

use App\State;
use App\Role;

class DataRepository
{
    public function getStates()
    {
        return State::pluck('nome', 'uf');
    }

    public function getRoles()
    {
        return Role::pluck('role', 'id');
    }
}

