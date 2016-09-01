<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56.
 */
use Illuminate\Database\Migrations\Migration;

class AddApprovalGoalInfoProposalsHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals_history', function ($table) {
            $table->boolean('approval_goal')->nullable();
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
            $table->dropColumn('approval_goal');
        });
    }
}
