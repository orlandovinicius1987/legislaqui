<?php

use App\Support\Constants;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run()
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert([
            'id' => get_role_id(Constants::ROLE_ADMIN),
            'role' => Constants::ROLE_ADMIN,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('roles')->insert([
            'id' => get_role_id(Constants::ROLE_APPROVAL),
            'role' => Constants::ROLE_APPROVAL,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('roles')->insert([
            'id' => get_role_id(Constants::ROLE_COMMISSION),
            'role' => Constants::ROLE_COMMISSION,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        DB::table('roles')->insert([
            'id' => get_role_id(Constants::ROLE_CIDADAO),
            'role' => Constants::ROLE_CIDADAO,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
