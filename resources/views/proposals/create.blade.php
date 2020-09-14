@extends('layouts.alerj')

@section('title', 'Incluir Proposta Legislativa')

@section('content')
    <div class="row create-header">
        <div class="col-xs-12">
            @include('partials.error')
            <h1 class="text-center">Propor Ideia Legislativa</h1>
            <p class="text-center">
                Tão importante quanto escolher, pelo voto, um representante na Assembléia Legislativa é participar propondo ideias, posições e iniciativas ao processo parlamentar em favor da coletividade.
            </p>
            <h3 class="text-center">Envie-nos sua proposta!</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-xs-12">
            {{ Form::open(array('route' => 'proposal.store', 'class' => 'form')) }}
            <div class="row form-group">
                <div class="col-xs-12 ">
                    {{ Form::label('Nome da ideia legislativa', null , ['class' => 'bold double']) }}
                    {{ Form::text('name', null,
                        array('required',
                              'class'=>'campo form-control',
                              'dusk'=>"name_field",
                              'placeholder'=>'Digite aqui o nome da ideia')) }}
                </div>
            </div>
            <div class="row form-group">
                <div class="col-xs-12">
                    {{ Form::label('Problema a ser resolvido', null , ['class' => 'bold double']) }}
                    {{ Form::textarea('problem', null,
                        array('required',
                              'class'=>'textarea form-control',
                              'dusk'=>"problem_field",
                              'placeholder'=>'Descreva o problema que deseja resolver com esta ideia')) }}
                </div>
            </div>
            <div class="row form-group">
                <div class="col-xs-12">
                    {{ Form::label('Exposição completa da ideia', null , ['class' => 'bold double']) }}
                    {{ Form::textarea('idea_exposition', null,
                        array('required',
                              'class'=>'textarea form-control',
                              'dusk'=>"exposionidea_field",
                              'placeholder'=>'Descreva de forma completa a sua ideia e como ela pode resolver o problema descrito acima. Dê todos os detalhes que achar necessário.')) }}
                </div>
            </div>
            <div class="row form-group">
                <div class="col-xs-12">
                    {{ Form::submit('Enviar proposta de ideia',
                      array('class'=>'btn btn-primary ',
                      'dusk'=>"submitbuttonproposal")) }}
                </div>
            </div>
            {{ Form::close() }}
        </div>
    </div>
@stop
