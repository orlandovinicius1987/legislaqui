@extends('layouts.alerj')

@section('title', 'Propostas Legislativas')

@section('content')




    @include('partials.error')
    <div class="cards-lista-ideias">
        <div class="row ideia">

            <div class="mb-3 col-12 col-lg-3 order-lg-2">


                @can('edit', $proposal)
                    <a dusk="editIdea" href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary btn-block " id="editar">
                        <span class="fas fa-edit" aria-hidden="true"></span> Editar Ideia</a>
                @endcan

                @if (!Auth::check())
                    <a href="{{ route('proposal.create') }}" class="btn btn-primary btn-block" id="novaIdeia" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                        <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                @else
                    <a href="{{ route('proposal.create') }}" class="btn btn-primary btn-block" id="novaIdeia" dusk="novaIdeia">
                        <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                @endif


                <a dusk="goBack" href="{{ route('home')}}" class="btn btn-outline-secondary btn-block" id="voltar">
                    <span class="fas fa-undo" aria-hidden="true"></span> Voltar
                </a>


            </div>

            <div class="col-12 col-lg-9 order-lg-1">
                <div class="card mb-4">

                    <div class="card-header">

                        <div class="row">
                            <div class="col-sm-12">
                                <h2 class="card-title">{{ $proposal->name }}</h2>
                            </div>
                           {{-- <div class="col-sm-4">
                                <div class="share_links text-right">
                                    <div class="pull-right">
                                        <a href="https://api.whatsapp.com/send?phone=&amp;text=Proponha%20sua%20Ideia%20Legislativa%20Aqui%21%20http%3A%2F%2Flegislaqui.test%2Fproposals%2F508%20%23LegislAqui%20%23e-democracia%20%23e-cidadania%20via%20%40Legislaqui%21%20-%20ALERJ">
                                            <i class="fab fa-whatsapp-square"></i>
                                        </a>

                                        <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flegislaqui.test%2Fproposals%2F508" target="_blank"><i class="fab fa-facebook-square"></i>
                                        </a>

                                        <a href="https://twitter.com/intent/tweet?text=Proponha%20sua%20Ideia%20Legislativa%20Aqui!&amp;url=http%3A%2F%2Flegislaqui.test%2Fproposals%2F508&amp;via=Legislaqui! - ALERJ&amp;hashtags=#Legislaqui,e-democracia,e-cidadania" target="_blank"><i class="fab fa-twitter-square"></i>
                                        </a>

                                        <a href="mailto:&amp;subject=#Legislaqui&amp;body=http%3A%2F%2Flegislaqui.test%2Fproposals%2F508 "><i class="fa fa-envelope-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>--}}
                        </div>
                        <div class="col-8">

                        </div>



                    </div>
                    <div class="card-body">


                        @include('partials.share', ['url' => URL::full()])

                        <table class="table table-sm table-responsive table-striped table-show">
                            <tbody>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Nome
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->user->name }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Data Publicação
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->pub_date->format('d/m/Y') }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Data Limite
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->limit_date->format('d/m/Y') }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Problema
                                </td>
                                <td class="table-td-show">
                                    {!! $proposal->problem !!}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Exposição da Ideia
                                </td>
                                <td class="table-td-show">
                                    {!! $proposal->idea_exposition !!}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Curtidas
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->like_count }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Não Curtidas
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->unlike_count }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Apoios
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->approvals->count() }}
                                </td>
                            </tr>
                            {{-- if has response -> return response data, else null --}}
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Autor Resposta
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->responder ? $proposal->responder->name  : null }}
                                </td>
                            </tr>
                            <tr>
                                <td class="pl-4 ideia-labels">
                                    Resposta
                                </td>
                                <td class="table-td-show">
                                    {{ $proposal->response ? $proposal->response : null }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="card-footer">
                        <span class="curtidas">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i> {{$proposal->likeCount}} Curtidas
                        </span>
                        <span class="apoios ml-3">
                            <i class="fa fa-star" aria-hidden="true"></i> {{$proposal->approvals->count()}} Apoios
                        </span>
                    </div>

                </div>
            </div>



        </div>

    </div>




@stop
