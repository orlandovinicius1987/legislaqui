<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56.
 */
use Illuminate\Database\Migrations\Migration;

class AddModerationInfoProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals', function ($table) {
            $table->timestamp('approved_at')->nullable();
            $table->timestamp('disapproved_at')->nullable();
            $table->integer('approved_by')->nullable();
            $table->integer('disapproved_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proposals', function ($table) {
            $table->dropColumn('approved_at');
            $table->dropColumn('disapproved_at');
            $table->dropColumn('approved_by');
            $table->dropColumn('disapproved_by');
        });
    }
}
