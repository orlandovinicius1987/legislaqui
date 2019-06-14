<?php

use App\State;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class HomeFunctionalTest extends DuskTestCase
{
    public function testLinksMenuBar()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('INÍCIO')
                ->assertPathIs('/');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('Como Funciona?')
                ->assertPathIs('/about');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                // Sub-menu Ideia Legislativa?
                ->click('@newProposalButton')
                ->acceptDialog()
                ->assertPathIs('/login');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                // Sub-menu Ideia Legislativa?
                ->click('@TermsOfServiceBar')
                ->assertPathIs('/terms');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('Nossas comissões')
                ->assertPathIs('/committee');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('Termos de uso')
                ->assertPathIs('/terms');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('Contato')
                ->assertPathIs('/contact');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('Login | Registro')
                ->assertPathIs('/login');
        });
    }

    public function testContact()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/contact')
                ->type('name', 'Acebolado Silva')
                ->type('email', 'alerjteste@alerj.com')
                ->type(
                    'message',
                    'Gostaria de solicitar neve no natal de São Gonçalo'
                )
                ->screenshot('teste')
                ->press('Enviar!')
                ->assertPathIs('/contact')
                ->assertSee('Obrigado por');
        });
    }

    public function testLinksFiltersIndex()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('ABERTAS')
                ->assertQueryStringHas('q', 'open');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('NA COMISSÃO')
                ->assertQueryStringHas('q', 'committee');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('EXPIRADAS')
                ->assertQueryStringHas('q', 'expired');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('NÃO ACATADAS')
                ->assertQueryStringHas('q', 'disapproved');
        });

        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->clickLink('APROVADAS')
                ->assertQueryStringHas('q', 'approved');
        });
    }

    public function testRegisterAction()
    {
        // use the factory to create a Faker\Generator instance
        $faker = Faker\Factory::create();
        // Add pt_BR provider
        $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

        // prevent validation error on captcha
        NoCaptcha::shouldReceive('verifyResponse')
            ->once()
            ->andReturn(true);

        // provide hidden input for your 'required' validation
        NoCaptcha::shouldReceive('display')
            ->zeroOrMoreTimes()
            ->andReturn(
                '<input type="hidden" name="g-recaptcha-response" value="1" />'
            );

        $email = $faker->unique()->email;

        $this->browse(function (Browser $browser) use ($faker, $email) {
            //Generate a User Data to Register
            $name = $faker->name;
            $cpf = $faker->cpf;
            $pwd = '123456';
            $state = State::all()->random();
            $uuid = $faker->uuid;

            $browser
                ->visit('/')
                ->screenshot('teste1')
                ->click('@loginOrRegister');
            //                ->screenshot('teste2')
            //                ->assertPathIs('/login')
            //                ->type($name, 'name')
            //                ->type($email, 'email')
            //                ->type($cpf, 'cpf')
            //                ->type($pwd, 'password')
            //                ->type($pwd, 'password_confirmation')
            //                ->select($state->uf, 'uf')
            //                ->type($uuid, 'uuid')
            //                ->press('@registerButton')
            //                ->assertSee('Registro feito com Sucesso.')
            //                ->screenshot('teste2')
            //                ->assertPathIs('/');
        });

        $this->assertDatabaseHas('users', ['email' => $email]);
    }

    public function testLoginAction()
    {
        $user = App\User::all()->random();
        $user->password = Hash::make('secret');
        $user->save();

        $this->browse(function (Browser $browser) use ($user) {
            $browser
                ->visit('/login')
                ->type('#email', $user->email)
                ->type('#password', 'secret')
                ->press('@loginButton')
                ->assertSee(strtoupper($user->name));
        });
    }

    public function testLoginError()
    {
        $this->visit('/')
            ->click('Login | Registro')
            ->seePageIs('/login')
            ->type('WrongUserEmail', 'email')
            ->type('WrongUserPwd', 'password')
            ->press('Login')
            ->see('Credenciais informadas'); //aviso de credenciais incorretas
    }

    public function testActingAsUserNameShow()
    {
        $user = factory(App\User::class)->create();
        $this->actingAs($user)
            ->visit('/')
            ->see($user->name);
    }

    public function testViewAdminWithoutLogin()
    {
        $this->visit('/admin')->seePageIs('/login');
    }

    public function testAdminMainScreen()
    {
        $user = factory(App\User::class, 'admin')->create();
        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->see('Ideias Legislativas');
    }

    public function testLinksAdminMainScreen()
    {
        $user = factory(App\User::class, 'admin')->create();
        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->seePageIs('/admin')
            ->click('verpropostas')
            ->seePageIs('/admin/proposals')
            //   ->click('maisinfoapoios')      LINK NÃO FUNCIONAL
            //    ->seePageIs('/admin/proposals#');
            ->click('maisinfousuarioregistrados')
            ->seePageIs('/admin/users')
            ->click('maisinfoaguardandomoderacao')
            ->seePageIs('/admin/proposals/notresponded');
    }

    public function testAdminProposalsFilter()
    {
        $user = factory(App\User::class, 'admin')->create();
        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->seePageIs('/admin');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Todas')
            ->seePageIs('/admin/proposals');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Aguardando Publicação')
            ->seePageIs('/admin/proposals/notresponded');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Publicadas')
            ->seePageIs('/admin/proposals/approved');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Desaprovadas')
            ->seePageIs('/admin/proposals/disapproved');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Atingiram 20000 apoios')
            ->seePageIs('/admin/proposals/approval-goal');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Ideias Expiradas')
            ->seePageIs('/admin/proposals/expired');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Aguardando Análise')
            ->seePageIs('/admin/proposals/in-committee');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Aprovadas')
            ->seePageIs('/admin/proposals/approved-by-committee');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Encerradas')
            ->seePageIs('/admin/proposals/disapproved-by-committee');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Todos')
            ->seePageIs('/admin/users');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Cidadãos')
            ->seePageIs('/admin/users?q=cidadao');

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Servidores')
            ->seePageIs('/admin/users?q=servidores');
    }

    public function testAdminEditing()
    {
        $faker = Faker\Factory::create();
        $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

        $user = factory(App\User::class, 'admin')->create();

        $name = $user->name;
        $input = [0, 1, 99, 2];
        $roleId = $input[array_rand($input, 1)];

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Todos')
            ->type($name, 'dataTableUser')
            ->click($name)
            ->visit('/admin/users/' . $user->id)
            ->click('editarUsuario')
            ->seePageIs('/admin/users/' . $user->id . '/edit')
            ->type($faker->name, 'name')
            ->type($faker->email, 'email')
            ->select($roleId, 'role_id')
            ->press('Gravar')
            ->see('Usuário Editado com Sucesso');
    }

    public function testAdmCreatingUser()
    {
        $faker = Faker\Factory::create();
        // Add pt_BR provider
        $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

        $user = factory(App\User::class, 'admin')->create();

        $input = [0, 1, 99, 2];
        $roleId = $input[array_rand($input, 1)];

        $this->actingAs($user)
            ->visit('/')
            ->click('Ir ao Painel de Admin')
            ->click('Todos')
            ->click('criarNovoUsuario')
            ->seePageIs('/admin/users/create')
            ->type($faker->name, 'name')
            ->type($faker->email, 'email')
            ->select('RJ', 'uf')
            ->select($roleId, 'role_id')
            ->type($faker->cpf, 'cpf')
            ->press('Incluir Novo Usuário');
    }
}
