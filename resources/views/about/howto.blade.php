@extends('layouts.alerj')

@section('title', 'Sobre as Propostas Legislativas')

@section('content')


    <div class="row como-funciona">
        <div class="col-12">

            <h1 class=""><i class="fas fa-cogs"></i> Como Funciona?</h1>
            

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


        </div>
    </div>
@stop
