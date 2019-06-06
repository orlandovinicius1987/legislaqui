<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56.
 */
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddBillProjectProposalsHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals_history', function ($table) {
            $table->integer('bill_project_id')->nullable();
        });

        Schema::table('proposals_history', function (Blueprint $table) {
            $table
                ->foreign('bill_project_id')
                ->references('id')
                ->on('bills_project')
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
        Schema::table('proposals_history', function ($table) {
            $table->dropColumn('bill_project_id');
        });
    }
}
