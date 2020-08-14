<?php


namespace Tests\Browser\Pages;


use App\User;
use App\Proposal;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProposalTests extends DuskTestCase
{
    private static $proposal;
    private static $proposal1;
    private static $randomUser;
    private static $randomProposal;

    public function init()
    {
        static::$proposal =  factory(Proposal::class)->raw();
        static::$proposal1 =  factory(Proposal::class)->raw();
        static::$randomProposal = Proposal::all()->random()->toArray();
        static::$randomUser = User::all()->random()->toArray();
    }

    public function testCreateProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $proposal = static::$proposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $proposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/')
                ->click('@newProposalButton')
                ->assertSee('PROPOR IDEIA LEGISLATIVA')
                ->type('name', $proposal['name'])
                ->type('problem', $proposal['problem'])
                ->type('idea_exposition', $proposal['idea_exposition'])
                ->screenshot('filledProposal-created')
                ->press('Enviar proposta de ideia')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee($proposal['idea_exposition'])
                ->screenshot('proposalSuccessfullyCreated');

        });
        $this->assertDatabaseHas('proposals', ['name' => $proposal['name']]);
    }

    public function testIncludeProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;
        $proposal1 = static::$proposal1;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal,
            $proposal1
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->click('@novaIdeia')
                ->type('name', $proposal1['name'])
                ->type('problem', $proposal1['problem'])
                ->type('idea_exposition', $proposal1['idea_exposition'])
                ->screenshot('filledProposal-included')
                ->press('Enviar proposta de ideia')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee($proposal1['problem'])
                ->screenshot('proposalSuccessfullyIncluded');

        });
        $this->assertDatabaseHas('proposals', ['name' => $proposal1['name']]);
    }

    public function testSearchProposal()
    {
        $this->init();
        $randomProposal = static::$randomProposal;

        $this->browse(function (Browser $browser) use (
            $randomProposal
        ) {
            dd($randomProposal);
            $browser
                ->visit('/proposals')
                ->type('@proposal-search',$randomProposal['problem'])
                ->press( '@submitButton')
                ->waitForText($randomProposal['problem'])
                ->assertSee($randomProposal['idea_exposition'])
                ->screenshot('proposalSuccessfullyCreated');

        });
        $this->assertDatabaseHas('proposals', ['name' => $proposal['name']]);
    }
}
