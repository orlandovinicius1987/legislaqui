@extends('layouts.admin')

@section('title', 'Responder Proposta Legislativa')

@section('content')

    <div class="">
        <div class="">

            @include('partials.error')

            <div class="panel panel-default">
                <div class="panel-heading text-center"><strong>Responder Proposta Legislativa</strong></div>
                <div class="panel-body">

                    <table class="table-responsive table-striped">
                        <tbody>
                        <tr><td class="table-td-label-show">Nome:</td><td class="table-td-show"> {{ $proposal->name }}</td></tr>
                        <tr><td class="table-td-label-show">Ideia Central:</td><td class="table-td-show"> {{ $proposal->idea_central }}</td></tr>
                        <tr><td class="table-td-label-show">Problema:</td><td class="table-td-show"> {{ $proposal->problem }}</td></tr>
                        <tr><td class="table-td-label-show">Exposição da Ideia:</td><td class="table-td-show"> {{ $proposal->idea_exposition }}</td></tr>
                        </tbody>
                    </table>

                    {{ Form::model($proposal, [
                    'method' => 'PATCH',
                    'route' => ['admin.proposal.updateResponse', $proposal->id],
                    'class' => 'form'
                    ]) }}

                    <div class="form-group">
                        {{ Form::label('Resposta') }}
                        {{ Form::textarea('response', null,
                            array('required',
                                  'class'=>'textarea',
                                  'name'=>'response',
                                  'placeholder'=>'Responder Proposta')) }}
                    </div>

                    <div class="form-group">
                        {{ Form::submit('Responder',
                          array('class'=>'btn btn-primary botao')) }}
                    </div>

                    {{ Form::close() }}

                </div>
            </div>
        </div>
    </div>

@stop