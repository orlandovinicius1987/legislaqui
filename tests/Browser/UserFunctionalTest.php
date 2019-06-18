<?php

use App\State;
use Tests\DuskTestCase;

class UserFunctionalTest extends DuskTestCase
{
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
