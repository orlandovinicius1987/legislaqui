<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 29/01/2016
 * Time: 15:51
 */

use Illuminate\Database\Seeder;

use Carbon\Carbon;

class StateSeeder extends Seeder
{
    /**
     * Alimenta uma schema de estados
     * @author Cesar André (https://github.com/cesar-andre)
     * @return void
     */
    public function run()
    {
        //$state = App\State::create(['uf' => 'AC', 'nome' => 'ACRE']);
        //, 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()

        DB::table('states')->insert(['uf' => 'AC', 'nome' => 'ACRE', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'AL', 'nome' => 'ALAGOAS', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'AM', 'nome' => 'AMAZONAS', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'AP', 'nome' => 'AMAPÁ', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'BA', 'nome' => 'BAHIA', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'CE', 'nome' => 'CEARÁ', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'DF', 'nome' => 'DISTRITO FEDERAL', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'ES', 'nome' => 'ESPÍRITO SANTO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'GO', 'nome' => 'GOIÁS', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'MA', 'nome' => 'MARANHÃO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'MG', 'nome' => 'MINAS GERAIS', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'MS', 'nome' => 'MATO GROSSO DO SUL', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'MT', 'nome' => 'MATO GROSSO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'PA', 'nome' => 'PARÁ', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'PB', 'nome' => 'PARAIBA', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'PE', 'nome' => 'PERNAMBUCO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'PI', 'nome' => 'PIAUÍ', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'PR', 'nome' => 'PARANÁ', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'RJ', 'nome' => 'RIO DE JANEIRO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'RN', 'nome' => 'RIO GRANDE DO NORTE', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'RO', 'nome' => 'RONDÔNIA', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'RR', 'nome' => 'RORAIMA', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'RS', 'nome' => 'RIO GRANDE DO SUL', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'SC', 'nome' => 'SANTA CATARINA', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'SE', 'nome' => 'SERGIPE', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'SP', 'nome' => 'SÃO PAULO', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
        DB::table('states')->insert(['uf' => 'TO', 'nome' => 'TOCANTINS', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]);
    }
}
