@extends('layouts.alerj')

@section('title', 'Acompanhar Ideia Legislativa')

@section('content')

    <div class="">

        @include('partials.error')

        <div class="panel panel-default">
            <div class="panel-heading text-center">Acompanhar Ideia Legislativa</div>
            <div class="panel-body">

                <p>Ao acompanhar uma ideia legislativa, você receberá um email em sua caixa postal, com as principais informações do trâmite.</p>

                {{ Form::open(array('route' => 'proposal.storeFollow', 'class' => 'form')) }}

                {{ Form::hidden('uuid', Cookie::get('uuid')) }}

                <div class="form-group">
                    {{ Form::label('Nome da Proposta') }}
                    {{ Form::text('name', null,
                        array('required',
                              'class'=>'campo',
                              'placeholder'=>'Nome')) }}
                </div>

                <div class="form-group">
                    {{ Form::label('Email') }}
                    {{ Form::text('email', null,
                        array('required',
                              'class'=>'campo',
                              'placeholder'=>'Insira seu Email')) }}
                </div>

                {{--<div class="form-group{{ $errors->register->has('g-recaptcha-response') ? ' has-error text-center' : '' }}">--}}
                    {{--<div class="col-xs-12">--}}
                        {{--{!! app('captcha')->display() !!}--}}

                        {{--@if ($errors->register->has('g-recaptcha-response'))--}}
                            {{--<span class="help-block">--}}
                                        {{--<strong>{{ $errors->register->first('g-recaptcha-response') }}</strong>--}}
                                    {{--</span>--}}
                        {{--@endif--}}

                    {{--</div>--}}
                {{--</div>--}}

                <div class="form-group">
                    {{ Form::submit('Incluir',
                      array('class'=>'btn btn-primary botao')) }}
                </div>

                {{ Form::close() }}

            </div>
        </div>
    </div>

@stop