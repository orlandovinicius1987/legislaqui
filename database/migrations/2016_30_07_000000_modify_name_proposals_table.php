<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 12/04/2016
 * Time: 14:56
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyNameProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::table('proposals', function($table) {
            $table->text('name')->change();
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
            $table->string('name')->change();
        });
    }

}
