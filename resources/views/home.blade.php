@extends('layouts.alerj')

\@section('content')
<div class="home-content">
    <br>
    <br>
        <div class="row">
            <div class="col-sm-4 col-xs-12">
                <div class="dummy"></div>
                <a href="/proposals/create" class="square">
                    <div class="icon"><i class="fa fa-plus" aria-hidden="true"></i></div>Crie uma Ideia Legislativa</a>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="dummy"></div>
                <a href="/proposals" class="square">
                    <div class="icon"><i class="fa fa-star" aria-hidden="true"></i></div>Apoie uma Ideia</a>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="dummy"></div>
                <a href="/about" class="square">
                    <div class="icon"><i class="fa fa-question" aria-hidden="true"></i></div>Como Funciona</a>
            </div>
        </div>
</div>
@endsection
