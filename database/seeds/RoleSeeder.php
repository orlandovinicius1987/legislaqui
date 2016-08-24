<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    public function run()
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert(['id' => '0', 'role' => 'Admin', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['id' => '1', 'role' => 'Approver', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('roles')->insert(['id' => '99', 'role' => 'Citzen', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
    }
}
