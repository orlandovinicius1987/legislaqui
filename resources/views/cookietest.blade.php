@extends('layouts.alerj')

@section('content')
    {{--Forever cookie: {{ $forever }} <br />--}}
    {{--Temporary cookie: {{ $temporary }} <br />--}}
    {{--Variable test: {{ $variableTest }}--}}
    Unique Cookie: {{$uuid}}
@stop