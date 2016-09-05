<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateRowProposalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Proposals::where('in_committee', null)->update(['in_committee'=>false]);
    }
       /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Proposals::where('in_committee', false)->update(['in_committee'=>null]);
    }
}
