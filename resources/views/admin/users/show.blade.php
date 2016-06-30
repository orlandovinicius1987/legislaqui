@extends('layouts.admin')

@section('title', 'Propostas Legislativas')

@section('content')

    <div class="">
        <div class="row">

            <div class="col-md-12">

                @include('partials.error')

                <!-- Widget: user widget style 1 -->
                <div class="box box-widget widget-user-2">
                    <!-- Add the bg color to the header using any of the bg-* classes -->
                    <div class="widget-user-header bg-yellow">
                        <div class="widget-user-image">
                            <img class="img-circle" src="{{ $user->avatar }}" alt="User Avatar">
                        </div><!-- /.widget-user-image -->
                        <h3 class="widget-user-username">{{ $user->name }}</h3>
                        <h5 class="widget-user-desc"> {{ $user->email }} </h5>
                        <h5 class="widget-user-desc"> {{ $user->role_name }} </h5>

                        {{--@foreach ($user->getAttributes() as $field => $value)--}}
                            {{--<h5 class="widget-user-desc">{{ $field }} <span class="">{{ $value }}</span></h5>--}}
                        {{--@endforeach--}}
                    </div>

                    <div class="box-footer no-padding">
                        <ul class="nav nav-stacked">

                        </ul>
                    </div>

                    <div class="box-footer no-padding">
                        <ul class="nav nav-stacked">
                            <li><a href="#">Propostas <span class="pull-right badge bg-blue">{{ $user->proposals_count }}</span></a></li>
                            <li><a href="#">Propostas Respondidas <span class="pull-right badge bg-aqua">{{ $user->proposals_responded_count }}</span></a></li>
                            <li><a href="#">Likes <span class="pull-right badge bg-green">{{ $user->likes_count }}</span></a></li>
                            <li><a href="#">Apoios <span class="pull-right badge bg-red">{{ $user->approvals_count }}</span></a></li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <div class="col-md-12">&nbsp;</div>
                        <div class="col-md-6 botao">
                            <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-primary botao">
                                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Editar Usuário</a>
                        </div>

                        <div class="col-md-6 botao">
                            <a href="{{ route('admin.users.destroy', $user->id) }}" class="btn btn-danger botao" onclick="if(!confirm('Deseja realmente excluir este usuário?')){return false;};">
                                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Eliminar Usuário</a>
                        </div>
                    </div>
                </div><!-- /.widget-user -->
            </div>



        </div>
    </div>

@stop