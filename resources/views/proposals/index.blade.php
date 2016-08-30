@extends('layouts.alerj')

@section('title', 'e-democracia')

<!-- Current Proposals -->
@section('content')

    <div class="index">

        @include('partials.error')

        <div class="row">
            <div class="col-xs-12 col-sm-6 pull-right">
                {!! Form::open(array('route' => 'home.post', 'class'=>'form')) !!}
                {!! Form::text('search', null,
                    array('required',
                    'class'=>'form-control',
                    'placeholder'=>'Busque uma ideia ...')) !!}

                <span class="glyphicon glyphicon-search form-control-feedback"></span>
                {{----}}
                {{--{!! Form::submit('&#xf002;',--}}
                {{--array('class'=>'btn search')) !!}--}}
                {!! Form::close() !!}
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 text-center" role="group" aria-label="...">

             <a href="/?q=open" class="btn btn-default {{ $query == "open" ? 'active' :'' }}"> Abertas</a>
             <a href="/?q=comittee" class="btn btn-default {{ $query == "comittee" ? 'active' :'' }}">Na comissão</a>
             <a href="/?q=expired" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}">Expiradas</a>
             <a href="/?q=disapprove" class="btn btn-default {{ $query == "disapprove" ? 'active' :'' }}">Não acatadas</a>

            </div>
        </div>

        <div class="row">
            <div class="col-xs-12 instrucao">
             As ideias que obtiverem apoio significativo serão transformadas em sugestão e encaminhadas formalmente à Comissão de Direitos Humanos e Legislação Participativa.
            </div>
        </div>

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
                                <h3>
                                    @if (!Auth::check())
                                        <a href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                                    @else
                                        <a href="{{ route('proposal.create') }}">
                                            @endif
                                            <div class="icon-wrapper"><i class="fa fa-plus-circle custom-icon"><span class="fix-editor">&nbsp;</span></i></div>
                                            <div class="quadrado_legislaqui">Crie nova Ideia</div>
                                        </a>
                                </h3>
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
    </div>
@stop
