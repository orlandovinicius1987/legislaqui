<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/01/2016
 * Time: 11:08.
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->integer('user_id')->unsigned();
            $table->boolean('open')->default(true);
            $table->date('pub_date')->nullable();
            $table->date('limit_date')->nullable();
//            $table->text('idea_central');
            $table->text('problem');
            $table->text('idea_exposition');
            $table->text('response')->nullable();
            $table
                ->integer('responder_id')
                ->unsigned()
                ->nullable();
            $table->timestamps();
        });

        Schema::table('proposals', function (Blueprint $table) {
            $table
                ->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //Schema::dropForeign('user_id');
        Schema::drop('proposals');
    }
}
