@extends('layouts.alerj')

@section('title', 'e-democracia')

<!-- Current Proposals -->
@section('content')

    @include('partials.error')

    <div class="panel panel-default">

            <div class="panel-heading">
                {!! $proposals->links() !!}
            </div>

            <div class="panel-body">
                <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th><h3>Ideia Legislativa</h3></th>
                        @if (isset($is_not_responded) && Auth::user()->is_admin)
                            <th><h3>Sem Resposta</h3></th>
                        @else
                            <th><h3>Curtidas</h3></th>
                            {{--<th><h3>Unlikes</h3></th>--}}
                            {{--<th><h3>Rating</h3></th>--}}
                            <th><h3>Apoiamentos</h3></th>
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
                                {{--Likes --}}
                                <td>{{ ($proposal->like_count - $proposal->unlike_count) }}</td>
                                {{--Unlikes--}}
                                {{--<td>{{ $proposal->unlike_count }}</td>--}}
                                {{--Rating--}}
                                {{--<td>{{ $proposal->rating }}</td>--}}
                                {{--Approvals--}}
                                <td>{{ $proposal->approvals()->count() }}</td>
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