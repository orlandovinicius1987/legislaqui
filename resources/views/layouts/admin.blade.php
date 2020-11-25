<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name') }} | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>


</head>
<body class="skin-blue">
<div class="wrapper">
    @include('includes.header')
    @include('includes.sidebar')
            <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Dashboard
                <small>Painel de Controle</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li class="active">Dashboard</li>
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">
            @yield('content')
        </section><!-- /.content -->
    </div><!-- /.content-wrapper -->
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 1.0
        </div>
        <strong>Copyright &copy; #Legislaqui 2016 <a href="http://www.alerj.rj.gov.br">Alerj</a>.</strong> Todos os direitos reservados.
    </footer>

        <!-- compiled -->
        <script src="{{mix('/js/admin/admin.js')}}"></script>
        <link href="{{ mix('/css/admin.css') }}" rel="stylesheet" type="text/css" />
        <!-- compiled -->
</div><!-- ./wrapper -->

</body>
</html>
