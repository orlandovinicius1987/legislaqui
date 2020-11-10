<!DOCTYPE html>
<html lang="en">
    <head>
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <![endif]-->
        <meta charset="utf-8" /><meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />

        {{--FaceBook MetaTags--}}
        <meta property="og:url"                content="{{Request::fullUrl()}}" />
        <meta property="og:type"               content="Ideias Legislativas" />
        <meta property="og:title"              content="Legislaqui" />
        <meta property="og:description"        content="Proponha sua Ideia Legislativa" />
        <meta property="og:image"              content="//www.alerj.rj.gov.br/Content/imagens/logotipo.png" />

        <!-- Styles -->
        {{-- Font Awesome --}}
{{--
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
--}}




        <!-- Loading Bootstrap -->
        <link rel="stylesheet" href="{{mix('css/app.css')}}" type="text/css"/>


        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>



        <title>
            {{ config('app.medium_name') }}
        </title>

        <link href="//www.alerj.rj.gov.br/favicon.ico" rel="shortcut icon" type="image/x-icon" />

        <meta name="viewport" content="width=device-width" />

        @include('partials.recaptcha-v2-head')
    </head>

    {{--

    <body class="d-flex flex-column min-vh-100">
        <div class="body-contents">
            @yield('body')
        </div>
        @include('layouts.partials.google-analytics')
    </body>

--}}



    <body class="d-flex flex-column min-vh-100">
    {{--

        <header>
            <!-- Fixed navbar -->

            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="#">Fixed navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="form-inline mt-2 mt-md-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    --}}


    @yield('body')

    @include('layouts.partials.google-analytics')
    </body>



</html>
