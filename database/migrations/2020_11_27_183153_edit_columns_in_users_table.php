<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EditColumnsInUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
    Schema::table('users', function (Blueprint $table) {
        $table->dropUnique(['email']);
        $table->string('password')->nullable()->change();
        $table->json('social')->nullable();
        $table->unique(['email', 'deleted_at']);
    });
    }
    public function down()
    {
    Schema::table('users', function (Blueprint $table) {
        $table->dropUnique(['email', 'deleted_at']);
        $table->dropColumn(['social']);
        $table->string('password')->change();
        $table->string('email')->unique()->change();
    });
}


}
