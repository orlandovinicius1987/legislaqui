{{--Created by PhpStorm.--}}
{{--User: falbernaz--}}
{{--Date: 28/06/2016--}}
{{--Time: 11:18--}}

@extends('layouts.alerj')

@section('title', 'e-democracia')

        <!-- Current Proposals -->
@section('content')

    @include('partials.error')

    <div class="panel panel-default">
        <div class="panel-heading-about text-center">Entre em Contato</div>
        <div class="panel-body">

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