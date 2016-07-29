<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>eDemocracia | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <!-- Bootstrap 3.3.2 -->
    <link href="{{ asset('/templates/admin/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
    <!-- FontAwesome 4.3.0 -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <!-- Ionicons 2.0.0 -->
    <link href="http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css" rel="stylesheet" type="text/css" />
    <!-- Theme style -->
    <link href="{{ asset('/templates/admin/dist/css/AdminLTE.min.css') }}" rel="stylesheet" type="text/css" />
    <!-- AdminLTE Skins. Choose a skin from the css/skins
    folder instead of downloading all of them to reduce the load. -->
    <link href="{{ asset('/templates/admin/dist/css/skins/_all-skins.min.css') }}" rel="stylesheet" type="text/css" />
    <!-- DataTables -->
    <link href="{{ asset('/templates/admin/plugins/datatables/dataTables.bootstrap.css')}}" rel="stylesheet" type="text/css">
    <!-- iCheck -->
    {{--<link href="{{ asset('/templates/admin/plugins/iCheck/flat/blue.css') }}" rel="stylesheet" type="text/css" />--}}
    <!-- Morris chart -->
    {{--<link href="{{ asset('/templates/admin/plugins/morris/morris.css') }}" rel="stylesheet" type="text/css" />--}}
    <!-- jvectormap -->
    {{--<link href="{{ asset('/templates/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.css') }}" rel="stylesheet" type="text/css" />--}}

    <!-- Date Picker -->
    {{--<link href="{{ asset('/templates/admin/plugins/datepicker/datepicker3.css') }}" rel="stylesheet" type="text/css" />--}}
    <!-- Daterange picker -->
    {{--<link href="{{ asset('/templates/admin/plugins/daterangepicker/daterangepicker-bs3.css') }}" rel="stylesheet" type="text/css" />--}}

    <!-- bootstrap wysihtml5 - text editor -->
    {{--<link href="{{ asset('/templates/admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css') }}" rel="stylesheet" type="text/css" />--}}

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->
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
                <small>Control panel</small>
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
            <b>Version</b> 2.0
        </div>
        <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights reserved.
    </footer>
</div><!-- ./wrapper -->

<!-- jQuery 3.0.0 -->
{{--<script src="{{ asset('/templates/admin/plugins/jQuery/jQuery-2.2.0.min.js') }}"></script>--}}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.js"></script>

<!-- jQuery UI 1.11.2 -->
<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.min.js" type="text/javascript"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.2 JS -->
<script src="{{ asset('/templates/admin/bootstrap/js/bootstrap.min.js') }}" type="text/javascript"></script>

<!-- Morris.js charts -->
{{--<script src="http://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>--}}
{{--<script src="{{ asset('/templates/admin/plugins/morris/morris.min.js') }}" type="text/javascript"></script>--}}
<!-- Sparkline -->
{{--<script src="{{ asset('/templates/admin/plugins/sparkline/jquery.sparkline.min.js') }}" type="text/javascript"></script>--}}
<!-- jvectormap -->
{{--<script src="{{ asset('/templates/admin/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js') }}" type="text/javascript"></script>--}}
{{--<script src="{{ asset('/templates/admin/plugins/jvectormap/jquery-jvectormap-world-mill-en.js') }}" type="text/javascript"></script>--}}
<!-- jQuery Knob Chart -->
{{--<script src="{{ asset('/templates/admin/plugins/knob/jquery.knob.js') }}" type="text/javascript"></script>--}}
<!-- daterangepicker -->
{{--<script src="{{ asset('/templates/admin/plugins/daterangepicker/daterangepicker.js') }}" type="text/javascript"></script>--}}
<!-- datepicker -->
{{--<script src="{{ asset('/templates/admin/plugins/datepicker/bootstrap-datepicker.js') }}" type="text/javascript"></script>--}}

<!-- Bootstrap WYSIHTML5 -->
{{--<script src="{{ asset('/templates/admin/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js') }}" type="text/javascript"></script>--}}
<!-- iCheck -->
{{--<script src="{{ asset('/templates/admin/plugins/iCheck/icheck.min.js') }}" type="text/javascript"></script>--}}
<!-- Slimscroll -->
{{--<script src="{{ asset('/templates/admin/plugins/slimScroll/jquery.slimscroll.min.js') }}" type="text/javascript"></script>--}}
<!-- FastClick -->
<script src="{{ asset('/templates/admin/plugins/fastclick/fastclick.min.js') }}"></script>

<!-- InputMask -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js"></script>
{{--<script src="{{ asset('/templates/admin/plugins/input-mask/jquery.inputmask.js') }}"></script>--}}
{{--<script src="{{ asset('/templates/admin/plugins/input-mask/jquery.inputmask.date.extensions.js') }}"></script>--}}
{{--<script src="{{ asset('/templates/admin/plugins/input-mask/jquery.inputmask.extensions.js') }}"></script>--}}

<!-- DataTables -->
<script src="{{ asset('/templates/admin/plugins/datatables/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/templates/admin/plugins/datatables/dataTables.bootstrap.min.js') }}"></script>

<script>
    $(function () {
        $("#example1").DataTable();
        $('#example2').DataTable(
//                {
//                    "columnDefs": [
//                        { "width": "5%", "targets": 0 },
//                        { "width": "30%", "targets": 1 },
//                        { "width": "5%", "targets": 2 },
//                        { "width": "5%", "targets": 3 },
//                        { "width": "35%", "targets": 4 },
//                        { "width": "20%", "targets": 5 },
//                    ]
//                }
        );
        $('#example3').DataTable();
    });
</script>

<!-- AdminLTE App -->
<script src="{{ asset('/templates/admin/dist/js/app.min.js') }}" type="text/javascript"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="{{ asset('/templates/admin/dist/js/pages/dashboard.js') }}" type="text/javascript"></script>
<!-- AdminLTE for demo purposes -->
<script src="{{ asset('/templates/admin/dist/js/demo.js') }}" type="text/javascript"></script>

<script>
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
</script>

<script>
    jQuery(function($){
        $("#cpf").mask("999.999.999-99");
    });
</script>

</body>
</html>