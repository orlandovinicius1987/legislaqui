<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\User;
use App\Proposal;

class LinksAndOthersTest extends TestCase
{

    public function testLinksMenuBar()
    {
        $this->visit('/')
            ->click('INÍCIO')
            ->seePageIs('/');

        $this->visit('/')
            ->click('Como Funciona?')
            ->seePageIs('/about');

        $this->visit('/')
            // Sub-menu Ideia Legislativa?
            ->click('Proponha uma ideia legislativa logando ou registrando-se aqui')
            ->seePageIs('/login');

        $this->visit('/')
            // Sub-menu Ideia Legislativa?
            ->click('Termos de Uso')
            ->seePageIs('/terms');

        $this->visit('/')
            ->click('Nossas comissões')
            ->seePageIs('/committee');

        $this->visit('/')
            ->click('Termos de uso')
            ->seePageIs('/terms');

        $this->visit('/')
            ->click('Contato')
            ->seePageIs('/contact');

        $this->visit('/')
            ->click('Login | Registro')
            ->seePageIs('/login');
    }

    public function testLinksFiltersIndex()
    {
        $this->visit('/')
            ->click('ABERTAS')
            ->seePageIs('/?q=open');

        $this->visit('/')
            ->click('NA COMISSÃO')
            ->seePageIs('/?q=committee');

        $this->visit('/')
            ->click('EXPIRADAS')
            ->seePageIs('/?q=expired');

        $this->visit('/')
            ->click('NÃO ACATADAS')
            ->seePageIs('/?q=disapproved');

        $this->visit('/')
            ->click('APROVADAS')
            ->seePageIs('/?q=approved');
    }

    public function testSearchForProposal()
    {
        $this->visit('/')
            ->type('felipe', 'search')
            ->press('Pesquisar');
    }

    public function testContact()
    {
         $this->visit('/contact')
            ->type('Acebolado Silva', 'name')
            ->type('alerjteste@alerj.com', 'email')
            ->type('Gostaria de solicitar neve no natal de São Gonçalo', 'message')
            ->press('Enviar!')
            ->seePageIs('/contact')
            ->see('Obrigado por');
    }

}

