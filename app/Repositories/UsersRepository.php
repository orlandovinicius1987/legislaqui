<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 10:49.
 */
namespace App\Repositories;

use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

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

    public function storeUser()
    {
        $user = new User();

        $uuid = Uuid::uuid4();

        $user->name = Input::get('name');
        $user->email = Input::get('email');
        $user->password = Hash::make(Input::get('password'));

        $user->uf = Input::get('uf');
        $user->role_id = Input::get('role_id');
        $user->cpf = Input::get('cpf');

        $user->uuid = $uuid;

        $user->save();
    }
}
