<?php
//
//use App\State;
//use Laravel\Dusk\Browser;
//use App\Repositories\UsersRepository;
//use Tests\DuskTestCase;
//
//class HomeFunctionalTest extends DuskTestCase
//{
//    public function testLinksMenuBar()
//    {
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('INÍCIO')
//                ->assertPathIs('/');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('Como Funciona?')
//                ->assertPathIs('/about');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                // Sub-menu Ideia Legislativa?
//                ->click('@newProposalButton')
//                ->acceptDialog()
//                ->assertPathIs('/login');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                // Sub-menu Ideia Legislativa?
//                ->click('@TermsOfServiceBar')
//                ->assertPathIs('/terms');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('Nossas comissões')
//                ->assertPathIs('/committee');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('Termos de uso')
//                ->assertPathIs('/terms');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('Contato')
//                ->assertPathIs('/contact');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('Login | Registro')
//                ->assertPathIs('/login');
//        });
//    }
//
//    public function testContact()
//    {
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/contact')
//                ->type('name', 'Acebolado Silva')
//                ->type('email', 'alerjteste@alerj.com')
//                ->type(
//                    'message',
//                    'Gostaria de solicitar neve no natal de São Gonçalo'
//                )
//                ->screenshot('teste')
//                ->press('Enviar!')
//                ->assertPathIs('/contact')
//                ->assertSee('Obrigado por');
//        });
//    }
//
//    public function testLinksFiltersIndex()
//    {
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('ABERTAS')
//                ->assertQueryStringHas('q', 'open');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('NA COMISSÃO')
//                ->assertQueryStringHas('q', 'committee');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('EXPIRADAS')
//                ->assertQueryStringHas('q', 'expired');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('NÃO ACATADAS')
//                ->assertQueryStringHas('q', 'disapproved');
//        });
//
//        $this->browse(function (Browser $browser) {
//            $browser
//                ->visit('/')
//                ->clickLink('APROVADAS')
//                ->assertQueryStringHas('q', 'approved');
//        });
//    }
//
//    public function testRegisterAction()
//    {
//        $faker = $this->createFaker();
//
//        $user = [
//            'name' => $faker->name,
//            'cpf' => $faker->cpf,
//            'pwd' => '12345678',
//            'state' => State::all()->random(),
//            'uuid' => $faker->uuid,
//            'email' => $faker->unique()->email,
//        ];
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->visit('/') //Receive cookie
//                ->visit('/login')
//                ->assertPathIs('/login')
//                ->type('name', $user['name'])
//                ->type('email', $user['email'])
//                ->type('cpf', $user['cpf'])
//                ->type('password', $user['pwd'])
//                ->type('password_confirmation', $user['pwd'])
//                ->select('uf', $user['state']->uf)
//                ->click('@registerButton')
//                ->assertPathIs('/')
//                ->assertAuthenticatedAs(
//                    app(UsersRepository::class)->findByEmail($user['email'])
//                );
//        });
//
//        $this->assertDatabaseHas('users', ['email' => $user['email']]);
//    }
//
//    public function testLoginAction()
//    {
//        $user = App\User::all()->random();
//        $user->password = Hash::make('secret');
//        $user->save();
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->visit('/') //Receive cookie
//                ->visit('/login')
//                ->type('#email', $user->email)
//                ->type('#password', 'secret')
//                ->press('@loginButton')
//                ->assertSee(mb_strtoupper($user->name));
//        });
//    }
//
//    public function testLoginError()
//    {
//        $faker = $this->createFaker();
//
//        $this->browse(function (Browser $browser) use ($faker) {
//            $browser
//                ->visit('/')
//                ->visit('/login')
//                ->assertPathIs('/login')
//                ->type('#email', $faker->email)
//                ->type('#password', $faker->title)
//                ->press('@loginButton')
//                ->screenshot('teste6')
//                ->assertSee('Credenciais informadas'); //aviso de credenciais incorretas
//        });
//    }
//
//    public function testActingAsUserNameShow()
//    {
//        $user = factory(App\User::class)->create();
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->loginAs($user->id)
//                ->visit('/')
//                ->assertSee(mb_strtoupper($user->name));
//        });
//    }
//
//    public function testViewAdminWithoutLogin()
//    {
//        $this->browse(function (Browser $browser) {
//            $browser->visit('/admin')->assertPathIs('/login');
//        });
//    }
//
//    private function switchToLatestTab($browser)
//    {
//        $window = collect($browser->driver->getWindowHandles())->last();
//
//        $browser->driver->switchTo()->window($window);
//
//        return $browser;
//    }
//
//    public function testAdminMainScreen()
//    {
//        $user = factory(App\User::class, 'admin')->create();
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->loginAs($user->id)
//                ->visit('/')
//                ->mouseover('@loginName')
//                ->click('@loginGoToAdminPanel');
//
//            $this->switchToLatestTab($browser);
//
//            $browser->assertPathIs('/admin');
//        });
//    }
//
//    public function testLinksAdminMainScreen()
//    {
//        $user = factory(App\User::class, 'admin')->create();
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->loginAs($user->id)
//                ->visit('/admin')
//                ->assertPathIs('/admin')
//                ->click('@verpropostas')
//                ->assertPathIs('/admin/proposals')
//                ->click('@maisinfoapoios')
//                ->assertPathIs('/admin/proposals')
//                ->click('@maisinfousuarioregistrados')
//                ->assertPathIs('/admin/users')
//                ->click('@maisinfoaguardandomoderacao')
//                ->assertPathIs('/admin/proposals/notresponded');
//        });
//    }
//
//    public function testAdminProposalsFilter()
//    {
//        $user = factory(App\User::class, 'admin')->create();
//
//        $this->browse(function (Browser $browser) use ($user) {
//            $browser
//                ->loginAs($user->id)
//
//                ->visit('/admin')
//                ->click('@proposalsLink')
//                ->assertPathIs('/admin/proposals')
//
//                ->visit('/admin')
//                ->click('@notrespondedLink')
//                ->assertPathIs('/admin/proposals/notresponded')
//
//                ->visit('/admin')
//                ->click('@approvedLink')
//                ->assertPathIs('/admin/proposals/approved')
//
//                ->visit('/admin')
//                ->click('@disapprovedLink')
//                ->assertPathIs('/admin/proposals/disapproved')
//
//                ->visit('/admin')
//                ->click('@approvalGoalLink')
//                ->assertPathIs('/admin/proposals/approval-goal')
//
//                ->visit('/admin')
//                ->click('@expiredLink')
//                ->assertPathIs('/admin/proposals/expired')
//
//                ->visit('/admin')
//                ->click('@inCommitteeLink')
//                ->assertPathIs('/admin/proposals/in-committee')
//
//                ->visit('/admin')
//                ->click('@approvedByCommitteeLink')
//                ->assertPathIs('/admin/proposals/approved-by-committee')
//
//                ->visit('/admin')
//                ->click('@disapprovedByCommitteeLink')
//                ->assertPathIs('/admin/proposals/disapproved-by-committee')
//
//                ->visit('/admin')
//                ->click('@usersLink')
//                ->assertPathIs('/admin/users')
//
//                ->visit('/admin')
//                ->click('@usersCidadaoLink')
//                ->assertQueryStringHas('q', 'cidadao')
//
//                ->visit('/admin')
//                ->click('@usersServidoresLink')
//                ->assertQueryStringHas('q', 'servidores');
//        });
//    }
//
//    public function testAdminEditing()
//    {
//        $user = factory(App\User::class, 'admin')->create();
//
//        $newUser = factory(App\User::class)->raw();
//
//        $this->browse(function (Browser $browser) use ($user, $newUser) {
//            $name = $user->name;
//
//            $browser
//                ->loginAs($user->id)
//                ->visit('/admin')
//                ->assertSee('Ideias Legislativas')
//                ->clickLink('Todos')
//                ->waitUntil(
//                    '!!$(\'#dataTableUser\').DataTable().search(\'' .
//                        $name .
//                        '\').draw()'
//                )
//                ->clickLink($name)
//                ->visit('/admin/users/' . $user->id)
//                ->click('#editarUsuario')
//                ->assertPathIs('/admin/users/' . $user->id . '/edit')
//                ->type('name', $newUser['name'])
//                ->type('email', $newUser['email'])
//                ->select('role_id', $newUser['role_id'])
//                ->press('Gravar');
//        });
//
//        $this->assertDatabaseHas('users', [
//            'email' => $newUser['email'],
//            'name' => $newUser['name'],
//            'role_id' => $newUser['role_id'],
//        ]);
//    }
//
//    public function testAdmCreatingUser()
//    {
//        $user = factory(App\User::class, 'admin')->create();
//        $newUser = factory(App\User::class)->raw();
//
//        $this->browse(function (Browser $browser) use ($user, $newUser) {
//            $browser
//                ->loginAs($user)
//                ->visit('/admin')
//                ->assertSee('Ideias Legislativas')
//                ->clickLink('Todos')
//                ->click('#criarNovoUsuario')
//                ->assertPathIs('/admin/users/create')
//                ->type('name', $newUser['name'])
//                ->type('email', $newUser['email'])
//                ->select('uf', 'RJ')
//                ->select('role_id', $newUser['role_id'])
//                ->type('cpf', $newUser['cpf'])
//                ->press('Incluir Novo Usuário')
//                ->assertSee('Usuário Incluído com Sucesso');
//        });
//
//        $this->assertDatabaseHas('users', [
//            'email' => $newUser['email'],
//            'name' => $newUser['name'],
//            'role_id' => $newUser['role_id'],
//        ]);
//    }
//}
