@extends('layouts.alerj')

@section('title', 'Propostas Legislativas')

@section('content')

    <div class="">
        <div class="">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>{{ $proposal->name }}</h1>
                    @include('partials.share', ['url' => URL::full()])
                    {{--@include('partials.like', ['proposalId' => $proposal->id])--}}
                </div>
                <div class="panel-body">
                    <table class="table-responsive table-striped table-show">
                        <tbody>
                            <tr><td class="table-td-label-show">User Id</td><td class="table-td-show"> {{ $proposal->user->name }}</td></tr>
                            <tr><td class="table-td-label-show">Situação</td><td class="table-td-show"> {{ $proposal->open }}</td></tr>
                            <tr><td class="table-td-label-show">Data Publicação</td><td class="table-td-show"> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
                            <tr><td class="table-td-label-show">Data Limite</td><td class="table-td-show"> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
                            <tr><td class="table-td-label-show">Ideia Central</td><td class="table-td-show"> {{ $proposal->idea_central }}</td></tr>
                            <tr><td class="table-td-label-show">Problema</td><td class="table-td-show"> {{ $proposal->problem }}</td></tr>
                            <tr><td class="table-td-label-show">Exposição da Ideia</td><td class="table-td-show"> {{ $proposal->idea_exposition }}</td></tr>
                            <tr><td class="table-td-label-show">Número de Apoios</td><td class="table-td-show"> {{ $proposal->approvals->count() }}</td></tr>
                            <tr></tr>
                            {{-- if has response -> return response data, else null --}}
                            <tr><td class="table-td-label-show">Autor Resposta</td><td class="table-td-show"> {{ $proposal->responder ? $proposal->responder->name  : null }}</td></tr>
                            <tr><td class="table-td-label-show">Resposta</td><td class="table-td-show"> {{ $proposal->response ? $proposal->response : null }}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                    <div class="pull-left botao">
                        {{--<a href="{{ URL::current() }}/like" class="btn btn-info" role="button">Apoiar essa Ideia!</a>--}}
                        <a href="{{ route('proposal.like', $proposal->id) }}" class="btn btn-info botao" role="button">
                            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Gostei dessa Ideia!</a>
                        <a href="{{ route('proposal.approval', $proposal->id) }}" class="btn btn-info botao" role="button">
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Apoiar essa Ideia!</a>
                    </div>

                    <div class="pull-right botao">
                        @can('edit', $proposal)
                        <a href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary botao">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Editar Proposta</a>
                        @endcan
                        <a href="{{ route('proposal.create') }}" class="btn btn-primary botao">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Incluir Nova Proposta</a>
                        @can('destroy', $proposal)
                        <a href="{{ route('proposal.destroy', $proposal->id) }}" class="btn btn-danger botao">
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Eliminar Proposta</a>
                        @endcan
                    </div>

                    {{--<div class="socialmedia">--}}
                        {{--<div class="addthis_sharing_toolbox"></div>--}}
                    {{--</div>--}}
                    {{--@include('partials.share', ['url' => 'http://e-democracia.alerj.rj.gov.br/'])--}}
                </div>

            </div>
        </div>
    </div>

@stop