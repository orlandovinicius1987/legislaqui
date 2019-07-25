@extends('layouts.alerj')

@section('title', config('app.name'))

@section('header-text')
@stop

<!-- Current Proposals -->
@section('content')


    <div class="col-list">
        <div class="col-md-4 t1">

            <a href="/proposals" class="links">
                <div class="col-head text-center">
                    <span class="glyphicon " aria-hidden="true"><img class="image-icon" src="/imagens/icon-idea.png"></span>
                    <h2>Ideias Legislativas</h2>
                    <p>
                        Você pode sugerir e dar seu apoio a ideias legislativas que podem virar novas leis estaduais, alterar leis já existentes ou mudar a Constituição Estadual.
                    </p>
                </div>
            </a>

        </div>
        <div class="col-md-4 t2">
            <a href="//edemocracia.al.rj.leg.br" class="links" target="_blank">
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
            <a href="//edemocracia.camara.leg.br/wikilegis/" class="links" target="_blank">
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

@stop
