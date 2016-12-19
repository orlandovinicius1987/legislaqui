<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 10:49.
 */
namespace App\Repositories;


use App\Http\Controllers\Auth\AuthController;
use App\User;
use App\SocialNetwork;
use App\SocialUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

class SocialUserRepository
{

    private $SocialUser;


     public function find($id)
      {
          $this->SocialUser = new SocialUser();
          return $this->SocialUser->find($id);
      }


      public function destroy($id)
      {
        return User::destroy($id);
      }

      public function storeUserFacebook($user)
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

        return $userModel;
     }

    public function storeUserTwitter($user)
    {
        $userModel = new User;
        $userModel-> name = $user->getName();
        $userModel-> email= $user->getId() . '@legislaqui.rj.gov.br';
        $userModel-> password = 'Empty';
        $userModel-> uf = 'RJ';
        $userModel-> role_id = '99';
        $uuid = Uuid::uuid4();
        $userModel-> uuid = $uuid;
        $userModel->save();

        $socialNetwork = SocialNetwork::find(2);
        $userModel->socialNetworks()->save($socialNetwork, ['social_network_user_id' => $user->getId() , 'data' => json_encode($user)]);
        return $userModel;
    }

    public function storeUserYoutube($user)
    {
        $userModel = new User;

        if ($user->getName()){
            $userModel-> name = $user->getName();
        } elseif ($user->getNickname()) {
            $userModel-> name = $user->getNickname();
        } else {
            $userModel-> name = 'sem nome';
        }

        if($user->getEmail()){
            $userModel-> email = $user->getEmail();
        } else {
            $userModel-> email= $user->getId() . '@legislaqui.rj.gov.br';
        }

        $userModel-> password = 'Empty';
        $userModel-> uf = 'RJ';
        $userModel-> role_id = '99';
        $uuid = Uuid::uuid4();
        $userModel-> uuid = $uuid;
        $userModel->save();

        $socialNetwork = SocialNetwork::find(3);
        $userModel->socialNetworks()->save($socialNetwork, ['social_network_user_id' => $user->getId() , 'data' => json_encode($user)]);
        return $userModel;
    }


    public function storeUserLinkedin($user)
    {
        $userModel = new User;

        if ($user->getName()){
            $userModel-> name = $user->getName();
        } elseif ($user->getNickname()) {
            $userModel-> name = $user->getNickname();
        } else {
            $userModel-> name = 'sem nome';
        }

        if($user->getEmail()){
            $userModel-> email = $user->getEmail();
        } else {
            $userModel-> email= $user->getId() . '@legislaqui.rj.gov.br';
        }

        $userModel-> password = 'Empty';
        $userModel-> uf = 'RJ';
        $userModel-> role_id = '99';
        $uuid = Uuid::uuid4();
        $userModel-> uuid = $uuid;
        $userModel->save();

        $socialNetwork = SocialNetwork::find(4);
        $userModel->socialNetworks()->save($socialNetwork, ['social_network_user_id' => $user->getId() , 'data' => json_encode($user)]);
        return $userModel;
    }

    public function createUser($email, $socialUser)
    {
        $userModel = new User;

        if ($socialUser->getName()){
            $userModel-> name = $socialUser->getName();
        } elseif ($socialUser->getNickname()) {
            $userModel-> name = $socialUser->getNickname();
        } else {
            $userModel-> name = 'sem nome';
        }


        if($socialUser->getEmail()){
        } else {
            $userModel-> email= $socialUser->getId() . '@legislaqui.rj.gov.br';
        }

        $userModel-> email = $email;
        $userModel-> password = 'Empty';
        $userModel-> uf = 'RJ';
        $userModel-> role_id = '99';
        $uuid = Uuid::uuid4();
        $userModel-> uuid = $uuid;
        $userModel->save();

        return $userModel;
    }
}
