<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RemoveNullableFromProblemFromProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals', function (Blueprint $table) {
            $table->text('problem')->nullable(true)->change();

        });
        Schema::table('proposals_history', function (Blueprint $table) {
            $table->text('problem')->nullable(true)->change();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proposals', function (Blueprint $table) {
            $table->text('problem')->nullable(false)->change();
        });
        
        Schema::table('proposals_history', function (Blueprint $table) {
            $table->text('problem')->nullable(false)->change();
        });
    }
}
