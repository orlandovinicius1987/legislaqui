<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialiteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('socialite', function (Blueprint $table) {
            $table->integer('id');
            $table->string('social_network');
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
        Schema::drop('socialite');
    }

    private function seed()
    {
        DB::table('socialite')->delete();
        DB::table('socialite')->insert(['id' => '0', 'social_network' => 'Facebook']);
        DB::table('socialite')->insert(['id' => '1', 'social_network' => 'Twitter']);
        DB::table('socialite')->insert(['id' => '2', 'social_network' => 'Instagram']);
        DB::table('socialite')->insert(['id' => '3', 'social_network' => 'Google Plus']);
    }
}


