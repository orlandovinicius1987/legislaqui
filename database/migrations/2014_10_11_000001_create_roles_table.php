<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 04/03/2016
 * Time: 12:15.
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->integer('id');
            $table->string('role');
        });

        $this->seed();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('roles');
    }

    private function seed()
    {
        DB::table('roles')->delete();

        DB::table('roles')->insert(['id' => '0', 'role' => 'Admin']);
        DB::table('roles')->insert(['id' => '1', 'role' => 'Aprovador']);
        DB::table('roles')->insert(['id' => '99', 'role' => 'Cidadão']);
    }
}
