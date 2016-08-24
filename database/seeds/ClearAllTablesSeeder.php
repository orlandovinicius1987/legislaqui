<?php

use Illuminate\Database\Seeder;

class ClearAllTablesSeeder extends Seeder
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
        DB::table('states')->delete();
    }
}
