<?php

use Illuminate\Database\Migrations\Migration;

class ModifyVariabelInProposals extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('proposals', function ($table) {
            $table->boolean('in_committee')->default(false)->change();
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
<<<<<<< HEAD
            $table->boolean('in_committee')->default(null)->change();
=======
            $table->boolean('in_committee')->nullable()->change();
>>>>>>> albernaz/master
        });
    }
}
