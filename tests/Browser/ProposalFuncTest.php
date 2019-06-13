<?php

use App\Proposal;
use App\User;
use Tests\DuskTestCase;

class ProposalFuncTest extends DuskTestCase
{
    public function testCreateProposalMainButton()
    {
        $proposal = factory(App\Proposal::class)->create();
        $user = User::all()->random();

        $this->actingAs($user)
            ->visit('/')
            ->click('Sua ideia legislativa')
            ->seePageIs('/proposals/create')
            ->type($proposal->name, 'name')
            ->type($proposal->idea_central, 'idea_central')
            ->type($proposal->problem, 'problem')
            ->type($proposal->idea_exposition, 'idea_exposition')
            ->press('Incluir')
            ->see('Sucesso')
            ->seeInDatabase('proposals', ['name' => $proposal->name]);
    }

    public function testCreateProposalBySecondButton()
    {
        $proposal = factory(App\Proposal::class)->create();
        $user = User::all()->random();

        $this->actingAs($user)
            ->visit('/proposals/' . $proposal->id)
            ->click('novaIdeia')
            ->seePageIs('/proposals/create')
            ->type($proposal->name, 'name')
            ->type($proposal->idea_central, 'idea_central')
            ->type($proposal->problem, 'problem')
            ->type($proposal->idea_exposition, 'idea_exposition')
            ->press('Incluir')
            ->see('Ideia Legislativa Incluída');
    }

    public function testUserLikeSupportFollowProposal()
    {
        //Use Eloquent
        $proposal = Proposal::all()->random();
        $user = User::all()->random();

        $this->actingAs($user)
            ->visit('/proposals/' . $proposal->id)
            ->see($proposal->name)
            ->click('Curtir')
            ->see('Sua curtida foi computada com sucesso')
            ->click('Curtir')
            ->see('Você já curtiu')
            ->click('Descurtir')
            ->see('Você deixou de curtir')
            ->click('Curtir')
            ->see('Você voltou a curtir')
            ->click('Apoiar!')
            ->see('Seu apoio foi incluído')
            ->click('Apoiar!')
            ->see('Você já apoiou')
            ->click('Acompanhar essa Ideia!')
            ->see('Esta Ideia Legislativa será acompanhada');
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
