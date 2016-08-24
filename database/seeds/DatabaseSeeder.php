<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Model::unguard();

        //Inside Create_Roles_Table
        //$this->call(RoleSeeder::class);
        $this->call(ClearAllTablesSeeder::class);
        $this->call(StateSeeder::class);
        $this->call(UserSeeder::class);

        //Model::reguard();
    }
}
