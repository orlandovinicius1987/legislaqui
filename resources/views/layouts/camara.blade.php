@extends('layouts.common')

@section('contents')
    <section class="content-wrapper main-content clear-fix">
        <div class="interna">

                    <div>
                        @yield('content')
                    </div>

                    {{--@include('partials.footer')--}}
                    @include('partials.scripts')

        </div>
    </section>
@endsection
