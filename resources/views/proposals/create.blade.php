@extends('layouts.alerj')

@section('title', 'Incluir Proposta Legislativa')

@section('content')
    <div class="">
        @include('partials.error')

        <div class="panel panel-default">
            <div class="panel-heading text-center">Propor Ideia Legislativa</div>

            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-11">
                        <br>
                        <div class="col-lg-offset-1">
                            <p>
                                Tão importante quanto escolher, pelo voto, um representante na
                                Assembléia Legislativa é participar propondo ideias, posições e
                                iniciativas ao processo parlamentar em favor da coletividade.
                            </p>

                            <h3 class="text-center">Envie-nos sua proposta!</h3>

                            <br><br>

                            {{ Form::open(array('route' => 'proposal.store', 'class' => 'form')) }}

                            <div class="form-group coluna_02">
                                {{ Form::label('Nome da ideia legislativa', null , ['class' => 'bold double']) }}
                                {{ Form::text('name', null,
                                    array('required',
                                          'class'=>'campo',
                                          'placeholder'=>'Digite aqui o nome da ideia')) }}
                            </div>

                            <br>

                            <div class="form-group">
                                {{ Form::label('Problema a ser resolvido', null , ['class' => 'bold double']) }}
                                {{ Form::textarea('problem', null,
                                    array('required',
                                          'class'=>'textarea',
                                          'placeholder'=>'Descreva o problema que deseja resolver com esta ideia')) }}
                            </div>

                            <br>

                            <div class="form-group">
                                {{ Form::label('Exposição completa da ideia', null , ['class' => 'bold double']) }}
                                {{ Form::textarea('idea_exposition', null,
                                    array('required',
                                          'class'=>'textarea',
                                          'placeholder'=>'Descreva de forma completa a sua ideia e como ela pode resolver o problema descrito acima. Dê todos os detalhes que achar necessário.')) }}
                            </div>

                            <br>

                            <div class="form-group">
                                {{ Form::submit('Enviar proposta de ideia',
                                  array('class'=>'btn btn-primary botao')) }}
                            </div>

                            <br><br>

                            {{ Form::close() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
