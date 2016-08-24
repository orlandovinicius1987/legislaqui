<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56.
 */
use Illuminate\Database\Migrations\Migration;

class AddCommitteeModerationInfoProposalsHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals_history', function ($table) {
            $table->date('approved_at_committee')->nullable();
            $table->date('disapproved_at_committee')->nullable();
            $table->integer('approved_by_committee')->nullable();
            $table->integer('disapproved_by_committee')->nullable();
            $table->boolean('time_limit')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('proposals_history', function ($table) {
            $table->dropColumn('approved_at_committee');
            $table->dropColumn('disapproved_at_committee');
            $table->dropColumn('approved_by_committee');
            $table->dropColumn('disapproved_by_committee');
            $table->dropColumn('time_limit');
        });
    }
}
