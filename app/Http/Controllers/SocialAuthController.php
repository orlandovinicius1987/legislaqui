<?php

namespace App\Http\Controllers;

use App\Repositories\SocialUserRepository;
use App\SocialNetwork;
use App\User;
use App\State;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Socialite;
use Ramsey\Uuid\Uuid;

class SocialAuthController extends Controller
{
    /**
     * @var SocialUser
     */

    private $SocialUserRepository;

    /**
     * Redirect the user to the Facebook authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('facebook')->redirect();
    }
    /**
     * Obtain the user information from Facebook.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('facebook')->user();
        $this->SocialUserRepository = new SocialUserRepository();
        $this->SocialUserRepository->storeUser($user);

        #############  Test Area ###############
        $id = $user->getId();
        $nickName = $user->getNickname();
        $name = $user->getName();
        $email = $user->getEmail();
        $avatar = $user->getAvatar();
        return view('teste', ['id'=> $id,'nickName'=>$nickName,'name'=>$name,'email'=>$email,'avatar'=>$avatar]);
        /*$user = Socialite::driver('facebook')->user();
        return view('socialite')->with(compact('user'));     recebendo o usuário e mandando pra view
        dd($user);    //'dump and die'*/
    }
}



