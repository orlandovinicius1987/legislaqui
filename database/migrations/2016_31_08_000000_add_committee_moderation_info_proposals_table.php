<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56.
 */
use Illuminate\Database\Migrations\Migration;

class AddCommitteeModerationInfoProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals', function ($table) {
            $table->timestamp('approved_at_committee')->nullable();
            $table->timestamp('disapproved_at_committee')->nullable();
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
        Schema::table('proposals', function ($table) {
            $table->dropColumn('approved_at_committee');
            $table->dropColumn('disapproved_at_committee');
            $table->dropColumn('approved_by_committee');
            $table->dropColumn('disapproved_by_committee');
            $table->dropColumn('time_limit');
        });
    }
}
