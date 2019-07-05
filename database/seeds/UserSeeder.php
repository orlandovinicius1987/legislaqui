<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/01/2016
 * Time: 12:19.
 */
use App\User;
use Illuminate\Database\Seeder;
use App\Proposal;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Users and Proposals
        factory(App\User::class, rand(50, 100))
            ->create()
            ->each(function ($user) {
                //echo "user: $user->id\n";

                foreach (range(1, rand(1, 2)) as $x) {
                    $proposals = factory(
                        App\Proposal::class,
                        random_int(1, 6)
                    )->create();

                    foreach (range(1, rand(0, 20)) as $y) {
                        // Approvals
                        $proposals->each(function (Proposal $item) use ($user) {
                            $item->approvals()->attach($user->id);
                        });
                    }

                    //Likes
                    factory(App\Like::class, random_int(0, 30))->create();

                    //Follows
                    factory(
                        App\ProposalFollow::class,
                        random_int(0, 15)
                    )->create();
                }
            });

        //Administrator
        factory(App\User::class, 'admin', 1)->create([
            'name' => 'Adm',
            'email' => 'adm@test.com',
            'password' => Hash::make('secret'),
        ]);
    }
}
