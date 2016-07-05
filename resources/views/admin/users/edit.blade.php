@extends('layouts.admin')

@section('title', 'Editar Usuário')

@section('content')

    <div class="">
        <div class="">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading text-center"><strong>Editar Usuário</strong></div>
                <div class="panel-body">

                    {{ Form::model($user, [
                    'method' => 'PATCH',
                    'route' => ['admin.users.update', $user->id],
                    'class' => 'form form-horizontal'
                    ]) }}

                    {{-- Form::open(array('route' => 'proposal.update', 'class' => 'form')) --}}

                    <div class="form-group">
                        {{ Form::label('Nome', 'Nome', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {{ Form::text('name', null,
                            array('required',
                                  'class'=>'campo',
                                  'placeholder'=>'Nome')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('Email', 'Email', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {{ Form::text('email', null,
                            array('required',
                                  'class'=>'campo',
                                  'placeholder'=>'Email')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('Função', 'Função', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                            {!! Form::select('role_id', $roles, null, ['class' => 'form-control']) !!}
                        </div>
                    </div>

                    <div class="col-sm-12 text-center">
                    <div class="form-group">
                        {{ Form::submit('Editar',
                          array('class'=>'btn btn-primary botao')) }}
                    </div>

                    {{ Form::close() }}

                </div>
            </div>
        </div>
    </div>

@stop