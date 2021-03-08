@extends('layouts.html')

@section('body')

    @if(!Session::get('navbarDisabled'))
        @include('layouts.partials.header')
    @endIf

    @yield('contents')

    @if(!Session::get('footerDisabled'))
        @include('layouts.partials.footer')
    @endIf
@endsection
