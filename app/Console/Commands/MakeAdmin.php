<?php

namespace App\Console\Commands;

use App\Support\Constants;
use App\User;
use Illuminate\Console\Command;

class MakeAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'legislaqui:make:admin {user_email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make the user an administrator';

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
        if (! $user = User::where('email', $user_email = $this->argument('user_email'))->first()) {
            return $this->error('User not found');
        }

        $user->role_id = get_role_id(Constants::ROLE_ADMIN);
        $user->save();

        $this->info($user->name.' is now an administrator');
    }
}
