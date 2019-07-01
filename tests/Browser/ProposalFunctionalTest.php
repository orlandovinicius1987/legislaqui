<?php

use App\Proposal;
use App\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class ProposalFunctionalTest extends DuskTestCase
{
    public function testCreateProposalMainButton()
    {
        $proposal = factory(App\Proposal::class)->raw();
        $user = User::all()->random();

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/')
                ->click('@newProposalButton')
                ->assertPathIs('/proposals/create')
                ->type('name', $proposal['name'])
                ->type('idea_central', $proposal['idea_central'])
                ->type('problem', $proposal['problem'])
                ->type('idea_exposition', $proposal['idea_exposition'])
                ->press('Enviar proposta de ideia')
                ->assertSee(mb_strtoupper('Incluir nova ideia'));
        });

        $this->assertDatabaseHas('proposals', ['name' => $proposal['name']]);
    }

    public function testCreateProposalBySecondButton()
    {
        $proposal = factory(App\Proposal::class)->raw();
        $proposal2 = factory(App\Proposal::class)->create();
        $user = User::all()->random();

        $this->browse(function (Browser $browser) use (
            $user,
            $proposal,
            $proposal2
        ) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal2->id)
                ->click('@novaIdeia')
                ->assertPathIs('/proposals/create')
                ->type('name', $proposal['name'])
                ->type('idea_central', $proposal['idea_central'])
                ->type('problem', $proposal['problem'])
                ->type('idea_exposition', $proposal['idea_exposition'])
                ->press('Enviar proposta de ideia')
                ->assertSee(mb_strtoupper('Incluir nova ideia'));
        });

        $this->assertDatabaseHas('proposals', ['name' => $proposal['name']]);
    }

    public function testUserLikeSupportFollowProposal()
    {
        //Use Eloquent
        $proposal = Proposal::all()->random();
        $user = User::all()->random();

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('1')
                ->assertSee(mb_strtoupper($proposal->name))
                ->click('@like');
        });

        $this->assertDatabaseHas('likes', [
            'like' => 1,
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('2')
                ->click('@like');
        });

        $this->assertDatabaseHas('likes', [
            'like' => 1,
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('3')
                ->click('@dislike');
        });

        $this->assertDatabaseHas('likes', [
            'like' => 0,
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('4')
                ->click('@like');
        });

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('3')
                ->click('@dislike');
        });

        $this->assertDatabaseHas('likes', [
            'like' => 0,
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('3')
                ->click('@dislike');
        });

        $this->assertDatabaseHas('likes', [
            'like' => 0,
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        //Apoio

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('5')
                ->click('@support');
        });

        $this->assertDatabaseHas('likes', [
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);

        $this->browse(function (Browser $browser) use ($user, $proposal) {
            $browser
                ->loginAs($user->id)
                ->visit('/proposals/' . $proposal->id)
                ->screenshot('6')
                ->click('@support');
        });

        $this->assertDatabaseHas('likes', [
            'proposal_id' => $proposal->id,
            'user_id' => $user->id,
        ]);
    }

    public function testUserEditIdea()
    {
        $proposal = factory(App\Proposal::class)->create();
        $user = User::all()->random();

        $this->actingAs($user)
            ->visit('/proposals/' . $proposal->id)
            ->click('editar') // criei 'id' para o teste; o phpunit, às vezes, identificava o texto e, às vezes, não.
            ->seePageIs('/proposals/' . $proposal->id . '/edit')
            ->type($proposal->name, 'name')
            ->type($proposal->problem, 'problem')
            ->press('Gravar')
            ->see('Ideia Legislativa Editada')
            ->seePageIs('/proposals/' . $proposal->id)
            ->click('voltar')
            ->seePageIs('/')
            ->seeInDatabase('proposals', ['name' => $proposal->name]);
    }
}
