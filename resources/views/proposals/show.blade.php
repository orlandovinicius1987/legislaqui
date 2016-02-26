@extends('layouts.app')

@section('title', 'Propostas Legislativas')

@section('content')

    <div class="container">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">{{ $proposal->name }}</div>
                <div class="panel-body">

                    <table class="table-responsive table-striped">
                        <tbody>
                            <tr><td>Situação:</td><td> {{ $proposal->open }}</td></tr>
                            <tr><td>Data Publicação:</td><td> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
                            <tr><td>Data Limite:</td><td> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
                            <tr><td>Ideia Central:</td><td> {{ $proposal->idea_central }}</td></tr>
                            <tr><td>Problema:</td><td> {{ $proposal->problem }}</td></tr>
                            <tr><td>Exposição da Ideia:</td><td> {{ $proposal->idea_exposition }}</td></tr>
                            <tr><td>Número de Apoios:</td><td> {{ $proposal->likes->count() }}</td></tr>
                        </tbody>
                    </table>

                    <div class="pull-left">
                        {{--<a href="{{ URL::current() }}/like" class="btn btn-info" role="button">Apoiar essa Ideia!</a>--}}
                        <a href="{{ route('proposal.like', $proposal->id) }}" class="btn btn-info" role="button">Apoiar essa Ideia!</a>
                    </div>

                    <div class="pull-right">
                        @can('edit', $proposal)
                        <a href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary">Editar Proposta</a>
                        @endcan
                        <a href="{{ route('proposal.create') }}" class="btn btn-primary">Incluir Nova Proposta</a>
                        @can('destroy', $proposal)
                        <a href="{{ route('proposal.destroy', $proposal->id) }}" class="btn btn-danger">Eliminar Proposta</a>
                        @endcan
                    </div>


                </div>
            </div>
        </div>
    </div>

@stop