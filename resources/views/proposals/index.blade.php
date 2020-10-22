@extends('layouts.alerj')

@section('title', config('app.name'))


@section('content')

    <div class="cards-lista-ideias">
        @include('partials.error')
        <div class="row">
            <div class="col-md-12 text-left">
                <h1><i class="fas fa-clipboard-list"></i> Ideias Legislativas</h1>
                <div class="lead pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla in arcu et gravida. Curabitur finibus vulputate velit egestas ullamcorper. Suspendisse dignissim vitae urna in congue. Etiam ac vulputate ante, sit amet suscipit elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sed rhoncus ligula. Donec blandit, lectus ac pretium commodo, metus metus euismod ex, eu ultrices dolor justo sed lorem. Nunc quis elit a nisl tincidunt laoreet. Sed condimentum quam at lacus dapibus, sed varius libero scelerisque. In hac habitasse platea dictumst.
                </div>
            </div>


        </div>

        <div class="row">
            <div class="col-12 col-md-8 col-lg-9">
                <!-- search not in navbar collapse -->
                <nav class="navbar navbar-expand navbar-light mt-3 mb-4">
                    <div class="d-flex flex-grow-1">
                        <form class="my-auto w-100 d-inline-block order-1" action="{{ route('home.post') }}">
                            <div class="input-group">
                                <input type="hidden" name="q" value="{{$query}}" >
                                <input type="text"  name="search" value="{{$search}}" class="form-control border border-right-0" placeholder="Busque uma ideia ...">

                                <span class="input-group-append">
                                    <button class="btn btn-primary border border-left-0" type="submit" >
                                        <i class="fas fa-search"></i> Pesquisar
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>

            <div class="col-12 col-md-4 col-lg-3 mt-0 mt-lg-3 mb-4 text-right">
                @if (!Auth::check())
                    <a class="btn btn-primary btn-block" dusk="newProposalButton" href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                        @else
                            <a class="btn btn-primary  btn-block" dusk="newProposalButton" href="{{ route('proposal.create') }}">
                                @endif
                                <i class="fa fa-plus-circle"></i> Criar ideia legislativa
                            </a>
                    </a>
            </div>
        </div>


{{--


        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            Tooltip on top
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            Tooltip on right
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
            Tooltip on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
            Tooltip on left
        </button>

        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
            Tooltip on top
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
            Tooltip on right
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
            Tooltip on bottom
        </button>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
            Tooltip on left
        </button>

--}}





        <div class="row mb-4 controles">
            <div class="col-12">
                <a href="/?q=open"><button type="button" class="btn btn-outline-secondary {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"
                                           data-toggle="tooltip" data-placement="top"
                                           title="Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                                                  encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                                                  Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.">
                        ABERTAS</button></a>

                <a href="/?q=committee"><button type="button" class="btn btn-outline-secondary  {{ $query == "committee" ? 'active' :'' }}"
                                                data-toggle="tooltip" data-placement="top"
                                                title="Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.">
                        EM APROVAÇÃO</button></a>

                <a href="/?q=expired"><button type="button" class="btn btn-outline-secondary {{ $query == "expired" ? 'active' :'' }}"
                                              data-toggle="tooltip" data-placement="top"
                                              title="Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.">
                        EXPIRADAS</button></a>

                <a href="/?q=disapproved"><button type="button" class="btn btn-outline-secondary {{ $query == "disapproved" ? 'active' :'' }}"
                                                  data-toggle="tooltip" data-placement="top"
                                                  title="Essas são as propostas analisadas e não acatadas pela comissão.">
                        NÃO ACATADAS</button></a>

                <a href="/?q=approved"><button type="button" class="btn btn-outline-secondary {{ $query == "approved" ? 'active' :'' }}"
                                               data-toggle="tooltip" data-placement="top"
                                               title="Essas são as propostas analisadas em tramitação na Comissão.">
                        EM TRAMITAÇÃO</button></a>


                <div class="dropdown float-right">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        10
                    </button>
                    <div class="dropdown-menu text-center" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">25</a>
                        <a class="dropdown-item" href="#">50</a>
                        <a class="dropdown-item" href="#">100</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">




            @if ($proposals->count()>0)
                @foreach ($proposals as $proposal)

                    <div class="col-sm-6">
                        <div class="card mb-4">
                            <div class="card-body">
                                <a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}" class="stretched-link">
                                    <h5 class="card-title"><i class="fas fa-list-alt"></i>
                                        {{$proposal->name}}
                                    </h5>
                                </a>
                                @if ($proposal->bill_project)
                                    [VIROU PROJETO DE LEI]
                                @endif

                                <p class="card-text">
                                    WHAT are you?' said the Queen, in a hot tureen! Who for such dainties would not join the dance? Will you, won't you, will you join the dance? "You can really have no answers.' 'If you can't help.
                                </p>


                                @if (isset($is_not_responded) && Auth::user()->is_admin)
                                    <td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>
                                @else
                            </div>

                            <div class="card-footer">
                        <span class="curtidas">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{ ($proposal->like_count - $proposal->unlike_count) }} Curtidas
                        </span>
                                <span class="apoios ml-3">
                            <i class="fa fa-star" aria-hidden="true"></i> {{ $proposal->approvals()->count() }} Apoios
                        </span>
                            </div>

                        </div>
                    </div>

                    @endif
                @endforeach
            @else
                <h3>Não há propostas</h3>
            @endif




        </div>

        <div class="row">
            <div class="col-12 mt-3">
                {!! $proposals->links() !!}
            </div>
        </div>

    </div>






















    {{--<div class="lista-ideias">

    @include('partials.error')


    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6 text-left">
                    <h1>Ideias Legislativas</h1>
                </div>

                <div class="col-md-6 text-right">
                    @if (!Auth::check())
                        <a class="btn btn-primary" dusk="newProposalButton" href="{{ route('proposal.create') }}" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                            @else
                                <a class="btn btn-primary" dusk="newProposalButton" href="{{ route('proposal.create') }}">
                                    @endif
                                    <i class="fa fa-plus-circle"></i> Sua ideia legislativa
                                </a>
                        </a>
                </div>
            </div>
        </div>

        <div class="card-body mt-3">
            <nav class="navbar navbar-expand navbar-light mt-4 ml-3 mr-3">
                <div class="d-flex flex-grow-1">
                    <form class="my-auto w-100 d-inline-block order-1" action="{{ route('home.post') }}">
                        <div class="input-group">
                            <input type="hidden" name="q" value="{{$query}}" >
                            <input type="text"  name="search" value="{{$search}}" class="form-control border border-right-0" placeholder="Busque uma ideia ...">

                            <span class="input-group-append">
                                <button class="btn btn-primary border border-left-0" type="submit" >
                                    <i class="fas fa-search"></i> Pesquisar
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
              </nav>

            <table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">
                <thead >
                <tr class="">
                    <th class="controles pt-3 pb-3 pl-3">
                        <a href="/?q=open"><button type="button" class="btn btn-outline-secondary {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"
                                                   data-toggle="tooltip" data-placement="top"
                                                   title="Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                                              encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                                              Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.">
                                ABERTAS</button></a>

                        <a href="/?q=committee"><button type="button" class="btn btn-outline-secondary  {{ $query == "committee" ? 'active' :'' }}"
                                                        data-toggle="tooltip" data-placement="top"
                                                        title="Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.">
                                EM APROVAÇÃO</button></a>

                        <a href="/?q=expired"><button type="button" class="btn btn-outline-secondary {{ $query == "expired" ? 'active' :'' }}"
                                                      data-toggle="tooltip" data-placement="top"
                                                      title="Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.">
                                EXPIRADAS</button></a>

                        <a href="/?q=disapproved"><button type="button" class="btn btn-outline-secondary {{ $query == "disapproved" ? 'active' :'' }}"
                                                          data-toggle="tooltip" data-placement="top"
                                                          title="Essas são as propostas analisadas e não acatadas pela comissão.">
                                NÃO ACATADAS</button></a>

                        <a href="/?q=approved"><button type="button" class="btn btn-outline-secondary {{ $query == "approved" ? 'active' :'' }}"
                                                       data-toggle="tooltip" data-placement="top"
                                                       title="Essas são as propostas analisadas em tramitação na Comissão.">
                                EM TRAMITAÇÃO</button></a>

                    </th>
                    @if (isset($is_not_responded) && Auth::user()->is_admin)
                        <th><h3>Sem Resposta</h3></th>
                    @else
                        <th class="text-center curtidas-label pt-3 pb-3"><h6><i class="fa fa-thumbs-up" aria-hidden="true"></i><br>Curtidas</h6></th>
                        <th class="text-center curtidas-label pt-3 pb-3"><h6><i class="fa fa-star" aria-hidden="true"></i><br>Apoios</h6></th>
                    @endif
                </tr>
                </thead>


                <tbody>
                @if ($proposals->count()>0)
                    @foreach ($proposals as $proposal)
                        <tr>
                            --}}{{--<!-- <td> --}}{{----}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{----}}{{-- </td>-->--}}{{--
                            <td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{$proposal->name}}</a>
                                @if ($proposal->bill_project)
                                    [VIROU PROJETO DE LEI]
                                @endif
                            </td>

                            @if (isset($is_not_responded) && Auth::user()->is_admin)
                                <td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>
                            @else
                                --}}{{--Likes --}}{{--
                                <td class="text-center">{{ ($proposal->like_count - $proposal->unlike_count) }}</td>
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
        <div class="card-footer text-muted pt-3">
            {!! $proposals->links() !!}
        </div>
    </div>
</div>
--}}


@stop
