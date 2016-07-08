<?php

use App\Proposal;
use App\State;
use App\User;

use Faker\Factory;

use Anhskohbo\NoCaptcha\Facades\NoCaptcha;
use  Illuminate\Contracts\Auth\Authenticatable;

//use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ProposalsTest extends TestCase
{
    /**
     * A basic functional test example.
     *
     * @return void
     */
    public function testRandomProposal()
    {
        //Use Eloquent
        //$proposal = Proposal::all()->random();

        //Not use Eloquent
        $proposal = factory(App\Proposal::class)->create();

        $this->visit('/proposals')
            ->seeInDatabase('proposals', ['name' => $proposal->name]);

        //Not with Paginator
        //->see($proposal->name);
    }

    public function testLogin()
    {
        $user = User::all()->random();
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

    public function testProposalsControllerIndex()
    {
        //Visit /proposals
        $response = $this->call('GET', 'proposals');

        $this->assertViewHas('proposals');
        // getData() returns all vars attached to the response.
        $proposals = $response->original->getData()['proposals'];

        // When calling the paginate method, you will receive an instance of Illuminate\Pagination\LengthAwarePaginator
        $this->assertInstanceOf('Illuminate\Pagination\LengthAwarePaginator', $proposals);
        //$this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $proposals);
    }

    public function testClickProposal()
    {
        $proposal = Proposal::paginate(20)->shuffle()->first();
        $url_proposal = '/proposals/' . $proposal->id;
        //dd($proposal->id, $url_proposal);
        $this->visit('/proposals')
            ->click($proposal->name);
//            ->see($proposal->name)
//            ->see($proposal->central_idea)
//            ->see($proposal->problem);
//            ->seePageIs($url_proposal);
    }

    public function testRegisterAction ()
    {
        // use the factory to create a Faker\Generator instance
        $faker = Faker\Factory::create();
        // Add pt_BR provider
        $faker->addProvider(new Faker\Provider\pt_BR\Person($faker));

        //Generate a User Data to Register
        $name = $faker->name($gender = null|'male'|'female');
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
            ->type($name,'name')
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

    public function testCreateProposal ()
    {
        $user = User::all()->random();

        $this->actingAs($user)->visit('/proposals/create')
            ->seePageIs('/proposals/create')
            ->type('idea name','name')
            ->type('central idea', 'idea_central')
            ->type('problem','problem')
            ->type('idea exposition','idea_exposition')
            ->press('Incluir')
            ->see('Sucesso');
    }

    public function testProposalResponse ()
    {
        //use the factory to create a Faker\Generator instance
        $faker = Faker\Factory::create();

        //generate a 6 words proposal response
        $response = $faker->sentence($nbWords = 6, $variableNbWords = true);

        //get first admin user in DB
        $user = User::where('role_id', 0)->first();

        //authenticate the given user -> navigate through not responded menu -> fill proposal response -> see if it's in DB
        $this->actingAs($user)
            ->visit('/')
            ->click('Sem Resposta')
            ->seePageIs('/proposals/notresponded')
            ->click('Responder Proposta')
            ->see('Responder Proposta Legislativa')
            ->type($response, 'response')
            ->press('Responder')
            ->see('Ideia Legislativa Respondida com Sucesso')
            ->seeInDatabase('proposals', ['response' => $response]);
    }

    public function testProposalPaginates()
    {
        factory(App\Proposal::class, 50)->create();
        $proposals = App\Proposal::paginate(20);
        $this->assertEquals(20, $proposals->count());
    }


    public function testCookie()
    {
        $this->call('GET', '/');
        $this->seeCookie('uuid', Cookie::get('uuid'));
    }
}