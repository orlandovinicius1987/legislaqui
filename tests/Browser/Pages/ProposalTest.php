<?php

namespace Tests\Browser\Pages;

use App\User;
use App\Proposal;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProposalTest extends DuskTestCase
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
                ->type('name',  $newProposal['name'])
                ->type('problem',  $newProposal['problem'])
                ->type('idea_exposition',  $newProposal['idea_exposition'])
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
                ->type('name',$newProposal['name'])
                ->type('problem',$newProposal['problem'])
                ->type('idea_exposition', $newProposal['idea_exposition'])
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
                ->type('name',  $newProposal['name'])
                ->type('problem',  $newProposal['problem'])
                ->type('idea_exposition',  $newProposal['idea_exposition'])
                ->press('@submitbuttonproposal')
                ->waitForText('Ideia Legislativa Incluída com Sucesso')
                ->pause(5000)
                ->assertSee( $newProposal['idea_exposition'])
                ->click('@editIdea')
                ->type('name',$newProposal['name'].'**')
                ->type('problem',$newProposal['problem'].'**')
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

    public function testLikeProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->press('@like')
                ->waitForText('Sua curtida foi computada com sucesso.')
                ->screenshot('proposalSuccessfullyLiked');

        });
        $this->assertDatabaseHas('likes', [
            'like' => 1,
            'proposal_id' => $randomProposal['id'],
            'user_id' => $randomUser['id'],
        ]);
    }

    public function testDisLikeProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->press('@dislike')
                ->waitForText('Sua descurtida foi computada com sucesso.')
                ->screenshot('proposalSuccessfullyDisLiked');

        });
        $this->assertDatabaseHas('likes', [
            'like' => 0,
            'proposal_id' => $randomProposal['id'],
            'user_id' => $randomUser['id'],
        ]);
    }

    public function testSupportProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->press('@support')
                ->waitForText('Seu apoio foi incluído com sucesso.')
                ->assertSee('Seu apoio foi incluído com sucesso.')
                ->screenshot('proposalSuccessfullySupported');
        });
    }

    public function testFollowProposal()
    {
        $this->init();
        $randomUser = static::$randomUser;
        $randomProposal = static::$randomProposal;

        $this->browse(function (Browser $browser) use (
            $randomUser,
            $randomProposal
        ) {
            $browser
                ->loginAs($randomUser['id'])
                ->visit('/proposals/'.$randomProposal['id'])
                ->press('@follow')
                ->waitForText('Esta Ideia Legislativa será acompanhada! Obrigado.')
                ->screenshot('proposalSuccessfullyFollowed');
        });
        $this->assertDatabaseHas('proposal_follows', [
            'user_id' => $randomUser['id'],
            'proposal_id' => $randomProposal['id'],
        ]);
    }
}
