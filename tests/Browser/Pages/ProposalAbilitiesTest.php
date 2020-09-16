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
                ->loginAs($randomUser['id'])
                ->visit('/')
                ->click('@newProposalButton')
                ->assertSee('PROPOR IDEIA LEGISLATIVA')
                ->type('@name_field',  $newProposal['name'])
                ->type('@problem_field',  $newProposal['problem'])
                ->type('@exposionidea_field',  $newProposal['idea_exposition'])
                ->screenshot('filledProposal-created')
                ->click('@submitbuttonproposal')
                ->pause(5000)
                ->assertSee($newProposal['problem'])
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
                ->type('@name_field',$newProposal['name'])
                ->type('@problem_field',$newProposal['problem'])
                ->type('@exposionidea_field', $newProposal['idea_exposition'])
                ->screenshot('filledProposal-included')
                ->click('@submitbuttonproposal')
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
        $randomProposal = Proposal::all()->random();
        $randomProposal->user->name = $randomUser['name'];

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->click('@editIdea')
                ->type('@name-edit_field',  $randomProposal['name'].'**')
                ->type('@problem-edit_field',  $randomProposal['problem'].'**')
                ->type('@exposionidea-edit_field',  $randomProposal['idea_exposition'].'**')
                ->click('@savebutton')
                ->pause(5000)
                ->assertSee($randomProposal['problem'].'**')
                ->screenshot('proposalSuccessfullyEdited');
        });
        $this->assertDatabaseHas('proposals', [
            'name' => $randomProposal['name'].'**',
            'problem' => $randomProposal['problem'].'**',
        ]);
    }
}
