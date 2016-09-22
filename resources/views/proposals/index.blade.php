@extends('layouts.alerj')

@section('title', config('app.name'))

@section('header-text')
    <div class="row explica">
        <div class="col-xs-12 instrucao hidden-xs">
            Você pode sugerir e dar seu apoio a ideias legislativas que podem virar novas leis estaduais, alterar leis já existentes ou mudar a Constituição Estadual.

            As sugestões que receberem pelo menos 20 mil apoios serão encaminhadas à Comissão de Direitos Humanos e Legislação Participativa (CDH), onde serão discutidas e receberão parecer dos deputados, podendo virar um projeto de lei.

            Antes de propor uma ideia, procure, na lista de ideias já apresentadas, outras com o mesmo conteúdo, para não dividir os apoios e atrasar a tramitação.
        </div>
    </div>
@stop


<!-- Current Proposals -->
@section('content')

    <div class="index">

        @include('partials.error')

        <div class="">
            {{--@if(($query == "open")or($query == ""))
              <div class="col-xs-12 instrucao">
                Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                 Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.
              </div>
            @elseif ( $query == "committee" )
              <div class="col-xs-12 instrucao">
                 Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.
               </div>
            @elseif ( $query == "expired" )
              <div class="col-xs-12 instrucao">
                  Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.
              </div>
            @elseif ( $query == "disapproved" )
               <div class="col-xs-12 instrucao">
                   Essas são as propostas analisadas e não acatadas pela comissão.
               </div>
            @elseif ( $query == "approved" )
                <div class="col-xs-12 instrucao">
                    Essas são as propostas analisadas e aprovadas pela comissão.
                </div>
            @endif--}}
        </div>


        <div class="panel panel-default">
            <div class="panel-heading-nav">
                <div class="row">
                    <div class="col-xs-12 col-md-6 titulopagina">
                      <h1>Idéias Legislativas</h1>
                    </div>
                    <div class="col-xs-12 col-md-3 pull-right crienova">
                        <h3>
                            @if (!Auth::check())
                                <a href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                                    @else
                                        <a href="{{ route('proposal.create') }}">
                                            @endif
                                            <div class="icon-wrapper"><i class="fa fa-plus-circle custom-icon"><span class="fix-editor">&nbsp;</span></i></div>
                                            <div class="quadrado_legislaqui" title="clique para criar uma nova ideia legislativa">Sua ideia legislativa</div>
                                        </a></a>
                        </h3>
                    </div>
                    {{--<div class="col-xs-7 pull-right text-right">
                        <button type="button" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"
                                data-toggle="tooltip" data-placement="top"
                                title="Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                 Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.">
                            <a href="/?q=open"> ABERTAS</a></button>

                        <button type="button" class="btn btn-default {{ $query == "committee" ? 'active' :'' }}"
                                data-toggle="tooltip" data-placement="top"
                                title="Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.">
                            <a href="/?q=committee">NA COMISSÃO</a></button>

                        <button type="button" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}"
                                data-toggle="tooltip" data-placement="top"
                                title="Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.">
                            <a href="/?q=expired">EXPIRADAS</a></button>

                        <button type="button" class="btn btn-default {{ $query == "disapproved" ? 'active' :'' }}"
                                data-toggle="tooltip" data-placement="top"
                                title="Essas são as propostas analisadas e não acatadas pela comissão.">
                            <a href="/?q=disapproved">NÃO ACATADAS</a></button>

                        <button type="button" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}"
                                data-toggle="tooltip" data-placement="top"
                                title="Essas são as propostas analisadas e aprovadas pela comissão.">
                            <a href="/?q=approved">APROVADAS</a></button>
                    </div>--}}
                </div>
                <div class="row visible-xs">
                    <div class="wrap-select">
                        <div id="dd" class="wrapper-dropdown-3">
                            <span>Filtre sua busca...</span>
                            <ul class="dropdown">
                                <li><a href="#">Abertas</a></li>
                                <li><a href="#">Na Comissão</a></li>
                                <li><a href="#">Expiradas</a></li>
                                <li><a href="#">Não Acatadas</a></li>
                                <li><a href="#">Aprovadas</a></li>
                            </ul>
                        </div>
                    </div>


                </div>

                {{--{!! $proposals->links() !!}--}}
            </div>

              <div class="panel-body">
                    <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                        <thead>
                        <tr>
                            <th >
                                <div class="hidden-xs col-md-8 filtros">
                                    <a href="/?q=open"><button type="button" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"
                                            data-toggle="tooltip" data-placement="top"
                                            title="Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                 Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.">
                                         ABERTAS</button></a>

                                    <a href="/?q=committee"><button type="button" class="btn btn-default  {{ $query == "committee" ? 'active' :'' }}"
                                            data-toggle="tooltip" data-placement="top"
                                            title="Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.">
                                        NA COMISSÃO</button></a>

                                    <a href="/?q=expired"><button type="button" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}"
                                            data-toggle="tooltip" data-placement="top"
                                            title="Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.">
                                        EXPIRADAS</button></a>

                                    <a href="/?q=disapproved"><button type="button" class="btn btn-default {{ $query == "disapproved" ? 'active' :'' }}"
                                            data-toggle="tooltip" data-placement="top"
                                            title="Essas são as propostas analisadas e não acatadas pela comissão.">
                                        NÃO ACATADAS</button></a>

                                    <a href="/?q=approved"><button type="button" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}"
                                            data-toggle="tooltip" data-placement="top"
                                            title="Essas são as propostas analisadas e aprovadas pela comissão.">
                                        APROVADAS</button></a>
                                </div>


                                    <div class="col-xs-12 col-md-4 buscaideia">
                                        {!! Form::open(array('route' => 'home.post', 'class'=>'form')) !!}
                                        {!! Form::text('search', null,
                                            array('required',
                                            'class'=>'form-control',
                                            'placeholder'=>'Busque uma ideia ...')) !!}

                                        <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                        {!! Form::close() !!}
                                    </div>

                                 {{--LINK PARA DÚVIDAS FREQUENTES--}}
                                 {{--<a href="{{ route('about') }}">Dúvidas frequentes</a> --}}
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
                                {{--<!-- <td> --}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{-- </td>-->--}}
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

                <div class="panel-footer-nav text-center">
                    {!! $proposals->links() !!}
                </div>
        </div>
    </div>
@stop
