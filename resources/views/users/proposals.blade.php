@extends('layouts.alerj')

@section('title', 'Propostas Legislativas')

<!-- Current Proposals -->
@section('content')

    @if (Session::has('flash_msg'))
        <div class="alert alert-info">{{ Session::get('flash_msg') }}</div>
    @endif

    @if (Session::has('error_msg'))
        <div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
    @endif

    @if(Session::has('proposal_crud_msg'))
        <div class="alert alert-info">{{ Session::get('proposal_crud_msg') }}</div>
    @endif

    @if ( ! $proposals->isEmpty() )
        <div class="panel panel-default">
            <div class="panel-heading text-center"><strong>MINHAS IDEIAS LEGISLATIVAS</strong></div>
            <div class="panel-body">
                <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th><h3>Proposta Legislativa</h3></th>
                        <th><h3>Apoios</h3></th>
                    </tr>
                    </thead>

                    <tbody>

                    @foreach ($proposals as $proposal)
                        <tr>
                            <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                            <td><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{ $proposal->name }}</a> </td>
                            <td>{{ $proposal->likes->count() }}</td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    @else
        <div class="alert alert-info">Clique abaixo para incluir sua primeira proposta legislativa.</div>
        <a href="{{ route('proposal.create') }}" class="btn btn-primary botao">
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Incluir Nova Proposta</a>
    @endif

@stop