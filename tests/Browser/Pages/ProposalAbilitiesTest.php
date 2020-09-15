<?php

namespace Tests\Browser\Pages;

use App\User;
use App\Proposal;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProposalAbilitiesTest extends DuskTestCase
{
    private static $newProposal;
    private static $randomProposal;
    private static $newUser;
    private static $randomUser;

    public function init()
    {
        static::$newProposal =  factory(Proposal::class)->raw();
        static::$randomProposal = Proposal::all()->random()->toArray();
        static::$newUser =  factory(User::class)->raw();
        static::$randomUser = User::all()->random()->toArray();
    }

    public function testCreateProposal()
    {


        $this->init();
        $randomUser = static::$randomUser;
        $newProposal = static:: $newProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $newProposal
        ) {
            $browser
                ->pause(6000)// Wait for Travis CI to load the page
                ->loginAs($randomUser['id'])
                ->visit('/')
                ->click('@newProposalButton')
                ->assertSee('PROPOR IDEIA LEGISLATIVA')
                ->value('@name_field',  $newProposal['name'])
                ->value('@problem_field',  $newProposal['problem'])
                ->value('@exposionidea_field',  $newProposal['idea_exposition'])
                ->screenshot('filledProposal-created')
                ->press('@submitbuttonproposal')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee( $newProposal['idea_exposition'])
                ->screenshot('proposalSuccessfullyCreated');
        });
        $this->assertDatabaseHas('proposals', ['name' =>  $newProposal['name']]);
    }

    public function testIncludeProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;
        $newProposal = static::$newProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal,
            $newProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->click('@novaIdeia')
                ->value('@name_field',$newProposal['name'])
                ->value('@problem_field',$newProposal['problem'])
                ->value('@exposionidea_field', $newProposal['idea_exposition'])
                ->screenshot('filledProposal-included')
                ->press('@submitbuttonproposal')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee($newProposal['problem'])
                ->screenshot('proposalSuccessfullyIncluded');

        });
        $this->assertDatabaseHas('proposals', ['name' => $newProposal['name']]);
    }

    public function testEditProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $newProposal = static::$newProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $newProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/')
                ->click('@newProposalButton')
                ->assertSee('PROPOR IDEIA LEGISLATIVA')
                ->value('@name_field',  $newProposal['name'])
                ->value('@problem_field',  $newProposal['problem'])
                ->value('@exposionidea_field',  $newProposal['idea_exposition'])
                ->press('@submitbuttonproposal')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee( $newProposal['idea_exposition'])
                ->click('@editIdea')
                ->value('@name-edit_field',$newProposal['name'].'**')
                ->value('@problem-edit_field',$newProposal['problem'].'**')
                ->press('@savebutton')
                ->pause(5000)
                ->assertSee($newProposal['problem'])
                ->screenshot('proposalSuccessfullyEdited');
        });
        $this->assertDatabaseHas('proposals', [
            'name' => $newProposal['name'].'**',
            'problem' => $newProposal['problem'].'**',
        ]);
    }
}
