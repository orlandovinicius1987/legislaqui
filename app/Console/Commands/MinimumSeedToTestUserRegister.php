<?php

namespace App\Console\Commands;

use App\Support\StateSeederSupport;
use Illuminate\Console\Command;

class MinimumSeedToTestUserRegister extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'minimum:state-seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'STATE seeds for minimal testing of User register';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $state = new StateSeederSupport();
        $state->run();
        $this->info('Database successfully populated');
    }
}
