<?php

namespace Tests\Browser\Pages;

use App\Repositories\UsersRepository;
use App\Data\Models\User;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class UserTest extends DuskTestCase
{
    private static $newUser;
    private static $randomUser;

    public function init()
    {
        static::$newUser = factory(User::class)->raw();
        static::$randomUser = User::all()
            ->random()
            ->toArray();
    }

    public function testRegister()
    {
        $this->init();
        $newUser = static::$newUser;

        $this->browse(function (Browser $browser) use ($newUser) {
            $browser
                ->logout()
                ->visit('/login')
                ->assertSee('Nome')
                ->type('name', $newUser['name'])
                ->type('@register-email', $newUser['email'])
                ->type('cpf', $newUser['cpf'])
                //                ->type('@register-password',$newUser['password'])
                ->type('@register-password', '12345678')
                //                ->type('password_confirmation',$newUser['password'])
                ->type('password_confirmation', '12345678')
                ->select('uf', $newUser['uf'])
                ->screenshot('register')
                ->click('@registerButton')
                ->pause(1000)
                ->screenshot('after-register');
        });
        $this->assertDatabaseHas('users', ['name' => $newUser['name']]);
    }

    public function testLogin()
    {
        $this->init();
        $randomUser = static::$randomUser;

        $this->browse(function (Browser $browser) use ($randomUser) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/')
                ->pause(1000)
                ->screenshot('login')
                ->assertAuthenticatedAs(
                    app(UsersRepository::class)->findByEmail(
                        $randomUser['email']
                    )
                );
        });
    }
}
