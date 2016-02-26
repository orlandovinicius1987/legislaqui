@extends('layouts.app')

@section('title', 'Editar Proposta Legislativa')

@section('content')

    <div class="container">
        <div class="col-md-8 col-md-offset-2">

            @if (count($errors) > 0)
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <div class="panel panel-default">
                <div class="panel-heading">Editar Proposta Legislativa</div>
                <div class="panel-body">

                    {{ Form::model($proposal, [
                    'method' => 'PATCH',
                    'route' => ['proposal.update', $proposal->id],
                    'class' => 'form'
                    ]) }}

                   {{-- Form::open(array('route' => 'proposal.update', 'class' => 'form')) --}}

                    <div class="form-group">
                        {{ Form::label('Nome da Proposta') }}
                        {{ Form::text('name', null,
                            array('required',
                                  'class'=>'form-control',
                                  'placeholder'=>'Nome')) }}
                    </div>

                    <div class="form-group">
                        {{ Form::label('Ideia Central') }}
                        {{ Form::textarea('idea_central', null,
                            array('required',
                                  'class'=>'form-control',
                                  'placeholder'=>'Resuma sua Ideia')) }}
                    </div>

                    <div class="form-group">
                        {{ Form::label('Problema') }}
                        {{ Form::textarea('problem', null,
                            array('required',
                                  'class'=>'form-control',
                                  'placeholder'=>'Descreva o Problema')) }}
                    </div>

                    <div class="form-group">
                        {{ Form::label('Exposição da Ideia') }}
                        {{ Form::textarea('idea_exposition', null,
                            array('required',
                                  'class'=>'form-control',
                                  'placeholder'=>'Descreva sua Ideia')) }}
                    </div>


                    <div class="form-group">
                        {{ Form::submit('Editar',
                          array('class'=>'btn btn-primary')) }}
                    </div>

                    {{ Form::close() }}

                </div>
            </div>
        </div>
    </div>

@stop