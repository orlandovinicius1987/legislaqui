<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
class CreateStatesTable extends Migration
{
    /**
     * Criação de schema para estados
     * @author Cesar André (https://github.com/cesar-andre)
     * @return void
     */
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->string('uf');
            $table->string('nome');
            $table->timestamps();
            $table->primary('uf');
        });
    }
    /**
     * Reverter a migration
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('states');
    }
}