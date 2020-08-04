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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

        <!-- Loading Bootstrap -->
        <link rel="stylesheet" href="{{mix('css/app.css')}}" type="text/css"/>


        <!-- Scripts -->
        <script src="{{ mix('js/app.js') }}" defer></script>

        <title>
            {{ config('app.medium_name') }}
        </title>

        <link href="//www.alerj.rj.gov.br/favicon.ico" rel="shortcut icon" type="image/x-icon" />

        <meta name="viewport" content="width=device-width" />

    </head>

    <body class="background_color_ffffff">
        <div class="body-contents">
            @yield('body')
        </div>

        @include('layouts.partials.google-analytics')


    </body>
</html>
