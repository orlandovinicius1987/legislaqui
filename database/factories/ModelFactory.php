<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use App\User;
use App\State;

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        //'password' => bcrypt(str_random(10)),
        'password' => Hash::make('senha'),
        //'is_admin' => $faker->boolean(30),
        'remember_token' => str_random(10),
        //Aprovador 1 or Cidadao 99
        'role_id' => $faker->randomElement(array (1, 99)),
        'uf' => State::all()->shuffle()->first()->uf
    ];
});

$factory->defineAs(App\User::class, 'admin', function (Faker\Generator $faker) use ($factory) {

    $user = $factory->raw(App\User::class);

    //Admin 0
    return array_merge($user, ['role_id' => 0]);

});

$factory->define(App\Proposal::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'user_id' => User::all()->shuffle()->first()->id,
        'open'  => true,
        'pub_date' => $faker->dateTime(),
        'limit_date' => $faker->dateTime(),
        'idea_central' => $faker->text($maxNbChars = 100),
        'problem' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'idea_exposition' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'response' => $response = $faker->randomElement($array = array (null ,$faker->realText($maxNbChars = 100, $indexSize = 2), $faker->text($maxNbChars = 50))),
        'responder_id' => ! $response ? null : User::all()->where('role_id', 1)->shuffle()->first()->id,
        'created_at' => \Carbon\Carbon::now(),
        'updated_at' => \Carbon\Carbon::now()
    ];
});