<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Propostas Legislativas</title>

    <!-- Fonts -->
    {{--<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>--}}
    {{--<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>--}}

    <!-- Styles -->
    <!-- Loading Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <!-- Loading Table CSS -->
    {{--<link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css">--}}
    {{--<link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/dataTables.bootstrap.min.css">--}}
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/s/bs/dt-1.10.10,r-2.0.0/datatables.min.css"/>
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}

    {{ Html::style('css/style.css') }}
    <!-- Portal Alerj -->
    {{--{{ HTML::style('css/estilos.css') }}--}}

</head>
<body id="app-layout">

<div class="container">
    <div class="row row-centered">
        <div class="col col-centered">

            @include('partials.header')

            @yield('content')

            @include('partials.footer')

            @include('partials.scripts')

        </div>
    </div>
</div>

</body>
</html>
