<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 04/03/2016
 * Time: 12:15.
 */

use App\Support\Constants;
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
            $table->increments('id');
            $table->string('role');
        });

        $this->seed();

       // dd(get_role_id(Constants::ROLE_ADMIN));
    }

    /**F
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

        DB::table('roles')->insert(['role'=>Constants::ROLE_ADMIN]);
        DB::table('roles')->insert(['role'=>Constants::ROLE_APPROVAL]);
        DB::table('roles')->insert(['role'=>Constants::ROLE_CIDADAO]);
    }
}
