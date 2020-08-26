@extends('layouts.alerj')

@section('title', 'Propostas Legislativas')

@section('content')


    <div class="row lista-ideias">
        <div class="col-12">

            @include('partials.error')

            <div class="card">
                <div class="card-header">

                    <div class="row tituloideia">
                        <div class="col-12 pl-4">
                            <h1>
                                {{ $proposal->name }}
                            </h1>
                        </div>
                    </div>

                    @include('partials.share', ['url' => URL::full()])
                </div>


                <div class="card-body">
                    <div class="corpodaideia">
                        <table class="table  table-sm table-responsive table-striped table-show">
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
                </div>


                <div class="card-footer pt-3">
                    <div class="row d-none d-sm-block">
                        <div class="col-12 pl-5 pr-5">
                            @can('edit', $proposal)
                                <a dusk="editIdea" href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary btn-edit" id="editar">
                                    <span class="fas fa-edit" aria-hidden="true"></span> Editar Ideia</a>
                            @endcan
                            @if (!Auth::check())
                                <a href="{{ route('proposal.create') }}" class="btn btn-primary " id="novaIdeia" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                                    <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                            @else
                                <a href="{{ route('proposal.create') }}" class="btn btn-primary" id="novaIdeia" dusk="novaIdeia">
                                    <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                            @endif
                            <a dusk="goBack" href="{{ route('home')}}" class="btn btn-outline-secondary" id="voltar">
                                <span class="fas fa-undo" aria-hidden="true"></span> Voltar</a>
                        </div>
                    </div>
                    <div class="d-block d-sm-none">
                        <div class="col-12 ">
                            @can('edit', $proposal)
                                <a dusk="editIdea" href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary btn-edit btn-block" id="editar">
                                    <span class="fas fa-edit" aria-hidden="true"></span> Editar Ideia</a>
                            @endcan
                            @if (!Auth::check())
                                <a href="{{ route('proposal.create') }}" class="btn btn-primary btn-block " id="novaIdeia" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                                    <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                            @else
                                <a href="{{ route('proposal.create') }}" class="btn btn-primary btn-block " id="novaIdeia" dusk="novaIdeia">
                                    <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                            @endif
                            <a dusk="goBack" href="{{ route('home')}}" class="btn btn-outline-secondary"  id="voltar">
                                <span class="fas fa-undo" aria-hidden="true"></span> Voltar</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    </div>

@stop
