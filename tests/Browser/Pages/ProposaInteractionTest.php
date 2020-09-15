<?php

namespace Tests\Browser\Pages;

use App\User;
use App\Proposal;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProposalTest extends DuskTestCase
{
    private static $randomProposal;
    private static $randomUser;

    public function init()
    {
        static::$randomProposal = Proposal::all()->random()->toArray();
        static::$randomUser = User::all()->random()->toArray();
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
