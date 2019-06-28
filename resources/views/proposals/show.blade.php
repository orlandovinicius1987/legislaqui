@extends('layouts.alerj')

@section('title', 'Propostas Legislativas')

@section('header-text')
    <div class="row tituloideia">
        <div class="col-xs-12 panel ">
            <h1>{{ $proposal->name }}</h1>
        </div>
    </div>
@stop


@section('content')

    <div class="">
        <div class="corpodaideia">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading">
                    {{--<div class="col-xs-1" style="width: 54px; text-align: center; margin-top: -12px; margin-left: 5px;">--}}
                        {{--<a href="{{ route('proposal.like', ['id' => $proposal->id]) }}" title="Like"><i class="fa fa-caret-up fa-lg" aria-hidden="true"></i></a>--}}
                        {{--<span class="vote-count-post">{{ $proposal->total_like_count }}</span>--}}
                        {{--<a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}" title="Dislike"><i class="fa fa-caret-down fa-lg" aria-hidden="true"></i></a>--}}
                        {{--<a href="{{ route('proposal.approval', $proposal->id) }}" title="Apoiar essa ideia" ><i class="fa fa-star" aria-hidden="true"></i></a>--}}
                        {{--<div class="favoritecount"><b></b></div>--}}
                    {{--</div>--}}
                    {{--<div class="col-xs-11">--}}
                    <div>

                        @include('partials.share', ['url' => URL::full()])
                        {{--@include('partials.like', ['proposalId' => $proposal->id])--}}
                    </div>
                </div>
                <div class="panel-body">
                    <table class="table-responsive table-striped table-show">
                        <tbody>

                            <tr><td class="table-td-label-show">Nome</td><td class="table-td-show"> {{ $proposal->user->name }}</td></tr>
                            {{--<tr><td class="table-td-label-show">Situação</td><td class="table-td-show">--}}

                                    {{--@if ($proposal->approval == 0)--}}
                                        {{--'DesAprovado'--}}
                                    {{--@endif--}}


                                    {{--@if ($proposal->approval == 1)--}}
                                    {{--'Aprovado'--}}
                                        {{--@endif--}}


                                        {{--@if ($proposal->approval === null)--}}

                                    {{--'Não Moderado'--}}
                                        {{--@endif--}}

                                {{--</td></tr>--}}
                            <tr><td class="table-td-label-show">Data Publicação</td><td class="table-td-show"> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
                            <tr><td class="table-td-label-show">Data Limite</td><td class="table-td-show"> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
                            <tr><td class="table-td-label-show">Ideia Central</td><td class="table-td-show"> {!! $proposal->idea_central !!}</td></tr>
                            <tr><td class="table-td-label-show">Problema</td><td class="table-td-show"> {!! $proposal->problem !!}</td></tr>
                            <tr><td class="table-td-label-show">Exposição da Ideia</td><td class="table-td-show"> {!! $proposal->idea_exposition !!}</td></tr>
                            <tr><td class="table-td-label-show">Curtidas</td><td class="table-td-show"> {{ $proposal->like_count }}</td></tr>
                            <tr><td class="table-td-label-show">Não Curtidas</td><td class="table-td-show"> {{ $proposal->unlike_count }}</td></tr>
                            <tr><td class="table-td-label-show">Apoios</td><td class="table-td-show"> {{ $proposal->approvals->count() }}</td></tr>
                            {{-- if has response -> return response data, else null --}}
                            <tr><td class="table-td-label-show">Autor Resposta</td><td class="table-td-show"> {{ $proposal->responder ? $proposal->responder->name  : null }}</td></tr>
                            <tr><td class="table-td-label-show">Resposta</td><td class="table-td-show"> {{ $proposal->response ? $proposal->response : null }}</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="panel-footer">
                    {{--<div class="pull-left botao">--}}

                        {{--<a href="{{ URL::current() }}/like" class="btn btn-info" role="button">Apoiar essa Ideia!</a>--}}
                        {{--<a href="{{ route('proposal.like', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                            {{--<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Gostei dessa Ideia! </a>--}}
                        {{--<a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                            {{--<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Não gostei dessa Ideia!</a>--}}

                        {{--@if (!Auth::check())--}}
                        {{--<a href="{{ route('proposal.approval', $proposal->id) }}" class="btn btn-info botao" role="button" onclick="if(!confirm('Para apoiar oficialmente uma ideia legislativa você precisa criar uma conta na página da ALERJ.')){return false;};">--}}
                            {{--<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Apoiar essa Ideia!</a>--}}
                        {{--@else--}}
                        {{--<a href="{{ route('proposal.approval', $proposal->id) }}" class="btn btn-info botao" role="button">--}}
                            {{--<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Apoiar essa Ideia!</a>--}}
                        {{--@endif--}}

                    {{--</div>--}}

                    <div class="row">
                        <div class="col-xs-12">
                        @can('edit', $proposal)
                        <a href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary botao" id="editar">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Editar Ideia</a>
                        @endcan
                        @if (!Auth::check())
                        <a href="{{ route('proposal.create') }}" class="btn btn-primary botao" id="novaIdeia" onclick="if(!confirm('Para incluir nova ideia legislativa você deve estar logado')){return false;};">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                        @else
                            <a href="{{ route('proposal.create') }}" class="btn btn-primary botao" id="novaIdeia" dusk="novaIdeia">
                                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Incluir Nova Ideia</a>
                        @endif
                        {{--@can('destroy', $proposal)
                        <a href="{{ route('proposal.destroy', $proposal->id) }}" class="btn btn-primary botao" onclick="if(!confirm('Você tem certeza que deseja apagar essa Ideia Legislativa?')){return false;};">
                            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Eliminar Ideia</a>
                        @endcan--}}

                        <a href="{{ route('home')}}" class="btn btn-primary botao pull-right" id="voltar">
                        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Voltar</a>
                        </div>
                    </div>

                    {{--<div class="socialmedia">--}}
                        {{--<div class="addthis_sharing_toolbox"></div>--}}
                    {{--</div>--}}
                    {{--@include('partials.share', ['url' => 'http://???????????/'])--}}
                </div>

            </div>
        </div>
    </div>

@stop
