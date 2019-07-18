<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->increments('id');

            $table
                ->integer('proposal_id')
                ->unsigned()
                ->index();

            $table->string('subject');

            $table->uuid('uuid')->index();

            $table->string('destination');

            $table->timestamp('sent_at')->nullable();

            $table->timestamp('received_at')->nullable();

            $table->string('content_type')->default('changed');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
}
