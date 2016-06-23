@extends('layouts.admin')

@section('content')

    <h1>{{ $proposal->name }}</h1>
    <p class="lead">{{ $proposal->description }}</p>
    <hr>

    <div class="row">
        <div class="col-md-6">
            <a href="{{ route('proposals') }}" class="btn btn-info">Voltar</a>
            <a href="{{ route('proposal.edit', $proposal->id) }}" class="btn btn-primary">Editar Proposta</a>
        </div>
        <div class="col-md-6 text-right">
            {{ Form::open([
                'method' => 'DELETE',
                'route' => ['proposal.destroy', $proposal->id]
            ]) }}
            {{ Form::submit('Deletar essa Proposta ?', ['class' => 'btn btn-danger']) }}
            {{ Form::close() }}
        </div>
    </div>

@stop