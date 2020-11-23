@extends('layouts.admin')

@section('title', 'Responder Proposta Legislativa')

@section('content')

    <div class="row">
        <div class="col-md-12">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading text-center"><strong>Responder Proposta Legislativa</strong></div>
                <div class="panel-body">

                    <table class="table-responsive table-striped">
                        <tbody>
                        <tr><td class="table-td-label-show">Nome</td><td class="table-td-show"> {{ $proposal->user->name }}</td></tr>
                        <tr><td class="table-td-label-show">Situação</td><td class="table-td-show"> {{ $proposal->open }}</td></tr>
                        @if($proposal->pub_date)
                        <tr><td class="table-td-label-show">Data Publicação</td><td class="table-td-show"> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
                        @else
                        <tr><td class="table-td-label-show">Data Publicação<td class="table-td-show"> Exibida após aprovação</td></tr>
                        @endif
                        <tr><td class="table-td-label-show">Data Limite</td><td class="table-td-show"> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
                        <tr><td class="table-td-label-show">Problema</td><td class="table-td-show"> {!!  $proposal->problem !!}</td></tr>
                        <tr><td class="table-td-label-show">Exposição da Ideia</td><td class="table-td-show"> {!! $proposal->idea_exposition !!}</td></tr>
                        <tr><td class="table-td-label-show">Número de Apoios</td><td class="table-td-show"> {{ $proposal->approvals->count() }}</td></tr>
                        <tr></tr>
                        {{-- not moderated == null --}}
                        <tr><td class="table-td-label-show">Aprovado em</td><td class="table-td-show"> {{ $proposal->approved_at }}</td></tr>
                        <tr><td class="table-td-label-show">Aprovado por</td><td class="table-td-show"> {{ $proposal->approved_by }}</td></tr>
                        <tr><td class="table-td-label-show">Desaprovado em</td><td class="table-td-show"> {!! $proposal->disapproved_at !!}</td></tr>
                        <tr><td class="table-td-label-show">Desaprovado por</td><td class="table-td-show"> {!! $proposal->disapproved_by !!}</td></tr>
                        <tr><td class="table-td-label-show">Autor Resposta</td><td class="table-td-show"> {{ $proposal->responder ? $proposal->responder->name  : null }}</td></tr>
                        </tbody>
                    </table>
                    @include('admin.proposals.partials.table')

                    {{ Form::model($proposal, [
                    'method' => 'PATCH',
                    'route' => ['admin.proposal.updateResponse', $proposal->id],
                    'class' => 'form'
                    ]) }}

                    <div class="form-group">
                        {{ Form::label('Resposta') }}
                        {{ Form::textarea('response', null,
                            array('class'=>'textarea',
                                  'name'=>'response',
                                  'placeholder'=>'Responder Proposta')) }}
                    </div>

                    <div class="pull-left botao">

                            <div class="form-group">

                                @if($proposal->state == App\Enums\ProposalState::NotModerated)
                                    {{ Form::submit('Aprovar!',
                                    array('name' => 'approvalBtn', 'class'=>'btn btn-primary botao')) }}

                                    {{ Form::submit('Desaprovar',
                                    array('name' => 'disapprovalBtn', 'class'=>'btn btn-danger botao')) }}
                                @elseif($proposal->state == App\Enums\ProposalState::Approved || $proposal->state == App\Enums\ProposalState::Supported)
                                    {{ Form::submit('Remover aprovação',
                                    array('name' => 'disapprovalBtn', 'class'=>'btn btn-danger botao')) }}
                                @elseif($proposal->state == App\Enums\ProposalState::Disapproved)
                                    {{ Form::submit('Aprovar!',
                                    array('name' => 'approvalBtn', 'class'=>'btn btn-primary botao')) }}

                                @endif
                                </div>

                    </div>

                    {{ Form::close() }}

                </div>
            </div>
        </div>
    </div>

@stop
