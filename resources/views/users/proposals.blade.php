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
            <div class="panel-heading text-center">MINHAS IDEIAS LEGISLATIVAS</div>
            <div class="panel-body">
                <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th><h3>Proposta Legislativa</h3></th>
                        <th class="text-center"><i class="fa fa-thumbs-up" aria-hidden="true"></i><h3>Curtidas</h3></th>
                        <th class="text-center"><i class="fa fa-star" aria-hidden="true"></i><h3>Apoios</h3></th>
                    </tr>
                    </thead>

                    <tbody>

                    @foreach ($proposals as $proposal)
                        <tr>
                            <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                            <td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{ $proposal->name }}</a> </td>
                            {{--Likes --}}
                            <td class="text-center">{{ ($proposal->like_count - $proposal->unlike_count) }}</td>
                            <td class="text-center">{{ $proposal->approvals->count() }}</td>
                        </tr>
                    @endforeach

                    </tbody>
                </table>
            </div>
        </div>
    @else

        <div class="panel-body">
            <br><br>
            <div class="alert alert-info">Clique abaixo para incluir sua primeira proposta legislativa.</div>

            <table id="datatable" class="" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th class="create">
                        <h3>
                            @if (!Auth::user())
                                <a href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;}">
                                    @else
                                        <a href="{{ route('proposal.create') }}">
                                            @endif
                                            <div class="icon-wrapper"><i class="fa fa-plus-circle custom-icon"><span class="fix-editor">&nbsp;</span></i></div>
                                            <div class="quadrado_legislaqui">1Crie nova Ideia</div>
                                        </a></h3>
                    </th>
                </tr>
                </thead>
            </table>
        {{--<a href="{{ route('proposal.create') }}" class="btn btn-primary botao">--}}
            {{--<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Incluir Nova Proposta</a>--}}
    @endif

@stop