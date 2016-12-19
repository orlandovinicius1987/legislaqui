<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSocialNetworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_networks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug');
            $table->string('logo')->nullable();
            $table->softDeletes();
        });

        $this->seed();

    }

    public function seed(){

        DB::table('social_networks')->insert(['name' => 'facebook', 'slug' => 'Facebook']);
        DB::table('social_networks')->insert(['name' => 'twitter', 'slug' => 'Twitter']);
        DB::table('social_networks')->insert(['name' => 'youtube', 'slug' => 'Youtube']);
        DB::table('social_networks')->insert(['name' => 'linkedin', 'slug' => 'Linkedin']);
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('social_networks');
    }
}

