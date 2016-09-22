{{--Created by PhpStorm.--}}
{{--User: falbernaz--}}
{{--Date: 28/06/2016--}}
{{--Time: 11:18--}}

@extends('layouts.alerj')

@section('title', config('app.name'))

        <!-- Current Proposals -->


@section('header-text')
    <div class="row">
        <div class="col-xs-12 titulosecao text-center">
            <h1>Contato</h1>
        </div>
    </div>
@stop
@section('content')

    @include('partials.error')

    <div class="">
        {{--<div class="panel-heading text-center">Contato</div>--}}
        <div class="">

        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>

        @if(Session::has('message'))
            <div class="alert alert-info">
                {{Session::get('message')}}
            </div>
        @endif

        {!! Form::open(array('route' => 'contact_store', 'class' => 'form form-horizontal')) !!}

        <div class="form-group">
            {!! Form::label('Nome') !!}
            {!! Form::text('name', null,
                array('required',
                      'class'=>'form-control',
                      'placeholder'=>'Insira seu Nome')) !!}
        </div>

        <div class="form-group">
            {!! Form::label('E-mail') !!}
            {!! Form::text('email', null,
                array('required',
                      'class'=>'form-control',
                      'placeholder'=>'Seu endereço de e-mail')) !!}
        </div>

        <div class="form-group">
            {!! Form::label('Mensagem') !!}
            {!! Form::textarea('message', null,
                array('required',
                      'class'=>'form-control',
                      'placeholder'=>'Sua Mensagem')) !!}
        </div>

        <div class="form-group">
            {!! Form::submit('Enviar!',
              array('class'=>'btn btn-primary botao text-center')) !!}
        </div>
        {!! Form::close() !!}

        </div>
    </div>

@stop
