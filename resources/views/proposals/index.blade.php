@extends('layouts.alerj')

@section('title', 'e-democracia')

<!-- Current Proposals -->
@section('content')

    @include('partials.error')



    <div class="panel panel-default">

            <div class="panel-heading-nav">
                {{--{!! $proposals->links() !!}--}}
            </div>

            <div class="panel-body">
                <br><br>
                <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th class="create">
                            <h3><a>
                                <div class="icon-wrapper"><i class="fa fa-plus-circle custom-icon"><span class="fix-editor">&nbsp;</span></i></div>
                                <div class="quadrado_legislaqui">Crie nova Ideia</div>
                            </a></h3>
                        </th>
                        @if (isset($is_not_responded) && Auth::user()->is_admin)
                            <th><h3>Sem Resposta</h3></th>
                        @else
                            <th class="text-center"><i class="fa fa-thumbs-up" aria-hidden="true"></i><h3>Curtidas</h3></th>
                            {{--<th><h3>Unlikes</h3></th>--}}
                            {{--<th><h3>Rating</h3></th>--}}
                            <th class="text-center"><i class="fa fa-star" aria-hidden="true"></i><h3>Apoios</h3></th>
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
                                <td class="text-center">{{ ($proposal->like_count - $proposal->unlike_count) }}</td>
                                {{--Unlikes--}}
                                {{--<td>{{ $proposal->unlike_count }}</td>--}}
                                {{--Rating--}}
                                {{--<td>{{ $proposal->rating }}</td>--}}
                                {{--Approvals--}}
                                <td class="text-center">{{ $proposal->approvals()->count() }}</td>
                            @endif
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>

            <div class="panel-footer-nav">
                {!! $proposals->links() !!}
            </div>
    </div>
@stop