@extends('layouts.admin')

@section('title', 'Incluir Proposta Legislativa')

@section('content')

    <div class="">

        @include('partials.error')

        <!-- Horizontal Form -->
        <div class="box box-success">
            <div class="box-header with-border">
                <h3 class="box-title">Incluir Novo Usuário</h3>
            </div><!-- /.box-header -->
            <!-- form start -->
            {{ Form::open(array('route' => 'admin.users.store', 'class' => 'form-horizontal')) }}
                <div class="box-body">
                    <div class="form-group">
                        {{ Form::label('Nome', 'Nome', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {{ Form::text('name', null,
                            array('required',
                                  'class'=>'form-control',
                                  'placeholder'=>'Nome')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('Email', 'Email', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                            {{ Form::text('email', null,
                                array('required',
                                      'class'=>'form-control',
                                      'placeholder'=>'Digite seu Email')) }}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('UF', 'UF', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {!! Form::select('uf', $states, 'RJ', ['class' => 'form-control']) !!}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('Função', 'Função', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {!! Form::select('role_id', $roles, null, ['class' => 'form-control']) !!}
                        </div>
                    </div>

                    <div class="form-group">
                        {{ Form::label('CPF', 'CPF', array('class' => 'col-sm-2 control-label')) }}
                        <div class="col-sm-10">
                        {{ Form::text('cpf', null,
                         array('required',
                               'class'=>'form-control',
                               'id' => 'cpf',
                               )) }}

                         {{--'data-inputmask'=>'"mask": "(999) 999-9999"',--}}
                               {{--'data-mask'=>null,--}}

                        {{--<input id="cpf" name="cpf" type="text" />--}}

                        </div>
                    </div>

                </div><!-- /.box-body -->

                <div class="box-footer">
                    {{ Form::submit('Incluir Novo Usuário', array('class'=>'btn btn-primary botao')) }}
                </div><!-- /.box-footer -->

            {{ Form::close() }}
        </div><!-- /.box -->
    </div>

@stop