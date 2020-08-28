@extends('layouts.html')

@section('body')

    @include('layouts.partials.header')
    @yield('contents')
    @include('layouts.partials.footer')

@endsection
