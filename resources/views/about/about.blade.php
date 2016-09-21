@extends('layouts.alerj')

@section('title', 'Sobre as Propostas Legislativas')

@section('header-text')
    <div class="row">
        <div class="col-xs-12 titulosecao text-center">
            <h1>Como Funciona?</h1>
        </div>
    </div>
@stop

            <!-- Current Content -->
@section('content')

    <div class="">
        {{--<div class="panel-heading text-center">Como Funciona?</div>--}}
        <div class="">

            <p>
                {{--Oferecer ao cidadão a possibilidade de propor ideias de projetos legislativos, ou seja, destinados a criar novas leis ou a alterar as que já existem, ou ainda a aperfeiçoar  a Constituição da República. Essas ideias serão publicadas no Portal e-Cidadania e poderão receber apoios. As ideias que obtiverem apoio significativo serão transformadas em sugestão e encaminhadas formalmente à Comissão de Direitos Humanos e Legislação Participativa.--}}
                Esta é uma ferramenta que oferece aos cidadãos um canal direto para sugerir pautas e projetos aos deputados estaduais. As ideias enviadas são analisadas por uma equipe técnica, que vai observar a pertinência da sugestão para a esfera de governo envolvida, no caso a Estadual. Ideias que digam respeito a assuntos de responsabilidade Federal, como mudanças na legislação penal por exemplo, não serão disponibilizadas ao público.
            </p>
            <hr>
            <br><br><br><br>
            <div class="termo">
                <h2 class="instrucao-topico">
                    Como criar uma Ideia Legislativa?
                </h2>
                <h3 class="instrucao-topico-h3">
                    PASSO 1
                </h3>
                <p>
                    {{--Antes de propor uma nova Ideia Legislativa, confira se já não está disponível no portal outra com o mesmo conteúdo. Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.--}}
                    Antes de fazer sua proposta, procure entre as já publicadas outras que tenham o mesmo conteúdo. Muitas ideias parecidas podem dividir a atenção e fazer com que a sugestão não consiga os apoios necessários.
                </p>
                <hr>
                <h3 class="instrucao-topico-h3">
                    PASSO 2
                </h3>
                <p>
                    {{--A Ideia Legislativa não deve ser apresentada na forma de projeto de lei ou proposta de emenda à Constituição, mas deve conter sugestão que, para ser implementada, dependa da edição de uma lei ou de emenda Constitucional. Para facilitar a apresentação da ideia legislativa, o formulário é dividido em quatro partes:--}}
                    Você não precisa escrever sua ideia já no formato de um projeto de lei. Basta preencher o formulário com a sugestão que será debatida pelos parlamentares. O formulário é dividiro em quatro partes:
                </p>
                <p>
                    {{--<span class="instrucao-topico-letra">a)</span> Área temática da Ideia Legislativa: você deverá selecionar o tema a que se refere sua Ideia Legislativa. Somente é possível escolher uma opção. Se a ideia tem relação com várias áreas, indique a principal.--}}
                    <b>Nome da proposta:</b> Onde você vai resumir sua ideia para identificá-la.
                </p>
                <p>
                    {{--<span class="instrucao-topico-letra">b)</span> Ideia Central: neste campo, você deve expor, em poucas palavras, o que é essencial em sua ideia. Seja claro e conciso, pois esse campo identificará sua Ideia Legislativa na lista geral.--}}
                    <b>Problema:</b> aqui você apresenta, em poucas palavras, o problema que, na sua opinião, seria solucionado ou reduzido com a implementação da sua proposta.
                </p>
                <p>
                    {{--<span class="instrucao-topico-letra">c)</span> Identificação do Problema: neste campo, você apresenta, em poucas palavras, o problema que, em seu entendimento, seria solucionado ou atenuado com a implementação de sua Ideia Legislativa.--}}
                    <b>Ideia Central:</b> neste campo você deverá dizer, resumidamente, o que é fundamental na sua proposta. É importante ser claro e conciso.
                </p>
                <p>
                    {{--<span class="instrucao-topico-letra">d)</span> Exposição da Ideia: neste campo, você deverá expor sua ideia legislativa de maneira mais detalhada. Aproveite para apresentar seus argumentos e convencer os demais cidadãos a apoiá-la.--}}
                    <b>Exposição da ideia:</b> aqui você deverá detalhar sua proposta, apresentando seus argumentos para convencer outros cidadãos a apoiá-la.
                </p>
                <hr>
                <h3 class="instrucao-topico-h3">
                    PASSO 3
                </h3>
                <p>
                    {{--A Ideia Legislativa será avaliada segundo sua adequação e conformidade com os <a href="termo">Termos de Uso do Portal</a>. Além disso, será observado se a ideia incorre em alguma das seguintes vedações:--}}
                    A sugestão será analisada conforme os Termos de Uso do Legislaqui. Também será observado se a ideia contraria alguma cláusula pétrea da constituição, se foge da competência do parlamento estadual, se é repetida ou tem algum problema na insanável na redação.
                </p>
                {{--<p>--}}
                    {{--<span class="instrucao-topico-letra">a)</span> Ideia contraria cláusula pétrea da Constituição Federal;--}}
                {{--</p>--}}
                {{--<p>--}}
                    {{--<span class="instrucao-topico-letra">b)</span> Ideia escapa às competências legislativas do Congresso Nacional ou aos limites da iniciativa parlamentar;--}}
                {{--</p>--}}
                {{--<p>--}}
                    {{--<span class="instrucao-topico-letra">c)</span> Inadequação redacional insanável;--}}
                {{--</p>--}}
                {{--<p>--}}
                    {{--<span class="instrucao-topico-letra">d)</span> Ideia repetida.--}}
                {{--</p>--}}
                <p class="instrucao-fundo-cinza">
                    {{--O prazo de avaliação da Ideia é de, em média, 7 dias úteis. Se houver um fluxo extraordinário de novas ideias no período, esse prazo poderá ser maior.--}}

                    {{--Se a ideia não incidir em quaisquer daquelas vedações, será publicada e estará disponível para apoio pelo prazo de quatro meses.--}}

                    O prazo de avaliação da Ideia é de, em média, 7 dias úteis. Se houver um fluxo extraordinário de novas ideias no período, esse prazo poderá ser maior.

                    Se a ideia não incidir em quaisquer daquelas vedações, será publicada e estará disponível para apoio pelo prazo de quatro meses.
                </p>
            </div>
            <br><br><br><br>
            <div class="termo">
                <h2 class="instrucao-topico">
                    Como apoiar uma Ideia Legislativa?
                </h2>
                <p>
                    {{--Quem tiver interesse em participar da fase de apoio da Ideia Legislativa deverá localizar uma com a qual concorde e declarar seu apoio. Após manifestar o apoio, se quiser, você poderá acompanhar o desempenho da Ideia. Nesse caso, você receberá e-mail de confirmação e link para compartilhamento da ideia legislativa no ambiente das redes sociais. É possível acompanhar a ideia mesmo sem apoiá-la. Para tanto, clique no botão de acompanhamento na tela de exibição da ideia legislativa.--}}
                    Para dar seu apoio a uma sugestão enviada por outra pessoa, você deve localizar a ideia e registrar seu apoio. Depois disso, você poderá acompanhar o andamento da ideia. Neste caso, você receberá um email de confirmação e um link para compartilhar a ideia nas redes sociais. Também é possível acompanhar o andamento de uma ideia que você não apoia, clicando no botão de acompanhamento na página da sugestão.
                </p>
                <p>
                    {{--Os cidadãos poderão apoiar mais de uma ideia legislativa ao mesmo tempo. Para isso, basta repetir o processo de declaração de apoio em todas de seu interesse.--}}
                    Você também pode apoiar mais de uma ideia ao mesmo tempo.
                </p>
            </div>
            <br><br><br><br>
            <div class="termo">
                <h2 class="instrucao-topico">
                    Qual o encaminhamento das Ideias Legislativas na Alerj?
                </h2>
                <p>
                    {{--A ideia legislativa permanecerá publicada no portal e-Cidadania por até quatro meses para receber o apoio de outros cidadãos. A Ideia que receber 20.000 (vinte mil) apoios durante seu prazo de publicidade será remetida à Comissão de Direitos Humanos e Legislação Participativa (CDH), a fim de ser apreciada pelos Deputados. É importante destacar, pois, que se trata de proposta de projeto de lei ou de emenda à constituição. Ficará a juízo dos Deputados a conversão da ideia em proposição, bem como sua posterior aprovação ou rejeição.--}}
                    A sugestão ficará no portal #Legislaqui por quatro meses para o recebimento de apoios. A ideia que receber pelo menos 20 mil apoios será enviada à Comissão (essa parte tem que ser resolvida ainda), para ser analisada pelos deputados. Ficará a cargo dessa comissão, por meio da realização de audiências públicas e reuniões, a transformação da sugestão num projeto formal, dando início a sua tramitação.
                </p>
                <p>
                    {{--Se, no decorrer do período, a ideia legislativa não alcançar a quantidade de apoios necessários, a proposta será automaticamente encerrada para votação, ficando disponível para consulta em área específica do portal.--}}
                    As ideias que não conseguirem o número mínimo de apoios no período de quatro meses serão encerradas, ficando disponíveis para consulta numa área separada.
                </p>
                <p>
                    {{--As ideias legislativas remetidas à Comissão de Direitos Humanos e Legislação Participativa também ficarão disponíveis para consulta, e você poderá consultar sua tramitação no portal de Atividade Legislativa.--}}
                    As sugestões enviadas à Comissão também ficam disponíveis para consulta. Além do texto integral enviado e do número de apoios recebidos, o material encaminhado à Comissão terá a completa identificação do autor.
                </p>
                {{--<p>--}}
                    {{--Além do texto integral da ideia e do número de apoios recebidos, constará do material encaminhado à Comissão de Direitos Humanos e Legislação Participativa, a completa identificação de seu autor.--}}
                {{--</p>--}}
            </div>
        </div>
    </div>

@stop
