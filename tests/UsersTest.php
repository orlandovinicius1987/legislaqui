<?php

use App\State;

class UsersTest extends TestCase
{
    public function testRegisterAction()
    {
        // use the factory to create a Faker\Generator instance
        $faker = Faker\Factory::create();
        // Add pt_BR provider
        $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

        //Generate a User Data to Register
        $name = $faker->name($gender = null | 'male' | 'female');
        $email = $faker->freeEmail();
        $cpf = $faker->cpf;
        $pwd = '123456';
        $state = State::all()->random();
        $uuid = $faker->uuid;

        // prevent validation error on captcha
        NoCaptcha::shouldReceive('verifyResponse')
            ->once()
            ->andReturn(true);

        // provide hidden input for your 'required' validation
        NoCaptcha::shouldReceive('display')
            ->zeroOrMoreTimes()
            ->andReturn('<input type="hidden" name="g-recaptcha-response" value="1" />');

        $this->visit('/')
            ->click('Registro')
            ->seePageIs('/login')
            ->type($name, 'name')
            ->type($email, 'email')
            ->type($cpf, 'cpf')
            ->type($pwd, 'password')
            ->type($pwd, 'password_confirmation')
            ->select($state->uf, 'uf')
            ->type($uuid, 'uuid')
            //->submitForm('Search',['search_term' => 'tests'])
            ->press('Registro')
            ->see('Registro feito com Sucesso.')
            ->seePageIs('/')
            ->seeInDatabase('users', ['email' => $email]);
    }

    public function testLogin()
    {
        $user = App\User::all()->random();
        $user_name = $user->name;
        $user_email = $user->email;
        $user_pwd = '123456';

        return $this->visit('/')
            ->click('Login')
            ->type($user_email, 'email')
            ->type($user_pwd, 'password')
            ->press('Login')
            ->see($user_name);
    }

    public function testLoginError()
    {
        $this->visit('/')
            ->click('Login | Registro')
            ->seePageIs('/login')
            ->type('WrongUserEmail', 'email')
            ->type('WrongUserPwd', 'password')
            ->press('Login')
            ->see('Credenciais informadas');   //aviso de credenciais incorretas
    }

    public function testActingAsUserNameShow()
    {
        $user = factory(App\User::class)->create();

        $this->actingAs($user)
            ->visit('/')
            ->see($user->name);
    }

    /*
    public function testLoginSocialNetwork()    // NÃO TERMINADO: o click não está identificando nenhum button com essa id
    {
       $this->visit('/')
            ->click('Login | Registro')
            ->seePageIs('/login')
            ->click('facebookButton');
        //         ->seePageIs('https://www.facebook.com');
    }*/
}
