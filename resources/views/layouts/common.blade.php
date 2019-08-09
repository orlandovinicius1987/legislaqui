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

                    <div class="legislaqui_marca text-center">
                        <img src="/imagens/marca_legislaqui.png" class="img-responsive">
                    </div>

{{--

                    <div class="legislaqui text-center"><a href="/"><span class="letra_branca">#</span>
                        <span class="letra_azul">Legisl</span><span class="letra_branca">aqui</span></a>
                        <div class="moto letra_azul"><b>Você legislando na ALERJ</b></div>
                    </div>
--}}



                </div>

                <div class="col-sm-4 col-md-2 pull-right redes_sociais">
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
                    {{--<li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>--}}
{{--
                    <li><a href="{{ url('/login') }}">Login | Registro</a></li>


--}}


                    @if (Auth::guest())
                        <li>
                            <a href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login |
                                Registro</a></li>
                        {{--<li><a href="{{ url('/register') }}">Registro</a></li>--}}
                    @else
                        <li class="pai">
                            <a target='' href="javascript:;" class="titulo" title="Usuário">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <div class='submenu_movel'>
                                <ul>
                                    @if (Auth::user()->is_admin)
                                        <li><a href="{{ route('admin') }}" target="_blank">Ir ao Painel de
                                                Admin</a></li>
                                    @endif
                                    <li class='filho_pai'><a href="{{ url('/logout') }}"><i
                                                    class="fa fa-btn fa-sign-out"></i>Sair</a></li>
                                </ul>
                            </div>
                        </li>
                    @endif



                    {{--<li><a href="../navbar-fixed-top/">Registro</a></li>--}}
                </ul>
            </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
    </nav>





{{--

    <div class="base_menu">
        <a href="javascript:;" class="quadrado"></a>
        <div class="menu_movel">
            <div class="controle">
                <div class="menu_select">


                    <div class="descricao">INÍCIO</div>
                    <div class="icone Expandir">
                        <a href="javascript:;" title="Expandir Menu">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_21.png" width="40" height="34"
                                 alt="Expandir Menu" title="Expandir Menu" border="0"></a>
                    </div>
                    <div class="icone Recuar">
                        <a href="javascript:;" title="Recolher Menu">
                            <img src="//www.alerj.rj.gov.br/Content/imagens/icone_22.png" width="40" height="34"
                                 alt="Recolher Menu" title="Recolher Menu" border="0"></a>
                    </div>
                </div>
                <div class="posicao_menu_movel">
                    <div class="fundo_submovel">
                        <ul>
                            <li><a href="/" id="lkbInicioMovel">Início</a></li>

                            <li class="pai">
                                <a target='' href="javascript:;" class="titulo" title="ALERJ">Alerj <span
                                            class="caret"></span></a>

                                <div class='submenu_movel'>
                                    <ul>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/ComoFunciona'
                                               title='Como Funciona'>Como Funciona</a>
                                        </li>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/MesaDiretora'
                                               title='Mesa Diretora'>Mesa Diretora</a>
                                        </li>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/Historia' title='História'>História</a>
                                        </li>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/VisitaGuiada'
                                               title='Visita Guiada'>Visita Guiada</a>
                                        </li>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/TourVirtual'
                                               title='Tour Virtual'>Tour Virtual</a>
                                        </li>
                                        <li>
                                            <a target='' href='//www.alerj.rj.gov.br/Alerj/Biblioteca'
                                               title='Biblioteca'>Biblioteca</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li><a href="{{ route('about') }}" target="" href="javascript:;" class="titulo">Como
                                    Funciona?</a></li>

                            <li class="pai">
                                <a target='' href="javascript:;" class="titulo" title="Ideia Legislativa">Ideia
                                    Legislativa <span class="caret"></span></a>

                                <div class='submenu_movel'>
                                    <ul>
                                        @if (Auth::guest())
                                            <li><a target='' href="{{ route('proposal.create') }}">Proponha uma ideia
                                                    legislativa logando ou registrando-se aqui</a></li>
                                            --}}
{{--url('/login') }}">Proponha uma ideia legislativa<br>logando/registrando-se aqui</a></li>--}}{{--

                                            <li role="separator" class="divider"></li>
                                            <li><a href="{{ route('terms') }}">Termos de Uso</a></li>
                                            --}}
{{--<li class="dropdown-header">ALERJ</li>--}}{{--

                                        @elseif (Auth::user()->is_admin)
                                            --}}
{{--@elseif (Auth::user()->role_id === 0 or Auth::user()->role_id === 1)--}}{{--

                                            --}}
{{--<a target='' href="{{ route('admin') }}" target="_blank">Ir ao Painel de Admin</a>--}}{{--

                                            <li><a target='' href="{{ route('proposal.create') }}"
                                                   title='Incluir Nova Proposta'>Incluir Nova Proposta</a></li>
                                            <li><a target='' href="{{ route('users.proposals', Auth::user()->id) }}"
                                                   title='Listar Minhas Propostas'>Listar Minhas Propostas</a></li>
                                            <li><a target='' href="{{ route('home') }}" title='Listar Todas Propostas'>Listar
                                                    Todas Propostas</a></li>
                                            --}}
{{--<a href="{{ route('users.responses', Auth::user()->id) }}">Listar Minhas Respostas</a>--}}{{--

                                            --}}
{{--<a href="{{ route('proposals.notresponded') }}">Sem Resposta</a>--}}{{--

                                        @else
                                            <li><a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a></li>
                                            <li><a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas
                                                    Propostas</a></li>
                                            <li><a href="{{ route('home') }}">Listar Todas Propostas</a></li>
                                        @endif
                                    </ul>
                                </div>
                            </li>

                            --}}
{{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="ATIVIDADE PARLAMENTAR">ATIVIDADE PARLAMENTAR</a>--}}{{--

                            --}}
{{--<div class='submenu_movel'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Plenário'>Plenário</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=57' title='Discursos e Votações'>Discursos e Votações</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=59' title='Ordem do Dia'>Ordem do Dia</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Comissões'>Comissões</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=60' title='O Que São'>O Que São</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=61' title='Comissões Permanentes'>Comissões Permanentes</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=62' title='CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)'>CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=63' title='Comissões Especiais'>Comissões Especiais</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=64' title='Comissões de Representação'>Comissões de Representação</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/Diario-of.htm' title='Diário Oficial'>Diário Oficial</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=1' title='Processo Legislativo'>Processo Legislativo</a></li></ul></div>--}}{{--

                            --}}
{{--</li>--}}{{--


                            <li><a href="/contact" class="titulo " title="Contato">Contato</a></li>

                            --}}
{{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="COMUNICA&#199;&#195;O">COMUNICA&#199;&#195;O</a>--}}{{--

                            --}}
{{--<div class='submenu_movel'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Sala de Imprensa'>Sala de Imprensa</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Comunicacao/SalaDeImprensa/Noticias' title='Notícias'>Notícias</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Imagens' title='Imagens'>Imagens</a></li><li><a  target='' href='https://www.youtube.com/user/AlerjTV' title='TV ALERJ'>TV ALERJ</a></li><li><a  target='' href='//www.radioalerj.com.br' title='Rádio ALERJ'>Rádio ALERJ</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Jornalistas' title='Cadastro de Jornalista'>Cadastro de Jornalista</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Publicações'>Publicações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Listar/IndexDocumentoEletronico?tipo=DI' title='CAPAS D. O.'>CAPAS D. O.</a></li><li><a  target='' href='/Comunicacao/Publicacoes/Jornal' title='Jornal da ALERJ'>Jornal da ALERJ</a></li></ul></ul></div>--}}{{--

                            --}}
{{--</li>--}}{{--


                        <!-- Authentication Links -->

                            @if (Auth::guest())
                                <li>
                                    <a href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login |
                                        Registro</a></li>
                                --}}
{{--<li><a href="{{ url('/register') }}">Registro</a></li>--}}{{--

                            @else
                                <li class="pai">
                                    <a target='' href="javascript:;" class="titulo" title="Usuário">
                                        {{ Auth::user()->name }} <span class="caret"></span>
                                    </a>

                                    <div class='submenu_movel'>
                                        <ul>
                                            @if (Auth::user()->is_admin)
                                                <li><a href="{{ route('admin') }}" target="_blank">Ir ao Painel de
                                                        Admin</a></li>
                                            @endif
                                            <li class='filho_pai'><a href="{{ url('/logout') }}"><i
                                                            class="fa fa-btn fa-sign-out"></i>Sair</a></li>
                                        </ul>
                                    </div>
                                </li>
                            @endif


                            --}}
{{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="CONTATO">CONTATO</a>--}}{{--


                            --}}
{{--<div class='submenu_movel'><ul><li><a target='_blank' href='https://www.aloalerj.rj.gov.br/contact' title='Alô Alerj'>Alô Alerj</a></li><li><a target='' href='/Contatos/Enquetes' title='Enquetes'>Enquetes</a></li><li><a target='' href='/Contatos/Disques' title='Disques'>Disques</a></li></ul></div>--}}{{--

                            --}}
{{--</li>--}}{{--



                            --}}
{{--<li class="pai"><a target="" href="javascript:;" class="titulo" title="TRANSPAR&#202;NCIA">TRANSPAR&#202;NCIA</a>--}}{{--

                            --}}
{{--<div class='submenu_movel'><ul><li><a target='' href='//www.alerj.rj.gov.br/Transparencia/PerguntasFrequentes' title='Perguntas Frequentes'>Perguntas Frequentes</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=L' title='Consulta de Preços'>Consulta de Preços</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/cadimalerj/default2.asp' title='Empresas Sancionadas'>Empresas Sancionadas</a></li><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Licitações'>Licitações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=C' title='Convites'>Convites</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=T' title='Tomada de Preços'>Tomada de Preços</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=P' title='Concorrências'>Concorrências</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=R' title='Pregão'>Pregão</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=I' title='Leilão'>Leilão</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/leideacesso/default.html' title='Lei de Acesso à Informação'>Lei de Acesso à Informação</a></li></ul></div>--}}{{--

                            --}}
{{--</li>--}}{{--

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
                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="ALERJ">ALERJ</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Alerj/ComoFunciona' title='Como Funciona'>Como Funciona</a></li><li><a target='' href='/Alerj/MesaDiretora' title='Mesa Diretora'>Mesa Diretora</a></li><li><a target='' href='/Alerj/Historia' title='História'>História</a></li><li><a target='' href='/Alerj/VisitaGuiada' title='Visita Guiada'>Visita Guiada</a></li><li><a target='' href='/Alerj/TourVirtual' title='Tour Virtual'>Tour Virtual</a></li><li><a target='' href='/Alerj/Biblioteca' title='Biblioteca'>Biblioteca</a></li></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--


                <li class="pai">
                    <a href="#" href="javascript:;" class="titulo" title="Ideia Legislativa">Ideia Legislativa <span
                                class="caret"></span></a>

                    <div class='submenu'>
                        <ul>
                            @if (Auth::guest())
                                <li>
                                    <div><a href="{{ route('proposal.create') }}">Proponha uma ideia legislativa logando
                                            ou registrando-se aqui</a></div>
                                </li>
                                --}}
{{--url('/login') }}">Proponha uma ideia legislativa<br>logando/registrando-se aqui</a></li>--}}{{--

                                <li role="separator" class="divider"></li>
                                <li>
                                    <div><a href="{{ route('terms') }}">Termos de Uso</a></div>
                                </li>
                                --}}
{{--<li class="dropdown-header">ALERJ</li>--}}{{--

                            @elseif (Auth::user()->is_admin)
                                --}}
{{--@elseif (Auth::user()->role_id === 0 or Auth::user()->role_id === 1)--}}{{--

                                <a dusk="ProposalsGoToAdminPanel" href="{{ route('admin') }}" target="_blank">Ir ao
                                    Painel de Admin</a>
                                <a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a>
                                <a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas Propostas</a>
                                <a href="{{ route('home') }}">Listar Todas Propostas</a>
                                --}}
{{--<a href="{{ route('users.responses', Auth::user()->id) }}">Listar Minhas Respostas</a>--}}{{--

                                --}}
{{--<a href="{{ route('proposals.notresponded') }}">Sem Resposta</a>--}}{{--

                            @else
                                <a href="{{ route('proposal.create') }}">Incluir Nova Proposta</a>
                                <a href="{{ route('users.proposals', Auth::user()->id) }}">Listar Minhas Propostas</a>
                                <a href="{{ route('home') }}">Listar Todas Propostas</a>
                            @endif
                        </ul>
                    </div>
                </li>

                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="DEPUTADOS">DEPUTADOS</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Deputados/QuemSao' title='Quem São'>Quem São</a></li><li><a target='' href='/Deputados/RepresentacaoPartidaria' title='Representação Partidária'>Representação Partidária</a></li><li><a target='' href='/Deputados/LinhaDireta' title='Linha Direta'>Linha Direta</a></li></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--


            <!-- relationship commissions -->
                <li class="pai"><a href="/committee" class="titulo " title="Comissões">Nossas comissões</a></li>
                <li class="pai"><a dusk="TermsOfServiceBar" href="/terms" class="titulo " title="Comissões">Termos de
                        uso</a></li>
                <li class="pai"><a href="/contact" class="titulo " title="Contato">Contato</a></li>
                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="ATIVIDADE PARLAMENTAR">ATIVIDADE PARLAMENTAR</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Plenário'>Plenário</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=57' title='Discursos e Votações'>Discursos e Votações</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=59' title='Ordem do Dia'>Ordem do Dia</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Comissões'>Comissões</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=60' title='O Que São'>O Que São</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=61' title='Comissões Permanentes'>Comissões Permanentes</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=62' title='CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)'>CPI (COMISSÃO PARLAMENTAR DE INQUÉRITO)</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=63' title='Comissões Especiais'>Comissões Especiais</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=64' title='Comissões de Representação'>Comissões de Representação</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/Diario-of.htm' title='Diário Oficial'>Diário Oficial</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/lotus_notes/default.asp?link=1' title='Processo Legislativo'>Processo Legislativo</a></li></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--


            <!-- Authentication Links -->

                @if (Auth::guest())
                    <li class="pai">
                        <a dusk="loginOrRegister" href="{{ url('/login') }}" class="titulo" title="Login | Registro">Login
                            | Registro</a></li>
                    --}}
{{--<li><a href="{{ url('/register') }}">Registro</a></li>--}}{{--

                @else
                    <li class="pai">
                        <a dusk="loginName" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>

                        <div class='submenu'>
                            <ul>
                                @if (Auth::user()->is_admin)
                                    <a dusk="loginGoToAdminPanel" href="{{ route('admin') }}" target="_blank">Ir ao
                                        Painel de Admin</a>
                                @endif
                                <li class='filho_pai'><a href="{{ url('/logout') }}"><i
                                                class="fa fa-btn fa-sign-out"></i>Sair</a></li>
                            </ul>
                        </div>
                    </li>
                @endif

                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="COMUNICA&#199;&#195;O">COMUNICA&#199;&#195;O</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Sala de Imprensa'>Sala de Imprensa</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Comunicacao/SalaDeImprensa/Noticias' title='Notícias'>Notícias</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Imagens' title='Imagens'>Imagens</a></li><li><a  target='' href='https://www.youtube.com/user/AlerjTV' title='TV ALERJ'>TV ALERJ</a></li><li><a  target='' href='//www.radioalerj.com.br' title='Rádio ALERJ'>Rádio ALERJ</a></li><li><a  target='' href='/Comunicacao/SalaDeImprensa/Jornalistas' title='Cadastro de Jornalista'>Cadastro de Jornalista</a></li></ul><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Publicações'>Publicações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='/Listar/IndexDocumentoEletronico?tipo=DI' title='CAPAS D. O.'>CAPAS D. O.</a></li><li><a  target='' href='/Comunicacao/Publicacoes/Jornal' title='Jornal da ALERJ'>Jornal da ALERJ</a></li></ul></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--



                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="CONTATO">CONTATO</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li><a target='_blank' href='https://www.aloalerj.rj.gov.br/contact' title='Alô Alerj'>Alô Alerj</a></li><li><a target='' href='/Contatos/Enquetes' title='Enquetes'>Enquetes</a></li><li><a target='' href='/Contatos/Disques' title='Disques'>Disques</a></li></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--



                --}}
{{--<li class="pai">--}}{{--

                --}}
{{--<a target="" href="javascript:;" class="titulo " title="TRANSPAR&#202;NCIA">TRANSPAR&#202;NCIA</a>--}}{{--

                --}}
{{--<div class='submenu'><ul><li><a target='' href='//www.alerj.rj.gov.br/Transparencia/PerguntasFrequentes' title='Perguntas Frequentes'>Perguntas Frequentes</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=L' title='Consulta de Preços'>Consulta de Preços</a></li><li><a target='_blank' href='//www2.alerj.rj.gov.br/cadimalerj/default2.asp' title='Empresas Sancionadas'>Empresas Sancionadas</a></li><li class='filho_pai'><a id='filhoPai' target='' href='#' title='Licitações'>Licitações</a><ul class='submenu_filho_pai comissoes' ><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=C' title='Convites'>Convites</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=T' title='Tomada de Preços'>Tomada de Preços</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=P' title='Concorrências'>Concorrências</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=R' title='Pregão'>Pregão</a></li><li><a  target='' href='//www2.alerj.rj.gov.br/licitacao/default2.asp?param=buscar&modalidade=I' title='Leilão'>Leilão</a></li></ul><li><a target='_blank' href='//www2.alerj.rj.gov.br/leideacesso/default.html' title='Lei de Acesso à Informação'>Lei de Acesso à Informação</a></li></ul><div class='detalhe'></div></div>--}}{{--

                --}}
{{--</li>--}}{{--



            </ul>

        </div>
    </div>
--}}

    @yield('contents')

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
                            <img src="/imagens/logotipo_inferior.png" class="img-responsive"
                                 alt="Assembléia Legislativa do Estado do Rio de Janeiro"
                                 title="Assembléia Legislativa do Estado do Rio de Janeiro">
                        </a>
                    </div>

                </div>

                <div class="col-sm-9 col-md-6">

                    <div class="informacoes">
                        <p class="titulo">PALÁCIO TIRADENTES</p>
                        <p>Rua Primeiro de março, s/n - Praça XV - Rio de Janeiro<br/><span>CEP</span> 20010-090 &nbsp;&nbsp;
                            <span>Telefone</span> +55 (21) 2588-1000 &nbsp;&nbsp; <span>Fax</span> +55 (21) 2588-1516
                        </p>
                    </div>

                </div>

                <div class="col-sm-12 col-md-2">
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
