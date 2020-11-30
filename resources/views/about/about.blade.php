@extends('layouts.alerj')

@section('title', 'Sobre as Propostas Legislativas')

@section('content')


    <div class="row como-funciona">
        <div class="col-12">


            <h1 class=""><i class="fas fa-cogs"></i> Como Funciona?</h1>
            <p class="lead">
                Esta é uma ferramenta que oferece aos cidadãos um canal direto para sugerir pautas e projetos aos deputados estaduais.<br>
                As ideias enviadas são analisadas por uma equipe técnica, que vai observar a pertinência da sugestão para a esfera de governo envolvida, no caso a Estadual. Ideias que digam respeito a assuntos de responsabilidade Federal, como mudanças na legislação penal por exemplo, não serão disponibilizadas ao público.
            </p>

            <div class="about video mt-5">
                @include('about.video')
            </div>

            <div class="card m-0 mt-4 m-lg-5 pl-4 pr-4  m-pl-5 m-pr-5 pt-2">
                <h2 class="instrucao-topico mt-5 text-center">
                    <i class="far fa-question-circle"></i> Como criar uma Ideia Legislativa?
                </h2>

                <div class="row">
                    <div class="col-12">

                        <!-- Stepers Wrapper -->
                        <form action="?" method="GET"><ul class="stepper stepper-vertical">

                                <!-- First Step -->
                                <li class="completed">
                                    <a href="#!"><span class="circle">1</span><span class="label">Passo 1</span></a>
                                    <h3>Cadastro</h3>
                                    <p>
                                        Primeiro você precisa se cadastrar informando seu nome completo, CPF, email, telefone celular e whatsapp. Com isso você já estará apto a sugerir uma ideia legislativa e acompanhar o andamento dela.
                                    </p>
                                </li>
                                <!-- Second Step -->
                                <li class="active">
                                    <!--Section Title -->
                                    <a href="#!">
                                        <span class="circle">2</span><span class="label">Passo 2</span>
                                    </a>
                                    <h3>Apresente a sua ideia</h3>
                                    <p>
                                        Preencha os seguintes campos do formulário:
                                    </p>
                                    <p>
                                        Título da ideia: Dê um nome à sua ideia em no máximo 100 caracteres
                                    </p>
                                    <p>
                                        Descrição da ideia: aqui você pode detalhar a sua ideia, explicando-a melhor, informando porque a considera importante e apresentando todos os argumentos  possíveis para convencer outras pessoas a apoiá-la.

                                    </p>
                                </li>

                                <!-- Third Step -->
                                <li class="active">
                                    <!--Section Title -->
                                    <a href="#!">
                                        <span class="circle">3</span><span class="label">Passo 3</span>
                                    </a>
                                    <h3>Analise inicial da ideia e apoiamentos</h3>
                                    <p>
                                        Após o cadastro e descrição da ideia legislativa, uma Comissão Técnica da Alerj irá verificar se a proposta fere algum princípio constitucional, se foge da competência do Parlamento estadual ou até mesmo se ela já existe. Este processo leva no máximo sete dias úteis.
                                    </p>
                                    <p>
                                        Se a ideia for aprovada pela comissão, se não incidir em alguma das vedações do Termo de Uso, ela  será aceita e publicada e estará disponível para receber  os  12 mil apoios necessários para que siga adiante e se transforme numa proposição, passando a ser debatida na Alerj exatamente como acontece com as propostas apresentadas pelos deputados estaduais.
                                    </p>
                                    <p>
                                        Após aceita e publicada, você receberá um email de confirmação e um link para compartilhar sua ideia nas redes sociais. Essa etapa é importante para que você conquiste os 12 mil apoios num prazo máximo de até quatro meses.
                                    </p>
                                    <p>
                                        **** As ideias que não conseguirem o número mínimo de apoios no período de quatro meses serão encerradas, ficando disponíveis para consulta.
                                    </p>
                                </li>

                            </ul></form>
                        <!-- /.Stepers Wrapper -->
                    </div>
                </div>
            </div>




            <h2 class="instrucao-topico">

            </h2>
            <div class="termo">

            </div>




            <div class="card m-0 mt-4 m-lg-5 pl-4 pr-4  m-pl-5 m-pr-5 pt-5 pb-5">

                <h2 class="mb-4 text-center">
                    <i class="far fa-question-circle"></i> Como apoiar uma Ideia Legislativa?
                </h2>

                <p>
                    Apoiar uma ideia legislativa é muito simples: basta entrar na plataforma, buscar a ideia pelo título e clicar no botão apoiar. Seu voto para que aquela ideia siga adiante será imediatamente computado e aparecerá ao lado. Você pode apoiar quantas ideias quiser ao mesmo tempo. E também pode acompanhar o andamento de cada uma, clicando no botão acompanhamento na página da sugestão.
                </p>

            </div>


            <div class="card m-0 mt-4 m-lg-5 pl-4 pr-4  m-pl-5 m-pr-5 pt-5 pb-5">
                <h2 class="mb-4 text-center">
                    <i class="far fa-question-circle"></i> Qual o encaminhamento das Ideias Legislativas na Alerj?
                </h2>
                <p>
                    Após receber pelo menos 12 mil apoios para seguir adiante num prazo máximo de quatro meses, a ideia legislativa será transformada pela Comissão Técnica numa proposição legislativa. Ficará a cargo dessa comissão, a transformação da sugestão num projeto formal, dando início à sua tramitação na Alerj. Essa etapa pode incluir também a realização de audiência pública para debater o tema.
                </p>
                <p>
                    As sugestões enviadas à Comissão também ficam disponíveis para consulta. Além do texto integral enviado e do número de apoios recebidos. O material encaminhado à Comissão será identificado com nome completo do autor da ideia.
                </p>
            </div>
        </div>
    </div>
@stop
