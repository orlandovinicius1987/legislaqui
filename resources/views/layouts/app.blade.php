<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Propostas Legislativas</title>

    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

    <!-- Styles -->
    <!-- Loading Bootstrap -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
    <!-- Loading Table CSS -->
    {{--<link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/jquery.dataTables.min.css">--}}
    {{--<link rel="stylesheet" href="https://cdn.datatables.net/1.10.10/css/dataTables.bootstrap.min.css">--}}
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/s/bs/dt-1.10.10,r-2.0.0/datatables.min.css"/>
    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}

    {{ Html::style('css/style.css') }}

</head>
<body id="app-layout">

    @include('partials.header')

    @yield('content')

    @include('partials.footer')

    <!-- JavaScripts -->
    <!-- Loading jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <!-- Loading Bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    {{--<!-- Loading DataTable -->--}}
    {{--<script src="https://cdn.datatables.net/1.10.10/js/jquery.dataTables.min.js"></script>--}}
    {{--<!-- Loading DataTable::Bootstrap-->--}}
    {{--<script src="https://cdn.datatables.net/1.10.10/js/dataTables.bootstrap.min.js"></script>--}}

    <script type="text/javascript" src="https://cdn.datatables.net/s/bs/dt-1.10.10,r-2.0.0/datatables.min.js"></script>
    {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}

    <script>
        $(document).ready(function() {
            // init datatable on #datatable table
            $('#datatable').DataTable( {
                language: {
                    url: '//cdn.datatables.net/plug-ins/1.10.10/i18n/Portuguese-Brasil.json'
                }
            } );
        });
    </script>
</body>
</html>
