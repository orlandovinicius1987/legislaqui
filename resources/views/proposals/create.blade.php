@extends('layouts.alerj')

@section('title', 'Incluir Proposta Legislativa')

@section('content')

    <div class="">

        @include('partials.error')

        <div class="panel panel-default">
            <div class="panel-heading text-center">Incluir Proposta Legislativa</div>
            <div class="panel-body">

                <p>Tão importante quanto escolher, pelo voto, um representante na Assembléia Legislativa é participar propondo ideias, posições e iniciativas ao processo parlamentar em favor da coletividade. Envie-nos sua proposta, os campos que contém <i class="fa fa-asterisk" aria-hidden="true"></i> são de preenchimento obrigatório.</p>

                {{ Form::open(array('route' => 'proposal.store', 'class' => 'form')) }}

                <div class="form-group coluna_02">
                    {{ Form::label('Nome da Proposta') }}
                    {{ Form::text('name', null,
                        array('required',
                              'class'=>'campo',
                              'placeholder'=>'Nome')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('Problema') }}
                    {{ Form::textarea('problem', null,
                        array('required',
                              'class'=>'textarea',
                              'placeholder'=>'Descreva o Problema')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('Ideia Central') }}
                    {{ Form::textarea('idea_central', null,
                        array('required',
                              'class'=>'textarea',
                              'placeholder'=>'Resuma sua Ideia')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('Exposição da Ideia') }}
                    {{ Form::textarea('idea_exposition', null,
                        array('required',
                              'class'=>'textarea',
                              'placeholder'=>'Descreva sua Ideia')) }}
                </div>

                <div class="form-group">
                    {{ Form::submit('Incluir',
                      array('class'=>'btn btn-primary botao')) }}
                </div>

                {{ Form::close() }}

            </div>
        </div>
    </div>

@stop