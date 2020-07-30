<!DOCTYPE html>
<html lang="en">
    <head>
        <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" /><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <![endif]-->
        <meta charset="utf-8" /><meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/jquery-ui.css" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/colorpicker.css" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/datepicker.css" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/lightbox.css" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/jquery.jscrollpane.css" />
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/jquery-ui.theme.css">
        <link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/jquery-ui.structure.css">

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
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">


        <link rel="stylesheet" type="text/css" href="/templates/alerj/css/estilos.css" />
        <link rel="stylesheet" type="text/css" href="/templates/alerj/css/custom.css" />

        <link rel="stylesheet" type="text/css" href="/templates/alerj/css/custom_appart.css" />

        <link rel="stylesheet" type="text/css" href="/templates/alerj/css/custom_new.css" />



        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.validate.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.validate.unobtrusive.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-ui-1.10.4.custom.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-ui-1.10.4.custom.min.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.cookie.js"></script>
        <link href="//www.alerj.rj.gov.br/BotDetectCaptcha.ashx?get=layoutStyleSheet" rel="stylesheet"/>
        <title>
            {{ config('app.medium_name') }}
        </title>

        <link href="//www.alerj.rj.gov.br/favicon.ico" rel="shortcut icon" type="image/x-icon" />

        <meta name="viewport" content="width=device-width" />
        <script src="//www.alerj.rj.gov.br/bundles/modernizr?v=qVODBytEBVVePTNtSFXgRX0NCEjh9U_Oj8ePaSiRcGg1"></script>
        <script src="//www.alerj.rj.gov.br/bundles/jquery?v="></script>
    </head>

    <body class="background_color_ffffff">
        <div class="body-contents">
            @yield('body')
        </div>

        <script type="text/javascript">
            var rootUrl = "//www.alerj.rj.gov.br/";
        </script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/menu.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/cycle.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.placeholder.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.mousewheel.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.jscrollpane.min.js"></script>
        <!-- <script type="text/javascript" src=""></script> -->
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Content/javascript/javascript.js"></script>
        <script type="text/javascript">

            var rootUrl = "//www.alerj.rj.gov.br/";
            var tempoBanner =
                jQuery(function ($) {
                    $(document).ajaxStart(function () {
                        $("#popupCarregando").show();
                    });
                    $(document).ajaxStop(function () {
                        $("#popupCarregando").fadeOut();
                    });
                });
            $(document).ready(function () {
                $.ajaxSetup({cache: false}); //resolver problema com IE e cache quando são feitas chamadas via Json
                $(function () {
                    $('input').placeholder();
                });
            });
        </script>

        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/Visualizar/listarPerfilDeputado.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/Visualizar/visualizar.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.mousewheel.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.jscrollpane.min.js"></script>
        <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jgrid.js"></script>
        <!-- InputMask -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js"></script>

        <script>
            jQuery(function ($) {
                console.log($("#cpf"));
                $("#cpf").mask("999.999.999-99");
            });
        </script>

        <script>
            $(function () {
                $('[data-toggle="tooltip"]').tooltip()
            })
        </script>

        <script>
            function DropDown(el) {
                this.dd = el;
                this.placeholder = this.dd.children('span');
                this.opts = this.dd.find('.dropdown a');
                this.val = '';
                this.index = -1;
                this.initEvents();
            }

            DropDown.prototype = {
                initEvents: function () {
                    var obj = this;

                    obj.dd.on('click', function (event) {
                        $(this).toggleClass('active');
                        return false;
                    });

                    obj.opts.on('click', function () {
                        var opt = $(this);
                        obj.val = opt.text();
                        obj.index = opt.index();
                        obj.placeholder.text(obj.val);
                    });
                },
                getValue: function () {
                    return this.val;
                },
                getIndex: function () {
                    return this.index;
                }
            }

            $(function () {
                var dd = new DropDown($('#dd'));
            });
        </script>

        @include('layouts.partials.google-analytics')
    </body>
</html>
