<?php
/**
 * Created by PhpStorm.
 * User: ffeder
 * Date: 12/12/2016
 * Time: 16:43
 */

namespace App\Services\SocialLogin;

use App\Repositories\SocialUserRepository;
use App\Repositories\UsersRepository;
use App\SocialNetwork;


class SocialUserService
{
    /**
     * @var SocialUserRepository
     */
    private $socialUserRepository;

    /**
     * @var UsersRepository
     */
    private $usersRepository;

    public function __construct(SocialUserRepository $socialUserRepository, UsersRepository $usersRepository)
    {
        $this->socialUserRepository = $socialUserRepository;
        $this->usersRepository = $usersRepository;
    }

    public function find($socialNetwork, $socialUser)
    {
        $email = $this->getEmail($socialUser, $socialNetwork);

        $user = $this->findOrCreateUser($socialNetwork, $socialUser, $email);

        $socialNetwork = $this->getSocialNetwork($socialNetwork);

        $this->findOrCreateUserSocialNetwork($socialNetwork, $socialUser, $user);

        $this->login($user);

        return $user;
    }

    /**
     * @param $socialUser
     * @return \Illuminate\Http\RedirectResponse
     */
    public function login($user)
    {
        return auth()->login($user);
    }

    private function getEmail($user, $socialNetwork)
    {
        return $user->getEmail() ?: sprintf('%s@%s.legislaqui.rj.gov.br', $user->getId(), $socialNetwork);
    }

    /**
     * @param $socialNetwork
     * @param $socialUser
     * @param $email
     * @return \App\User
     */
    public function findOrCreateUser($socialNetwork, $socialUser, $email)
    {
        if (!$user = $this->usersRepository->findByEmail($email)) {
            $user = $this->socialUserRepository->createUser($email, $socialUser, $socialNetwork);

            return $user;
        }

        return $user;
    }

    /**
     * @param $socialNetwork
     * @return mixed
     */
    public function getSocialNetwork($socialNetwork)
    {
        $socialNetwork = SocialNetwork::where('name', $socialNetwork)->first();

        return $socialNetwork;
    }

    /**
     * @param $socialNetwork
     * @param $socialUser
     * @param $user
     */
    public function findOrCreateUserSocialNetwork($socialNetwork, $socialUser, $user)
    {
        if (!$userSocialNetwork = $user->socialNetworks()->where('social_network_id', $socialNetwork->id)->first()) {
            $userSocialNetwork = $user->socialNetworks()->save($socialNetwork, ['social_network_user_id' => $socialUser->getId(), 'data' => json_encode($user)]);
        }
    }
}

