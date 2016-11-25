<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 10:49.
 */
namespace App\Repositories;

use App\SocialUser;
use App\User;
use App\SocialNetwork;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

class SocialUserRepository
{

     public function all()
    {
        return User::all();
    }

    public function find($id)
    {
        return SocialUser::findOrFail($id);
    }

    public function destroy($id)
    {
        return User::destroy($id);
    }

   public function storeUser($user)
    {
       $userModel = new User;
       $userModel-> name = $user->getName();
       $userModel-> email = $user->getEmail();
       $userModel-> password = 'Empty';
       $userModel-> uf = 'RJ';
       $userModel-> role_id = '99';
       $uuid = Uuid::uuid4();
       $userModel-> uuid = $uuid;
       $userModel->save();

       $socialNetwork = SocialNetwork::find(1);
       $userModel->socialNetworks()->save($socialNetwork, ['social_network_user_id' => $user->getId() , 'data' => json_encode($user)]);

  }
}
