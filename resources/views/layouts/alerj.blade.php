@extends('layouts.common')

@section('contents')
    <section class="content-wrapper main-content clear-fix">
        <div class="interna">
            <div class="controle">
                <div class="alerj">
                    <div class="container">
                        @yield('header-text')
                        @yield('content')
                    </div>

                    {{--@include('partials.footer')--}}
                    @include('partials.scripts')
                </div>
            </div>
        </div>
    </section>
@endsection
