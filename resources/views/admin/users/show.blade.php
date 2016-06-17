@extends('layouts.admin')

@section('title', 'Propostas Legislativas')

@section('content')

    <div class="">
        <div class="">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>{{ $user->name }}</h1>
                </div>
                <div class="panel-body">
                    <table class="table-responsive table-striped table-show">
                        <tbody>
                        <tr><td class="table-td-label-show">Email</td><td class="table-td-show"> {{ $user->email }}</td></tr>
                        <tr><td class="table-td-label-show">Função</td><td class="table-td-show"> {{ $user->role_id }}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                    <div class="pull-left botao">
                        <a href="{{ route('admin.users.edit', $user->id) }}" class="btn btn-primary botao">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Editar Usuário</a>
                    </div>

                    <div class="pull-right botao">
                        <a href="{{ route('admin.users.destroy', $user->id) }}" class="btn btn-danger botao">
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Eliminar Proposta</a>
                    </div>

                </div>

            </div>
        </div>
    </div>

@stop