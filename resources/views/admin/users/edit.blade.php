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
                    'class' => 'form'
                    ]) }}

                    {{-- Form::open(array('route' => 'proposal.update', 'class' => 'form')) --}}

                    <div class="form-group coluna_02">
                        {{ Form::label('Nome') }}
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
                                  'placeholder'=>'Email')) }}
                    </div>

                    {{--<div class="form-group">--}}
                        {{--{{ Form::label('Problema') }}--}}
                        {{--{{ Form::textarea('problem', null,--}}
                            {{--array('required',--}}
                                  {{--'class'=>'textarea',--}}
                                  {{--'placeholder'=>'Descreva o Problema')) }}--}}
                    {{--</div>--}}

                    {{--<div class="form-group">--}}
                        {{--{{ Form::label('Exposição da Ideia') }}--}}
                        {{--{{ Form::textarea('idea_exposition', null,--}}
                            {{--array('required',--}}
                                  {{--'class'=>'textarea',--}}
                                  {{--'placeholder'=>'Descreva sua Ideia')) }}--}}
                    {{--</div>--}}


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