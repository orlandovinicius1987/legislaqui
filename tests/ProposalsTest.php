<?php

use App\Proposal;
use App\State;
use App\User;

use Illuminate\Foundation\Testing\WithoutMiddleware;
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
        $proposal = Proposal::all()->random();

        $this->visit('/')
            ->see($proposal->name);
    }

    public function testLogin()
    {
        $user = User::all()->random();
        $user_name = $user->name;
        $user_email = $user->email;
        $user_pwd = 'senha';

        return $this->visit('/')
            ->click('Login')
            ->type($user_email, 'email')
            ->type($user_pwd, 'password')
            ->press('Login')
            ->see($user_name);
    }

    public function testClickProposal()
    {
        $proposal = Proposal::all()->shuffle()->first();
        $url_proposal = '/proposals/' . $proposal->id;

        $this->visit('/proposals/')
            ->click($proposal->name)
            ->see($proposal->name)
            ->see($proposal->central_idea)
            ->see($proposal->problem)
            ->seePageIs($url_proposal);
    }

    public function testRegisterAction ()
    {
        $state = State::all()->random();
        //State::where('uf', 'RJ')->get()->random();

        $this->visit('/')
            ->click('Registro')
            ->seePageIs('/register')
            ->type('Nome','name')
            ->type('teste@gmail.com', 'email')
            ->type('teste', 'password')
            ->select($state->uf, 'uf')
            ->press('Registro');

    }

    public function testCreateProposal ()
    {
        $this->testLogin()->visit('/proposals/create')
            ->seePageIs('/proposals/create')
            ->type('idea name','name')
            ->type('central idea', 'idea_central')
            ->type('problem','problem')
            ->type('idea exposition','idea_exposition')
            ->press('Incluir')
            ->see('Sucesso');
    }

}
