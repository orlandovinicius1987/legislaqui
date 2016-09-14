@extends('layouts.admin')

@section('title', 'Propostas Legislativas')

@section('content')

    <!-- Main row -->
    <div class="row">
        <div class="col-md-12">

            @include('partials.error')

                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">{{ $proposal->name }}</h3>
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="panel-body">
                                        <table class="table-responsive table-striped table-show">
                                            <tbody>
                                            <tr><td class="table-td-label-show">Nome</td><td class="table-td-show"> {{ $proposal->user->name }}</td></tr>
                                            <tr><td class="table-td-label-show">Situação</td><td class="table-td-show"> {{  $proposal->open ? 'Aberta' : 'Fechada'   }}</td></tr>
                                            <tr><td class="table-td-label-show">Data Publicação</td><td class="table-td-show"> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
                                            <tr><td class="table-td-label-show">Data Limite</td><td class="table-td-show"> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
                                            <tr><td class="table-td-label-show">Ideia Central</td><td class="table-td-show"> {!! $proposal->idea_central !!}</td></tr>
                                            <tr><td class="table-td-label-show">Problema</td><td class="table-td-show"> {!!  $proposal->problem !!}</td></tr>
                                            <tr><td class="table-td-label-show">Exposição da Ideia</td><td class="table-td-show"> {!! $proposal->idea_exposition !!}</td></tr>
                                            <tr><td class="table-td-label-show">Número de Apoios</td><td class="table-td-show"> {{ $proposal->approvals->count() }}</td></tr>
                                            <tr></tr>
                                            {{-- not moderated == null --}}
                                            <tr><td class="table-td-label-show">Aprovado em</td><td class="table-td-show"> {{ $proposal->approved_at }}</td></tr>
                                            <tr><td class="table-td-label-show">Aprovado por</td><td class="table-td-show"> {{ $proposal->approved_by }}</td></tr>
                                            <tr><td class="table-td-label-show">Desaprovado em</td><td class="table-td-show"> {!! $proposal->disapproved_at !!}</td></tr>
                                            <tr><td class="table-td-label-show">Desaprovado por</td><td class="table-td-show"> {!! $proposal->disapproved_by !!}</td></tr>
                                            {{-- if has response -> return response data, else null --}}
                                            <tr><td class="table-td-label-show">Autor Resposta</td><td class="table-td-show"> {{ $proposal->responder ? $proposal->responder->name  : null }}</td></tr>
                                            <tr><td class="table-td-label-show">Resposta</td><td class="table-td-show"> {!! $proposal->response ? $proposal->response : null !!}</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="panel-footer">
                                        {{--Proposal Moderation--}}
                                        <div class="pull-left botao">
                                            @if ($proposal->approved_at == null && $proposal->approved_by == null && $proposal->disapproved_at == null && $proposal->disapproved_by == null )
                                                <a href="{{ route('admin.proposal.response', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">
                                                    <i class="fa fa-cog fa-spin fa fa-fw"></i> Moderar essa Ideia! </a>
                                            @else
                                                <i class="fa fa-check-square text-success" aria-hidden="true"></i> Esta Ideia Legislativa já foi Moderada.
                                            @endif
                                        </div>

                                        {{--<div class="pull-left botao">--}}
                                            {{--<a href="{{ route('admin.proposal.approved', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Aprovar! </a>--}}
                                            {{--<a href="{{ route('admin.proposal.disapproved', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Desaprovar</a>--}}
                                            {{--<a href="{{ route('proposal.approval', $proposal->id) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Apoiar essa Ideia!</a>--}}
                                        {{--</div>--}}

                                        {{--<div class="pull-left botao">--}}

                                            {{--<a href="{{ URL::current() }}/like" class="btn btn-info" role="button">Apoiar essa Ideia!</a>--}}
                                            {{--<a href="{{ route('proposal.like', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> Gostei dessa Ideia! </a>--}}
                                            {{--<a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span> Não gostei dessa Ideia!</a>--}}
                                            {{--<a href="{{ route('proposal.approval', $proposal->id) }}" class="btn btn-info botao" role="button">--}}
                                                {{--<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Apoiar essa Ideia!</a>--}}
                                        {{--</div>--}}

                                        <div class="pull-right botao">
                                            @can('edit', $proposal)
                                            <a href="{{ route('admin.proposal.edit', $proposal->id) }}" class="btn btn-primary botao">
                                                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Editar Proposta</a>
                                            @endcan

                                            @can('bypass', $proposal)
                                            <a href="{{ route('admin.proposal.bypass', $proposal->id) }}" class="btn btn-danger botao">
                                                <span class="glyphicon glyphicon-forward" aria-hidden="true"></span> Enviar diretamente à Comissão</a>
                                            @endcan

                                            {{--@can('destroy', $proposal)--}}
                                            {{--<a href="{{ route('admin.proposal.destroy', $proposal->id) }}" class="btn btn-danger botao" onclick="if(!confirm('Você tem certeza que deseja apagar essa Ideia Legislativa?')){return false;};">--}}
                                                {{--<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Eliminar Proposta</a>--}}
                                            {{--@endcan--}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

@stop