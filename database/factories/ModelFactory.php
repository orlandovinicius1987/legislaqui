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

use App\Proposal;
use App\State;
use App\User;
use Illuminate\Support\Facades\Request;

$factory->define(App\User::class, function (Faker\Generator $faker) {
    //    $faker = app('Faker');
    return [
        'name' => $faker->name,
        'email' => $faker->email,
        //'password' => bcrypt(str_random(10)),
        'password' => Hash::make('123456'),
        //'is_admin' => $faker->boolean(30),
        'remember_token' => str_random(10),
        //Aprovador 1 - Comissao 2 - Cidadao 99
        'role_id' => $faker->randomElement([1, 2, 99]),
        'uf' => State::all()
            ->shuffle()
            ->first()
            ->getUfAttribute(),
        'cpf' => $faker->cpf,
        'uuid' => $faker->uuid,
    ];
});

$factory->defineAs(App\User::class, 'admin', function ($faker) use ($factory) {
    //
    $user = $factory->raw(App\User::class);
    $user['role_id'] = 0;
    return $user;
});

$factory->define(App\Proposal::class, function (Faker\Generator $faker) {
    $random = $faker->boolean($chanceOfGettingTrue = 20);

    return [
        'name'            => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'user_id'         => User::all()->shuffle()->first()->id,
        'open'            => true,
        'problem'         => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'idea_exposition' => $faker->realText($maxNbChars = 200, $indexSize = 2),
        'response'        => $response = $faker->randomElement($array = [null, $faker->realText($maxNbChars = 100, $indexSize = 2), $faker->text($maxNbChars = 50)]),
        'responder_id'    => !$response ? null : User::all()->where('role_id', 1)->shuffle()->first()->id,
        'disapproved_at'  => !$response ? null : \Carbon\Carbon::now(),
        'disapproved_by'  => !$response ? null : User::all()->where('role_id', 1)->shuffle()->first()->id,
        'approved_at'     => $response ? null : ($random ? null : \Carbon\Carbon::now()),
        'approved_by'     => $response ? null : ($random ? null : User::all()->where('role_id', 1)->shuffle()->first()->id),
        'created_at'      => \Carbon\Carbon::now(),
        'updated_at'      => \Carbon\Carbon::now(),
        'pub_date'        => \Carbon\Carbon::now(),
        'limit_date'      => \Carbon\Carbon::now()->addMonth(config('global.timeLimitMonth')),
    ];
});

$factory->define(App\Like::class, function (Faker\Generator $faker) {
    $user_id = User::all()
        ->shuffle()
        ->first()->id;

    return [
        'user_id' => $user_id,
        'proposal_id' => Proposal::all()
            ->shuffle()
            ->first()->id,
        'uuid' => User::where('id', $user_id)->first()->uuid,
        'like' => $faker->boolean($chanceOfGettingTrue = 70), // true - like
        'ip_address' => Request::ip(),
    ];
});

$factory->define(App\ProposalFollow::class, function (Faker\Generator $faker) {
    return [
        'user_id' => User::all()
            ->shuffle()
            ->first()->id,
        'proposal_id' => Proposal::all()
            ->shuffle()
            ->first()->id,
    ];
});
