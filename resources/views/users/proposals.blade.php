@extends('layouts.app')

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

    <div class="container">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading"><strong>IDEIAS LEGISLATIVAS</strong></div>
                <div class="panel-body">
                    <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th>Proposta Legislativa</th>
                            <th>Apoios</th>
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
        </div>
    </div>
    </div>
@stop