@extends('layouts.alerj')

@section('title', 'e-democracia')

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

    <div class="panel panel-default">

            <div class="panel-heading">
                {!! $proposals->links() !!}
            </div>

            <div class="panel-body">
                <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th><h3>Proposta Legislativa</h3></th>
                        @if (isset($is_not_responded) && Auth::user()->is_admin)
                            <th><h3>Sem Resposta</h3></th>
                        @else
                            <th><h3>Apoios</h3></th>
                        @endif
                    </tr>
                    </thead>

                    <tbody>
                    @foreach ($proposals as $proposal)
                        <tr>
                            <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                            <td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{ $proposal->name }}</a></td>
                            @if (isset($is_not_responded) && Auth::user()->is_admin)
                                <td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>
                            @else
                                <td>{{ $proposal->likes->count() }}</td>
                            @endif
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>

            <div class="panel-footer">
                {!! $proposals->links() !!}
            </div>
    </div>
@stop