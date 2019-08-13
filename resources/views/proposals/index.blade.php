@extends('layouts.alerj')

@section('title', config('app.name'))

@section('header-text')
    {{--<div class="row explica">
        <div class="col-xs-12 instrucao hidden-xs">
            Você pode sugerir e dar seu apoio a ideias legislativas que podem virar novas leis estaduais, alterar leis já existentes ou mudar a Constituição Estadual.
            As sugestões que receberem pelo menos 20 mil apoios serão encaminhadas à Comissão de Direitos Humanos e Legislação Participativa (CDH), onde serão discutidas e receberão parecer dos deputados, podendo virar um projeto de lei.
            Antes de propor uma ideia, procure, na lista de ideias já apresentadas, outras com o mesmo conteúdo, para não dividir os apoios e atrasar a tramitação.
        </div>
    </div>--}}
@stop

@section('content')

    <div class="index">

        @include('partials.error')

        <div class="panel panel-default">
            <div class="panel-heading-nav">
                <div class="row">
                    <div class="col-xs-12 col-md-6 titulopagina">
                      <h1>Ideias Legislativas</h1>
                    </div>
                    <div class="col-xs-12 col-sm-4 col-md-3 pull-right crienova">
                        <h3>
                            @if (!Auth::check())
                                <a dusk="newProposalButton" href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                                    @else
                                        <a dusk="newProposalButton" href="{{ route('proposal.create') }}" >
                                            @endif
                                            <div class="icon-wrapper"><i class="fa fa-plus-circle custom-icon"><span class="fix-editor">&nbsp;</span></i></div>
                                            <div class="quadrado_legislaqui" title="clique para criar uma nova ideia legislativa">Sua ideia legislativa</div>
                                        </a></a>
                        </h3>
                    </div>

                </div>

                {{-- specific for Mobile --}}
                <div class="row visible-xs">

                    <div class="col-xs-6">
                        {{-- button to modal --}}
                        <button type="button" class="btn modal_button" data-toggle="modal" data-target=".bs-example-modal-lg">
                            Entenda!
                        </button>

                        {{-- modal --}}
                        <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="myModalLabel">O que é?</h4>
                                    </div>
                                    <div class="modal-body">
                                        No #Legislaqui você pode sugerir e dar seu apoio a ideias legislativas que podem virar novas leis estaduais, alterar
                                        leis já existentes ou mudar a Constituição Estadual. As sugestões que receberem pelo menos 20 mil apoios
                                        serão encaminhadas à Comissão de Direitos Humanos e Legislação Participativa (CDH), onde serão discutidas
                                        e receberão parecer dos deputados, podendo virar um projeto de lei. Antes de propor uma ideia, procure, na
                                        lista de ideias já apresentadas, outras com o mesmo conteúdo, para não dividir os apoios e atrasar a tramitação.
                                    </div>
                                    <div class="modal-footer">
                                        #Legislaqui - 2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-xs-6">
                        {{-- Menu DropDown --}}
                        <div class="dropdown btn-group">
                            <button class="btn gradient dropdown-toggle drop_filter" data-toggle="dropdown" id="filters">
                                Filtre sua busca
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="/?q=open">Abertas</a></li>
                                <li><a href="/?q=committee">Em aprovação</a></li>
                                <li><a href="/?q=expired">Expiradas</a></li>
                                <li><a href="/?q=disapproved">Não Acatadas</a></li>
                                <li><a href="/?q=approved">Em tramitação</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {{-- specific for Mobile End --}}

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
                                        EM APROVAÇÃO</button></a>

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
                                            title="Essas são as propostas analisadas em tramitação na Comissão.">
                                        EM TRAMITAÇÃO</button></a>
                                </div>


                                    <div class="col-xs-12 col-md-4 buscaideia">
                                        {!! Form::open(array('route' => 'home.post', 'class'=>'form')) !!}
                                        {!! Form::text('search', null,
                                            array('required',
                                            'class'=>'form-control',
                                            'placeholder'=>'Busque uma ideia ...')) !!}
                                        <a href="#"  name="pesquisar"><button href="#" type="submit" class="btn btn-default glyphicon glyphicon-search form-control-feedback dimensionsBackground   ">{{--Pesquisar--}}</button></a>
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
                            @if ($proposals->count()>0)
                                    @foreach ($proposals as $proposal)
                                        <tr>
                                            {{--<!-- <td> --}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{-- </td>-->--}}
                                            <td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{$proposal->name}}</a>
                                            @if ($proposal->bill_project)
                                                  [VIROU PROJETO DE LEI]
                                            @endif
                                            </td>

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
                            @else
                                <tr>
                                    <th><h3>Não há propostas</h3></th>
                                </tr>
                            @endif
                        </tbody>
                    </table>
                </div>

                <div class="panel-footer-nav text-center">
                    {!! $proposals->links() !!}
                </div>
        </div>
    </div>
@stop
