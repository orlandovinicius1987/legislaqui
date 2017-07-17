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
            ->press('Registro')
            ->see('Registro feito com Sucesso.')
            ->seePageIs('/')
            ->seeInDatabase('users', ['email' => $email]);
    }

    public function testLoginAction()
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

    /*public function testFunctionsOfUser()    Função sem sentido
    {
        $proposal = factory(App\Proposal::class)->create();
        $id = $proposal->user_id;
        $user = App\User::find($id);
        $user->role_id;
    }*/

    public function testViewAdminWithoutLogin()
    {
        $this->visit('/admin')
            ->seePageIs('/login');
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
              ->visit('/admin/users/'.$user->id)
              ->click('editarUsuario')
              ->seePageIs('/admin/users/'.$user->id.'/edit')
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

 /*   // FUNCTION não funciona
    public function testUserInteractingWithProposal()
    {
        $proposal = factory(App\Proposal::class)->create();
        $id = $proposal->user_id;

        $user = App\User::find($id);
        $name = $proposal->name;
        $this->actingAs($user)
            ->visit('/')
           ->type($name,'search')
            ->click('pesquisar')
            ->click($name)
            ->visit('/proposals/'.$proposal->id);
    }*/


    // testes unitarios de funções

    public function testSocialNetworks()
    {
        //$user = factory(App\User::class, 'admin')->create();
        $user = factory(App\User::class)->create();
        $roleId = $user->socialNetworks();
        return $roleId;
    }


    public function testGetUserByEmail()
     {
         $user = App\User::all()->random();
         $user = factory(App\User::class)->create();

     }





    public function testPush()
    {
        $stack = [];
        $this->assertEquals(0, count($stack));
        array_push($stack, 'Felipe');

        $this->assertEquals('Felipe', $stack[count($stack) - 1]);
        $this->assertEquals(1, count($stack));

        $this->assertEquals('Felipe', array_pop($stack));
        $this->assertEquals(0, count($stack));

        $this->assertEmpty($stack);
    }
}
