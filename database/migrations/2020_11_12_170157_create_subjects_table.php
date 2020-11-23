<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Data\Models\Subject as SubjectModel;

class CreateSubjectsTable extends Migration
{
    public $subjects = [
        'Agricultura, Pecuária e Políticas Rural, Agrária e Pesqueira',
        'Assuntos da Criança, do Adolescente e do Idoso',
        'Assuntos Municipais e de Desenvolvimento Regional',
        'Ciência e Tecnologia',
        'Combate às Discriminações e Preconceitos de Raça, Cor, Etnia, Religião e Procedência Nacional',
        'Constituição e Justiça',
        'Cultura',
        'Defesa Civil',
        'Defesa do Consumidor',
        'Defesa do Meio Ambiente',
        'Defesa dos Direitos Da Mulher',
        'Defesa dos Direitos Humanos e Cidadania',
        'Defesa e Proteção dos Animais no Estado do Rio de Janeiro',
        'Economia, Indústria e Comércio',
        'Educação',
        'Emendas Constitucionais e Vetos',
        'Esporte e Lazer',
        'Indicações Legislativas',
        'Legislação Constitucional Complementar e Códigos',
        'Minas e Energia',
        'Normas Internas e Proposições Externas',
        'Obras Públicas',
        'Orçamento, Finanças, Fiscalização Financeira e Controle',
        'Para Prevenir e Combater a Pirataria no Estado do Rio de Janeiro',
        'Pessoa com Deficiência',
        'Política Urbana, Habitação e Assuntos Fundiários',
        'Prevenção ao Uso de Drogas e Dependentes Químicos em Geral',
        'Redação',
        'Saneamento Ambiental',
        'Saúde',
        'Segurança Alimentar',
        'Segurança Pública e Assuntos de Polícia',
        'Servidores Públicos',
        'Trabalho, Legislação Social e Seguridade Social',
        'Transportes',
        'Tributação, Controle Da Arrecadação Estadual e de Fiscalização dos Tributos Estaduais',
        'Turismo'
    ];

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subjects', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('name');

            $table->timestamps();
        });

        Schema::create('proposal_subject', function (Blueprint $table) {
            $table->bigInteger('proposal_id');
            $table->bigInteger('subject_id');

            $table->timestamps();
        });

        collect($this->subjects)->each(function ($subject) {
            $row = new SubjectModel();
            $row->name = $subject;
            $row->save();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subjects');
        Schema::dropIfExists('proposal_subject');
    }
}
