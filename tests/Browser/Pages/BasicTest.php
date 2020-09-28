<?php
namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class BasicTest extends DuskTestCase
{
    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->visit('/')
                ->assertTitle('Legislaqui')
                ->screenshot('open_aplication');
        });
    }
}
