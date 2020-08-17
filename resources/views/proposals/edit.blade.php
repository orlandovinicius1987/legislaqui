@extends('layouts.alerj')

@section('title', 'Editar Proposta Legislativa')

@section('content')

    <div class="row">
        <div class="col-12 ">
            @include('partials.error')

            <h1 class="text-center">Editar Proposta Legislativa</h1>

        </div>
    </div>

    <div class="row">
        <div class="col-12 ">

            {{ Form::model($proposal, [
            'method' => 'PATCH',
            'route' => ['proposal.update', $proposal->id],
            'class' => 'form'
            ]) }}

            {{-- Form::open(array('route' => 'proposal.update', 'class' => 'form')) --}}

            <div class="row form-group">
                <div class="col-12  ">

                    {{ Form::label('Nome da Proposta') }}
                    {{ Form::text('name', null,
                        array('required',
                              'class'=>'campo form-control',
                              'dusk'=>"name-edit_field",
                              'placeholder'=>'Nome')) }}
                </div>
            </div>

            <div class="row form-group">
                <div class="col-12  ">
                    {{ Form::label('Problema') }}
                    {{ Form::textarea('problem', null,
                        array('required',
                              'class'=>'textarea form-control',
                              'dusk'=>"problem-edit_field",
                              'placeholder'=>'Descreva o Problema')) }}
                </div>
            </div>

            <div class="row form-group">
                <div class="col-12  ">
                    {{ Form::label('Exposição da Ideia') }}
                    {{ Form::textarea('idea_exposition', null,
                        array('required',
                              'class'=>'textarea form-control',
                              'dusk'=>"exposionidea-edit_field",
                              'placeholder'=>'Descreva sua Ideia')) }}
                </div>
            </div>

            <div class="row form-group">
                <div class="col-12  ">
                    {{ Form::submit('Gravar',
                      array('class'=>'btn btn-primary botao',
                      'dusk'=>'savebutton')) }}
                </div>
            </div>

            {{ Form::close() }}

        </div>
    </div>


@stop
