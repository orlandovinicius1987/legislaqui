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


            <div class="card m-5 pl-5 pr-5 pt-2">
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
                                    <p>
                                        Antes de fazer sua proposta, procure entre as já publicadas outras que tenham o mesmo conteúdo. Muitas ideias parecidas podem dividir a atenção e fazer com que a sugestão não consiga os apoios necessários.
                                    </p>
                                </li>

                                <!-- Second Step -->
                                <li class="active">

                                    <!--Section Title -->
                                    <a href="#!">
                                        <span class="circle">2</span><span class="label">Passo 2</span>
                                    </a>
                                    <p>
                                        Você não precisa escrever sua ideia já no formato de um projeto de lei. Basta preencher o formulário com a sugestão que será debatida pelos parlamentares. O formulário é dividiro em quatro partes:
                                    </p>
                                    <p>
                                        <b>Nome da proposta:</b> Onde você vai resumir sua ideia para identificá-la.
                                    </p>
                                    <p>
                                        <b>Problema:</b> aqui você apresenta, em poucas palavras, o problema que, na sua opinião, seria solucionado ou reduzido com a implementação da sua proposta.
                                    </p>
                                    <p>
                                        <b>Ideia Central:</b> neste campo você deverá dizer, resumidamente, o que é fundamental na sua proposta. É importante ser claro e conciso.
                                    </p>
                                    <p>
                                        <b>Exposição da ideia:</b> aqui você deverá detalhar sua proposta, apresentando seus argumentos para convencer outros cidadãos a apoiá-la.
                                    </p>
                                </li>

                                <!-- Third Step -->
                                <li class="active">

                                    <!--Section Title -->
                                    <a href="#!">
                                        <span class="circle">3</span><span class="label">Passo 3</span>
                                    </a>
                                    <p>
                                        A sugestão será analisada conforme os Termos de Uso do Legislaqui. Também será observado se a ideia contraria alguma cláusula pétrea da constituição, se foge da competência do parlamento estadual, se é repetida ou tem algum problema na insanável na redação.
                                    </p>
                                    <p class="instrucao-fundo-cinza">
                                        O prazo de avaliação da Ideia é de, em média, 7 dias úteis. Se houver um fluxo extraordinário de novas ideias no período, esse prazo poderá ser maior.

                                        Se a ideia não incidir em quaisquer daquelas vedações, será publicada e estará disponível para apoio pelo prazo de quatro meses.
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




            <div class="card m-5 pl-5 pr-5 pt-5 pb-5">

                <h2 class="mb-4 text-center">
                    <i class="far fa-question-circle"></i> Como apoiar uma Ideia Legislativa?
                </h2>

                <p>
                    Para dar seu apoio a uma sugestão enviada por outra pessoa, você deve localizar a ideia e registrar seu apoio. Depois disso, você poderá acompanhar o andamento da ideia. Neste caso, você receberá um email de confirmação e um link para compartilhar a ideia nas redes sociais. Também é possível acompanhar o andamento de uma ideia que você não apoia, clicando no botão de acompanhamento na página da sugestão.
                </p>
                <p>
                    Você também pode apoiar mais de uma ideia ao mesmo tempo.
                </p>


            </div>


            <div class="card m-5 pl-5 pr-5 pt-5 pb-5">
                <h2 class="mb-4 text-center">
                    <i class="far fa-question-circle"></i> Qual o encaminhamento das Ideias Legislativas na Alerj?
                </h2>
                <p>
                    A sugestão ficará no portal #Legislaqui por quatro meses para o recebimento de apoios. A ideia que receber pelo menos 20 mil apoios será enviada à Comissão (essa parte tem que ser resolvida ainda), para ser analisada pelos deputados. Ficará a cargo dessa comissão, por meio da realização de audiências públicas e reuniões, a transformação da sugestão num projeto formal, dando início a sua tramitação.
                </p>
                <p>
                    As ideias que não conseguirem o número mínimo de apoios no período de quatro meses serão encerradas, ficando disponíveis para consulta numa área separada.
                </p>
                <p>
                    As sugestões enviadas à Comissão também ficam disponíveis para consulta. Além do texto integral enviado e do número de apoios recebidos, o material encaminhado à Comissão terá a completa identificação do autor.
                </p>
            </div>

{{--

            <div class="bd-example">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary">Left</button>
                    <button type="button" class="btn btn-secondary">Middle</button>
                    <button type="button" class="btn btn-secondary">Right</button>
                </div>
            </div>
--}}

        </div>
    </div>
@stop
