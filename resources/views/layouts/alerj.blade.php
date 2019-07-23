
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


    {{--<link rel="stylesheet" type="text/css" href="/www.alerj.rj.gov.br/estilos.css" />--}}

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


    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.validate.js"></script>
    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.validate.unobtrusive.js"></script>
    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-ui-1.10.4.custom.js"></script>
    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery-ui-1.10.4.custom.min.js"></script>
    <script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.cookie.js"></script>
    {{--<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/acessibilidade.js"></script>--}}
    <link href="//www.alerj.rj.gov.br/BotDetectCaptcha.ashx?get=layoutStyleSheet" rel="stylesheet"/>
    <title>

        Assembléia Legislativa do Estado do Rio de Janeiro

    </title>
    <link href="//www.alerj.rj.gov.br/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width" />
    {{--<link href="//www.alerj.rj.gov.br/Content/css?v=" rel="stylesheet"/>--}}
    <script src="//www.alerj.rj.gov.br/bundles/modernizr?v=qVODBytEBVVePTNtSFXgRX0NCEjh9U_Oj8ePaSiRcGg1"></script>
    <script src="//www.alerj.rj.gov.br/bundles/jquery?v="></script>
</head>
<body class="background_color_ffffff">
<div id="popupCarregando" class="carregando" style="display: none">
    <div class="aguarde">AGUARDE...</div>
    <div class="loader">
        <img src="//www.alerj.rj.gov.br/Content/imagens/loading.gif" width="32" height="32">
    </div>
</div>
<input type="hidden" name="tempoBanner" id="tempoBanner" />
<input type="hidden" name="tempoNoticia" id="tempoNoticia" />

{{--<nav class=" ">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="http://www.alerj.rj.gov.br/">

                <img src="http://www.alerj.rj.gov.br/Content/imagens/logotipo.png" class="sem_altocontraste" width="210" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                <img src="http://www.alerj.rj.gov.br/Content/imagens/logotipo_altocontraste.png" width="210" class="altocontraste" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">

            </a>
        </div>


        <div class="navbar-right redes_sociais">
            <div class="logotipo_redes">
                <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram"></a>
            </div>

            <div class="logotipo_redes">
                <a target="_blank"  href="https://www.facebook.com/assembleiaRJ" title="Facebook">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook"></a>
            </div>

            <div class="logotipo_redes">
                <a target="_blank"  href="https://twitter.com/alerj" title="Twitter">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter"></a>
            </div>

            <div class="logotipo_redes">
                <a target="_blank"  href="https://www.youtube.com/user/dcsalerj" title="Youtube">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube"></a>
            </div>

        </div>



    </div>
</nav>--}}




<div class="superior">
    <div class="container">
        <div class="row header-alerj">
            <div class="col-sm-6 col-md-3">
                <a class="" href="http://www.alerj.rj.gov.br/">
                   <img src="http://www.alerj.rj.gov.br/Content/imagens/logotipo.png" class="img-responsive" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                </a>
            </div>




            <div class="col-sm-4 col-md-2 pull-right redes_sociais">

                <span class="logotipo_redes">
                    <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram">
                        <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram">
                    </a>
                </span>

                <span class="logotipo_redes">
                    <a target="_blank"  href="https://www.facebook.com/assembleiaRJ" title="Facebook">
                        <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook">
                    </a>
                </span>


                <span class="logotipo_redes">
                    <a target="_blank"  href="https://twitter.com/alerj" title="Twitter">
                        <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter">
                    </a>
                </span>

                <span class="logotipo_redes">
                    <a target="_blank"  href="https://www.youtube.com/user/dcsalerj" title="Youtube">
                        <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube">
                    </a>
                </span>


            </div>


        </div>
    </div>




{{--

    <div class="brilho ">
        <div class="conteudo">
            <div class="logotipo">
                <a href="//www.alerj.rj.gov.br/">
                    <img src="//www.alerj.rj.gov.br/Content/imagens/logotipo.png" class="sem_altocontraste" width="210" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                    <img src="//www.alerj.rj.gov.br/Content/imagens/logotipo_altocontraste.png" width="210" class="altocontraste" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                </a>
            </div>

            <div class="coluna pull-right">

                <div class="redes_sociais">

                    <div class="logotipo_redes">
                        <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram"></a>
                    </div>

                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://www.facebook.com/assembleiaRJ" title="Facebook">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook"></a>
                    </div>
                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://plus.google.com/u/0/+alerj/posts" title="Google Mais">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_07.png" width="20" height="20" alt="Google Mais" title="Google Mais"></a>
                    </div>
                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://twitter.com/alerj" title="Twitter">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter"></a>
                    </div>

                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://www.youtube.com/user/dcsalerj" title="Youtube">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube"></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
    --}}

</div>



{{--


<div class="superior">
    <div class="brilho ">
        <div class="conteudo">
            <div class="logotipo">
                <a href="http://www.alerj.rj.gov.br/">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/logotipo.png" class="sem_altocontraste" width="210" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                    <img src="http://www.alerj.rj.gov.br/Content/imagens/logotipo_altocontraste.png" width="210" class="altocontraste" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                </a>
            </div>

            <div class="coluna pull-right">

                <div class="redes_sociais">

                    <div class="logotipo_redes">
                        <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram"></a>
                    </div>

                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://www.facebook.com/assembleiaRJ" title="Facebook">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook"></a>
                    </div>

                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://twitter.com/alerj" title="Twitter">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter"></a>
                    </div>

                    <div class="logotipo_redes">
                        <a target="_blank"  href="https://www.youtube.com/user/dcsalerj" title="Youtube">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube"></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
--}}





<div class="base_menu">
    <a href="javascript:;" class="quadrado"></a>
    <div class="menu_movel">
        <div class="controle">
            <div class="menu_select">
                <div class="descricao">INÍCIO</div>
                <div class="icone Expandir">
                    <a href="javascript:;" title="Expandir Menu">
                        <img src="//www.alerj.rj.gov.br/Content/imagens/icone_21.png" width="40" height="34" alt="Expandir Menu" title="Expandir Menu" border="0"></a>
                </div>
                <div class="icone Recuar">
                    <a href="javascript:;" title="Recolher Menu">
                        <img src="//www.alerj.rj.gov.br/Content/imagens/icone_22.png" width="40" height="34" alt="Recolher Menu" title="Recolher Menu" border="0"></a>
                </div>
            </div>
            <div class="posicao_menu_movel">
                <div class="fundo_submovel">
                    <ul>
                        <li><a href="/" id="lkbInicioMovel">Início</a></li>

                        <li class="pai">
                            <a target='' href="javascript:;" class="titulo" title="ALERJ">Alerj <span class="caret"></span></a>

                            <div class='submenu_movel'>
                                <ul>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/ComoFunciona' title='Como Funciona'>Como Funciona</a>
                                    </li>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/MesaDiretora' title='Mesa Diretora'>Mesa Diretora</a>
                                    </li>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/Historia' title='História'>História</a>
                                    </li>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/VisitaGuiada' title='Visita Guiada'>Visita Guiada</a>
                                    </li>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/TourVirtual' title='Tour Virtual'>Tour Virtual</a>
                                    </li>
                                    <li>
                                        <a target='' href='//www.alerj.rj.gov.br/Alerj/Biblioteca' title='Biblioteca'>Biblioteca</a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li><a href="{{ route('about') }}" target="" href="javascript:;" class="titulo">Como Funciona?</a></li>

                        <li class="pai">
                            <a target='' href="javascript:;" class="titulo" title="Ideia Legislativa">Ideia Legislativa <span class="caret"></span></a>

                            <div class='submenu_movel'>
                                <ul>
                                    @if (Auth::guest())
                                        <li><a target='' href="{{ route('proposal.create') }}">Proponha uma ideia legislativa logando ou registrando-se aqui</a></li>
                                        {{--url('/login') }}">Proponha uma ideia legislativa<br>logando/registrando-se aqui</a></li>--}}
                                        <li role="separator" class="divider"></li>
                                        <li><a href="{{ route('terms') }}">Termos de Uso</a></li>
                                        {{--<li class="dropdown-header">ALERJ</li>--}}
                                    @elseif (Auth::user()->is_admin)
                                        {{--@elseif (Auth::user()->role_id === 0 or Auth::user()->role_id === 1)--}}
                                        {{--<a target='' href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a>--}}
                                        <li><a target='' href="{{ route('proposal.create') }}" title='Incluir Nova Proposta'>Incluir Nova Proposta</a></li>
                                        <li><a target='' href="{{ route('users.proposals', Auth::user()->id) }}" title='Listar Minhas Propostas'>Listar Minhas Propostas</a></li>
                                        <li><a target='' href="{{ route('home') }}" title='Listar Todas Propostas'>Listar Todas Propostas</a></li>
                                        {{--<a href="{{ route('users.responses', Auth::user()->id) }}">Listar Minhas Respostas</a>--}}
                                        {{--<a href="{{ route('proposals.notresponded') }}">Sem Resposta</a>--}}
                                    @else
                                        <li><a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a></li>
                                        <li><a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas Propostas</a></li>
                                        <li><a href="{{ route('home') }}">Listar Todas Propostas</a></li>
                                    @endif
                                </ul>
                            </div>
                        </li>

                        {{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="ATIVIDADE PARLAMENTAR">ATIVIDADE PARLAMENTAR</a>--}}
                            {{--<div class='submenu_movel'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Plenário'>Plenário</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=57' title='Discursos e Votações'>Discursos e Votações</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=59' title='Ordem do Dia'>Ordem do Dia</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Comissões'>Comissões</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=60' title='O Que São'>O Que São</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=61' title='Comissões Permanentes'>Comissões Permanentes</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=62' title='CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)'>CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=63' title='Comissões Especiais'>Comissões Especiais</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=64' title='Comissões de Representação'>Comissões de Representação</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/Diario-of.htm' title='Diário Oficial'>Diário Oficial</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=1' title='Processo Legislativo'>Processo Legislativo</a></li></ul></div>--}}
                        {{--</li>--}}

                        <li><a href="/contact" class="titulo " title="Contato">Contato</a></li>

                        {{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="COMUNICA&#199;&#195;O">COMUNICA&#199;&#195;O</a>--}}
                            {{--<div class='submenu_movel'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Sala de Imprensa'>Sala de Imprensa</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Comunicacao/SalaDeImprensa/Noticias' title='Notícias'>Notícias</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Imagens' title='Imagens'>Imagens</a></li><li><a  target='' href='https://www.youtube.com/user/AlerjTV' title='TV ALERJ'>TV ALERJ</a></li><li><a  target='' href='//www.radioalerj.com.br' title='Rádio ALERJ'>Rádio ALERJ</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Jornalistas' title='Cadastro de Jornalista'>Cadastro de Jornalista</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Publicações'>Publicações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Listar/IndexDocumentoEletronico?tipo=DI' title='CAPAS D. O.'>CAPAS D. O.</a></li><li><a  target='' href='/Comunicacao/Publicacoes/Jornal' title='Jornal da ALERJ'>Jornal da ALERJ</a></li></ul></ul></div>--}}
                        {{--</li>--}}

                    <!-- Authentication Links -->

                        @if (Auth::guest())
                            <li>
                                <a href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login | Registro</a></li>
                            {{--<li><a href="{{ url('/register') }}">Registro</a></li>--}}
                        @else
                            <li class="pai">
                                <a target='' href="javascript:;" class="titulo" title="Usuário">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class='submenu_movel'>
                                    <ul>
                                        @if (Auth::user()->is_admin)
                                            <li><a href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a></li>
                                        @endif
                                        <li class='filho_pai'><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Sair</a></li>
                                    </ul>
                                </div>
                            </li>
                        @endif


                        {{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="CONTATO">CONTATO</a>--}}

                        {{--<div class='submenu_movel'><ul><li><a target='_blank' href='https://www.aloalerj.rj.gov.br/contact' title='Alô Alerj'>Alô Alerj</a></li><li><a target='' href='/Contatos/Enquetes' title='Enquetes'>Enquetes</a></li><li><a target='' href='/Contatos/Disques' title='Disques'>Disques</a></li></ul></div>--}}
                        {{--</li>--}}


                        {{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="TRANSPAR&#202;NCIA">TRANSPAR&#202;NCIA</a>--}}
                            {{--<div class='submenu_movel'><ul><li><a target='' href='//www.alerj.rj.gov.br/Transparencia/PerguntasFrequentes' title='Perguntas Frequentes'>Perguntas Frequentes</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=L' title='Consulta de Preços'>Consulta de Preços</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/cadimalerj/default2.asp' title='Empresas Sancionadas'>Empresas Sancionadas</a></li><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Licitações'>Licitações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=C' title='Convites'>Convites</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=T' title='Tomada de Preços'>Tomada de Preços</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=P' title='Concorrências'>Concorrências</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=R' title='Pregão'>Pregão</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=I' title='Leilão'>Leilão</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/leideacesso/default.html' title='Lei de Acesso à Informação'>Lei de Acesso à Informação</a></li></ul></div>--}}
                        {{--</li>--}}
                    </ul>
                </div>
                <div class="detalhe"></div>
            </div>
        </div>
    </div>

    <div class="menu">
        <ul>
            <li><a class="ativo" href="/" id="lkbInicio">IN&#205;CIO</a></li>

            <li class="pai">
                <a href="/about" target="" href="javascript:;" class="titulo">Como Funciona?</a>
            </li>
            {{--<li class="pai">--}}
                {{--<a target="" href="javascript:;" class="titulo " title="ALERJ">ALERJ</a>--}}
                {{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Alerj/ComoFunciona' title='Como Funciona'>Como Funciona</a></li><li><a target='' href='/Alerj/MesaDiretora' title='Mesa Diretora'>Mesa Diretora</a></li><li><a target='' href='/Alerj/Historia' title='História'>História</a></li><li><a target='' href='/Alerj/VisitaGuiada' title='Visita Guiada'>Visita Guiada</a></li><li><a target='' href='/Alerj/TourVirtual' title='Tour Virtual'>Tour Virtual</a></li><li><a target='' href='/Alerj/Biblioteca' title='Biblioteca'>Biblioteca</a></li></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}

            <li class="pai">
                <a href="#" href="javascript:;" class="titulo" title="Ideia Legislativa">Ideia Legislativa <span class="caret"></span></a>

                <div class='submenu'>
                    <ul>
                    @if (Auth::guest())
                        <li><div><a href="{{ route('proposal.create') }}">Proponha uma ideia legislativa logando ou registrando-se aqui</a></div></li>
                        {{--url('/login') }}">Proponha uma ideia legislativa<br>logando/registrando-se aqui</a></li>--}}
                        <li role="separator" class="divider"></li>
                        <li><div><a href="{{ route('terms') }}">Termos de Uso</a></div></li>
                        {{--<li class="dropdown-header">ALERJ</li>--}}
                    @elseif (Auth::user()->is_admin)
                        {{--@elseif (Auth::user()->role_id === 0 or Auth::user()->role_id === 1)--}}
                        <a dusk="ProposalsGoToAdminPanel" href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a>
                        <a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a>
                        <a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas Propostas</a>
                        <a href="{{ route('home') }}">Listar Todas Propostas</a>
                        {{--<a href="{{ route('users.responses', Auth::user()->id) }}">Listar Minhas Respostas</a>--}}
                        {{--<a href="{{ route('proposals.notresponded') }}">Sem Resposta</a>--}}
                    @else
                        <a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a>
                        <a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas Propostas</a>
                        <a href="{{ route('home') }}">Listar Todas Propostas</a>
                    @endif
                    </ul>
                </div>
            </li>

            {{--<li class="pai">--}}
                {{--<a target="" href="javascript:;" class="titulo " title="DEPUTADOS">DEPUTADOS</a>--}}
                {{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Deputados/QuemSao' title='Quem São'>Quem São</a></li><li><a target='' href='/Deputados/RepresentacaoPartidaria' title='Representação Partidária'>Representação Partidária</a></li><li><a target='' href='/Deputados/LinhaDireta' title='Linha Direta'>Linha Direta</a></li></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}

        <!-- relationship commissions -->
            <li class="pai"><a href="/committee" class="titulo " title="Comissões">Nossas comissões</a></li>
            <li class="pai"><a dusk="TermsOfServiceBar" href="/terms" class="titulo " title="Comissões">Termos de uso</a></li>
            <li class="pai"><a href="/contact" class="titulo " title="Contato">Contato</a></li>
            {{--<li class="pai">--}}
                {{--<a target="" href="javascript:;" class="titulo " title="ATIVIDADE PARLAMENTAR">ATIVIDADE PARLAMENTAR</a>--}}
                {{--<div class='submenu'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Plenário'>Plenário</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=57' title='Discursos e Votações'>Discursos e Votações</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=59' title='Ordem do Dia'>Ordem do Dia</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Comissões'>Comissões</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=60' title='O Que São'>O Que São</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=61' title='Comissões Permanentes'>Comissões Permanentes</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=62' title='CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)'>CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=63' title='Comissões Especiais'>Comissões Especiais</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=64' title='Comissões de Representação'>Comissões de Representação</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/Diario-of.htm' title='Diário Oficial'>Diário Oficial</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=1' title='Processo Legislativo'>Processo Legislativo</a></li></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}

        <!-- Authentication Links -->

            @if (Auth::guest())
                <li class="pai">
                    <a dusk="loginOrRegister" href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login | Registro</a></li>
                {{--<li><a href="{{ url('/register') }}">Registro</a></li>--}}
            @else
                <li class="pai">
                    <a dusk="loginName" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <div class='submenu'>
                        <ul>
                            @if (Auth::user()->is_admin)
                                <a dusk="loginGoToAdminPanel" href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a>
                            @endif
                            <li class='filho_pai'><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Sair</a></li>
                        </ul>
                    </div>
                </li>
            @endif

            {{--<li class="pai">--}}
                {{--<a target="" href="javascript:;" class="titulo " title="COMUNICA&#199;&#195;O">COMUNICA&#199;&#195;O</a>--}}
                {{--<div class='submenu'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Sala de Imprensa'>Sala de Imprensa</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Comunicacao/SalaDeImprensa/Noticias' title='Notícias'>Notícias</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Imagens' title='Imagens'>Imagens</a></li><li><a  target='' href='https://www.youtube.com/user/AlerjTV' title='TV ALERJ'>TV ALERJ</a></li><li><a  target='' href='//www.radioalerj.com.br' title='Rádio ALERJ'>Rádio ALERJ</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Jornalistas' title='Cadastro de Jornalista'>Cadastro de Jornalista</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Publicações'>Publicações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Listar/IndexDocumentoEletronico?tipo=DI' title='CAPAS D. O.'>CAPAS D. O.</a></li><li><a  target='' href='/Comunicacao/Publicacoes/Jornal' title='Jornal da ALERJ'>Jornal da ALERJ</a></li></ul></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}


            {{--<li class="pai">--}}
            {{--<a target="" href="javascript:;" class="titulo " title="CONTATO">CONTATO</a>--}}
            {{--<div class='submenu'><ul><li><a target='_blank' href='https://www.aloalerj.rj.gov.br/contact' title='Alô Alerj'>Alô Alerj</a></li><li><a target='' href='/Contatos/Enquetes' title='Enquetes'>Enquetes</a></li><li><a target='' href='/Contatos/Disques' title='Disques'>Disques</a></li></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}


            {{--<li class="pai">--}}
                {{--<a target="" href="javascript:;" class="titulo " title="TRANSPAR&#202;NCIA">TRANSPAR&#202;NCIA</a>--}}
                {{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Transparencia/PerguntasFrequentes' title='Perguntas Frequentes'>Perguntas Frequentes</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=L' title='Consulta de Preços'>Consulta de Preços</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/cadimalerj/default2.asp' title='Empresas Sancionadas'>Empresas Sancionadas</a></li><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Licitações'>Licitações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=C' title='Convites'>Convites</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=T' title='Tomada de Preços'>Tomada de Preços</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=P' title='Concorrências'>Concorrências</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=R' title='Pregão'>Pregão</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=I' title='Leilão'>Leilão</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/leideacesso/default.html' title='Lei de Acesso à Informação'>Lei de Acesso à Informação</a></li></ul><div class='detalhe'></div></div>--}}
            {{--</li>--}}


        </ul>

    </div>
</div>


<section class="content-wrapper main-content clear-fix">

    <div class="interna">
        <div class="controle">
            <div class="alerj">

                <div class="row">
                    <div class="col-sm-4 col-xs-12 over">
                        <div class="legislaqui text-center"><a href="/"><span class="letra_branca">#</span><span class="letra_azul">Legisl</span><span class="letra_branca">aqui</span></a>
                            <div class="moto letra_azul"><b>Você legislando na ALERJ</b></div>
                        </div>
                    </div>
                    <div class="col-sm-8 col-xs-12 pull-right">
                        @include('partials.header')
                    </div>
                    <div class="filter-line hidden-xs hidden-sm">&nbsp;</div>
                </div>
                {{--<div class="content">--}}



                <div>
                   @yield('content')




                        <div class="col-list">
                            <div class="col-md-4 t1">

                                <a href="#" class="links">
                                <div class="col-head text-center">
                                    <span class="glyphicon " aria-hidden="true"><img class="image-icon" src="/imagens/icon-idea.png"></span>
                                    <h2>Idéias Legislativas</h2>
                                    <p>
                                    Você pode sugerir e dar seu apoio a ideias legislativas que podem virar novas leis estaduais, alterar leis já existentes ou mudar a Constituição Estadual.
                                    </p>
                                </div>
                                </a>

                            </div>
                            <div class="col-md-4 t2">
                                <a href="#" class="links">
                                <div class="col-head text-center">
                                    <span class="glyphicon " aria-hidden="true"><img class="image-icon" src="/imagens/icon-monitoring.png"></span>
                                    <h2> Acompanhamento das Audiências das Comissões</h2>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in lacus eu ante rhoncus tempus vitae nec leo. Etiam a tempus elit. Donec lorem nibh, pulvinar id condimentum id, luctus quis leo.
                                    </p>
                                </div>
                                </a>

                            </div>
                            <div class="col-md-4 t3">
                                <a href="#" class="links">
                                    <div class="col-head text-center">
                                        <span class="glyphicon " aria-hidden="true"><img class="image-icon" src="/imagens/logo-wikilegis.png"></span>
                                        <h2>Wikilegis</h2>
                                        <p>
                                            Analise os projetos de lei e contribua com sugestões de nova redação a artigos ou parágrafos. Os deputados relatores das proposições acompanham as participações e podem adotar a sua ideia!
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>




                </div>



                {{--@include('partials.footer')--}}
                @include('partials.scripts')
            </div>
        </div>
    </div>

</section>


<div class="inferior interna ">

    <div class="container">

        <div class="row">
            <div class="col-xs-12">
                <div class="controle_botao">
                    <a href="javascript:;" class="scrolltop">TOPO</a>
                </div>
            </div>
        </div>


        <div class="row rodape">
            <div class="col-sm-3 col-md-offset-1 col-md-2">
                <div class="logotipo">
                    <a href="/" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                        <img src="/imagens/logotipo_inferior.png" class="img-responsive" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                    </a>
                </div>

            </div>

            <div class="col-sm-9 col-md-6">

                <div class="informacoes">
                    <p class="titulo">PALÁCIO TIRADENTES</p>
                    <p>Rua Primeiro de março, s/n - Praça XV - Rio de Janeiro<br /><span>CEP</span> 20010-090 &nbsp;&nbsp; <span>Telefone</span> +55 (21) 2588-1000 &nbsp;&nbsp; <span>Fax</span> +55 (21) 2588-1516</p>
                </div>

            </div>

            <div class="col-sm-12 col-md-2">
                <div class="redes_sociais">

                    <span class="logotipo_redes">
                        <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram"><img src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram">
                        </a>
                    </span>
                    <span class="logotipo_redes">
                        <a target="_blank" href="https://www.facebook.com/assembleiaRJ" title="Facebook"><img src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook">
                        </a>
                    </span>
                    <span class="logotipo_redes">
                        <a target="_blank" href="https://twitter.com/alerj" title="Twitter"><img src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter">
                        </a>
                    </span>
                    <span class="logotipo_redes">
                        <a target="_blank" href="https://www.youtube.com/user/dcsalerj" title="Youtube"><img src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube">
                        </a>
                    </span>
                </div>
            </div>
        </div>

    </div>

</div>





{{--

<div class="inferior interna ">
    <div class="controle_botao">
        <a href="javascript:;" class="scrolltop">TOPO</a>
    </div>

    <div class="controle">
        <div class="logotipo"><a href="/" title="Assembléia Legislativa do Estado do Rio de Janeiro"><img src="//www.alerj.rj.gov.br/Content/imagens/logotipo_inferior.png" width="145" alt="Assembléia Legislativa do Estado do Rio de Janeiro" title="Assembléia Legislativa do Estado do Rio de Janeiro"></a></div>
        <div class="informacoes">
            <p class="titulo">PALÁCIO TIRADENTES</p>
            <p>Rua Primeiro de março, s/n - Praça XV - Rio de Janeiro<br /><span>CEP</span> 20010-090 &nbsp;&nbsp; <span>Telefone</span> +55 (21) 2588-1000 &nbsp;&nbsp; <span>Fax</span> +55 (21) 2588-1516</p>
        </div>
        <div class="redes_sociais">
            <div class="logotipo_redes"><a target="_blank" href="https://instagram.com/instalerj/" title="Instagram"><img src="//www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20" alt="Instagram" title="Instagram"></a></div>
            <div class="logotipo_redes"><a target="_blank" href="https://www.facebook.com/assembleiaRJ" title="Facebook"><img src="//www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20" alt="Facebook" title="Facebook"></a></div>
            <div class="logotipo_redes"><a target="_blank" href="https://plus.google.com/u/0/+alerj/posts"><img src="//www.alerj.rj.gov.br/Content/imagens/icone_07.png" width="20" height="20" alt="Google Mais" title="Google Mais"></a></div>
            <div class="logotipo_redes"><a target="_blank" href="https://twitter.com/alerj" title="Twitter"><img src="//www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20" alt="Twitter" title="Twitter"></a></div>
            <div class="logotipo_redes"><a target="_blank" href="https://www.youtube.com/user/dcsalerj" title="Youtube"><img src="//www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20" alt="Youtube" title="Youtube"></a></div>
        </div>
    </div>
</div>

--}}


<!-- jQuery 3.0.0 -->
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.js"></script>--}}

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
        $.ajaxSetup({ cache: false }); //resolver problema com IE e cache quando são feitas chamadas via Json



//        RequisicaoAjax(rootUrl + "Home/RecuperaConfiguracoesExibicao", "", function (response) {
//            $("#tempoNoticia").val(response.tempoNoticia * 1000);
//            $("#tempoBanner").val(response.tempoBanner * 1000);
//
//            $('.banner ul').cycle({
//                fx: 'scrollLeft',
//                speed: 500,
//                timeout: $("#tempoBanner").val(),
//                pager: '.paginacao_banner'
//            })
//        }, function (error) {
//
//        });

        $(function () {
            $('input').placeholder();
        });

//        //script partial _superior
//        $("#btnPesquisar").click(function () {
//            window.location.href = rootUrl + "ResultadoPesquisa/PesquisarSite/?termoPesquisa=" + $("#txtPesquisar").val();
//        });
//        //fim script partial _superior


    });

    //    function RequisicaoAjax(urlMetodo, parametros, funcSucesso, funcErro, isAsync) {
    //
    //        $.ajax({
    //            url: urlMetodo,
    //            data: parametros,
    //            type: 'post',
    //            async: isAsync ? isAsync : false,
    //            dataType: 'json',
    //            success: function (data) {
    //                funcSucesso(data);
    //            },
    //            error: (funcErro) ? function (data) { funcErro(data); } : null
    //        });
    //
    //    }
</script>

<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/Visualizar/listarPerfilDeputado.js"></script>
<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/Visualizar/visualizar.js"></script>
<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.mousewheel.js"></script>
<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.jscrollpane.min.js"></script>
<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jgrid.js"></script>
<!-- InputMask -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.js"></script>
{{--<script type="text/javascript" src="//www.alerj.rj.gov.br/Scripts/jquery.meio.mask.js"></script>--}}

<script>
    jQuery(function($){
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
        initEvents : function() {
            var obj = this;

            obj.dd.on('click', function(event){
                $(this).toggleClass('active');
                return false;
            });

            obj.opts.on('click',function(){
                var opt = $(this);
                obj.val = opt.text();
                obj.index = opt.index();
                obj.placeholder.text(obj.val);
            });
        },
        getValue : function() {
            return this.val;
        },
        getIndex : function() {
            return this.index;
        }
    }

    $(function() {

        var dd = new DropDown( $('#dd') );



    });
</script>


</body>
</html>
