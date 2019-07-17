<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 16/02/2016
 * Time: 13:39.
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proposals_history', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('proposal_id');
            $table->string('name');
            $table->integer('user_id')->unsigned();
            $table->boolean('open')->default(true);
            $table->date('pub_date')->nullable();
            $table->date('limit_date')->nullable();

            $table->text('problem');
            $table->text('idea_exposition');
            $table->text('response')->nullable();
            $table
                ->integer('responder_id')
                ->unsigned()
                ->nullable();

            $table->integer('update_id')->unsigned();
            $table->timestamp('update_date');
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
        Schema::drop('proposals_history');
    }
}
