@extends('layouts.html')

@section('body')
    <div id="popupCarregando" class="carregando" style="display: none">
        <div class="aguarde">AGUARDE...</div>
        <div class="loader">
            <img src="//www.alerj.rj.gov.br/Content/imagens/loading.gif" width="32" height="32">
        </div>
    </div>
    <input type="hidden" name="tempoBanner" id="tempoBanner"/>
    <input type="hidden" name="tempoNoticia" id="tempoNoticia"/>

    <div class="superior">
        <div class="container">
            <div class="row header-alerj">

                <div class="col-sm-6 col-md-3">
                    <a href="/" class="legislaqui_marca text-center">
                        <img src="/imagens/marca_legislaqui.png" class="img-responsive">
                    </a>
                </div>

                <div class="col-sm-4 col-md-2 pull-right redes_sociais hidden-xs">
                    <span class="logotipo_redes">
                        <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20"
                                 alt="Instagram" title="Instagram">
                        </a>
                    </span>

                    <span class="logotipo_redes">
                        <a target="_blank" href="https://www.facebook.com/assembleiaRJ" title="Facebook">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20"
                                 alt="Facebook" title="Facebook">
                        </a>
                    </span>


                    <span class="logotipo_redes">
                        <a target="_blank" href="https://twitter.com/alerj" title="Twitter">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20"
                                 alt="Twitter" title="Twitter">
                        </a>
                    </span>

                    <span class="logotipo_redes">
                        <a target="_blank" href="https://www.youtube.com/user/dcsalerj" title="Youtube">
                            <img src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20"
                                 alt="Youtube" title="Youtube">
                        </a>
                    </span>

                    @if(Auth::user())
                        <li>
                            <a target='' href="javascript:;" class="titulo" title="Usuário">
                                Olá {{ Auth::user()->name }}{{-- <span class="caret"></span>--}}
                            </a>
                        </li>
                        <li >
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                Sair
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                    @endif
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>


            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">

                    <li class="active"><a href="/">Início</a></li>
                    <li><a href="/about">Como Funciona</a></li>



                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Ideia Legislativa<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            @if (Auth::guest())
                                <li><a target='' href="{{ route('proposal.create') }}">Proponha uma ideia
                                        legislativa logando ou registrando-se aqui</a></li>
                                {{--url('/login') }}">Proponha uma ideia legislativa<br>logando/registrando-se aqui</a></li>--}}
                                <li role="separator" class="divider"></li>
                                <li><a href="{{ route('terms') }}">Termos de Uso</a></li>
                                {{--<li class="dropdown-header">ALERJ</li>--}}
                            @elseif (Auth::user()->is_admin)
                                {{--@elseif (Auth::user()->role_id === 0 or Auth::user()->role_id === 1)--}}
                                {{--<a target='' href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a>--}}
                                <li><a target='' href="{{ route('proposal.create') }}"
                                       title='Incluir Nova Proposta'>Incluir Nova Proposta</a></li>
                                <li><a target='' href="{{ route('users.proposals', Auth::user()->id) }}"
                                       title='Listar Minhas Propostas'>Listar Minhas Propostas</a></li>
                                <li><a target='' href="{{ route('home') }}" title='Listar Todas Propostas'>Listar
                                        Todas Propostas</a></li>
                                {{--<a href="{{ route('users.responses', Auth::user()->id) }}">Listar Minhas Respostas</a>--}}
                                {{--<a href="{{ route('proposals.notresponded') }}">Sem Resposta</a>--}}
                            @else
                                <li><a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a></li>
                                <li><a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas
                                        Propostas</a></li>
                                <li><a href="{{ route('home') }}">Listar Todas Propostas</a></li>
                            @endif
                        </ul>
                    </li>

                    <li><a href="/committee">Nossas Comissões</a></li>
                    <li><a href="/terms">Termos de Uso</a></li>
                    <li><a href="/contact">Contato</a></li>

                </ul>
                <ul class="nav navbar-nav navbar-right">
                    @if (Auth::guest())
                        <li>
                            <a href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login | Registro</a>
                        </li>
                    @else
                        @if (Auth::user()->is_admin)
                            <li>
                                <a href="{{ route('admin') }}" target="_blank">Administrador</a>
                            </li>
                        @endif
                    @endif
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>

    @yield('contents')

    <div class="inferior interna ">
        <div class="container">


            <div class="row botao_topo">
                <div class="col-xs-12">
                    <div class="controle_botao">
                        <a href="javascript:;" class="scrolltop">TOPO</a>
                    </div>
                </div>
            </div>

            <div class="row rodape">
                <div class="col-sm-3 col-md-2 col-lg-offset-1 col-lg-2">
                    <div class="logotipo">
                        <a href="/" title="Assembléia Legislativa do Estado do Rio de Janeiro">
                            <img src="/imagens/logotipo_inferior.png" class="img-responsive"
                                 alt="Assembléia Legislativa do Estado do Rio de Janeiro"
                                 title="Assembléia Legislativa do Estado do Rio de Janeiro">
                        </a>
                    </div>

                </div>

                <div class="col-sm-8 col-md-6">

                    <div class="informacoes">
                        <p class="titulo">PALÁCIO TIRADENTES</p>
                        <p>Rua Primeiro de março, s/n - Praça XV - Rio de Janeiro<br/><span>CEP</span> 20010-090 &nbsp;&nbsp;
                            <span class="footer_phone">Telefone</span> +55 (21) 2588-1000 &nbsp;&nbsp;{{-- <span>Fax</span> +55 (21) 2588-1516--}}
                        </p>
                    </div>

                </div>

                <div class="col-sm-1 col-md-2 ">
                    <div class="redes_sociais">

                    <span class="logotipo_redes">
                        <a target="_blank" href="https://instagram.com/instalerj/" title="Instagram"><img
                                    src="http://www.alerj.rj.gov.br/Content/imagens/icone_36.png" width="20" height="20"
                                    alt="Instagram" title="Instagram">
                        </a>
                    </span>
                        <span class="logotipo_redes">
                        <a target="_blank" href="https://www.facebook.com/assembleiaRJ" title="Facebook"><img
                                    src="http://www.alerj.rj.gov.br/Content/imagens/icone_06.png" width="20" height="20"
                                    alt="Facebook" title="Facebook">
                        </a>
                    </span>
                        <span class="logotipo_redes">
                        <a target="_blank" href="https://twitter.com/alerj" title="Twitter"><img
                                    src="http://www.alerj.rj.gov.br/Content/imagens/icone_08.png" width="20" height="20"
                                    alt="Twitter" title="Twitter">
                        </a>
                    </span>
                        <span class="logotipo_redes">
                        <a target="_blank" href="https://www.youtube.com/user/dcsalerj" title="Youtube"><img
                                    src="http://www.alerj.rj.gov.br/Content/imagens/icone_09.png" width="20" height="20"
                                    alt="Youtube" title="Youtube">
                        </a>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
