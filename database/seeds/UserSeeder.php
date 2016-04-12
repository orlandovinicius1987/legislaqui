<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/01/2016
 * Time: 12:19
 */

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();
        DB::table('proposals')->delete();

        //50 Users and Proposals
        factory(App\User::class, 50)->create()->each(function($user){
            //echo "user: $user->id\n";

            foreach(range(1, rand(1, 10)) as $x) {
                $proposal = factory(App\Proposal::class)->create();

                foreach (range(1, rand(1, 20)) as $y) {
                    $user = User::all()->shuffle()->first();

                    $proposal->approvals()->attach($user->id);
                }
            }
        });

        //Administrator
        factory(App\User::class, 'admin', 1)->create([
        'name' => 'Adm', 'email' => 'adm@teste.com'
        ]);

    }
}

