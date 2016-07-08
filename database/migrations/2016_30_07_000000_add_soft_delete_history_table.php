<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSoftDeleteHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals_history', function ($table) {
            $table->softDeletes();
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
            $table->dropSoftDeletes();
        });
    }

}
