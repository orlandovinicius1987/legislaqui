<div class="header">
    <div class="row">
        <div class="col-xs-12">
            {!! Form::open(array('route' => 'home.post', 'class'=>'form')) !!}
            {!! Form::text('search', null,
                array('required',
                'class'=>'form-control',
                'placeholder'=>'Busque uma ideia ...')) !!}

            <span class="glyphicon glyphicon-search form-control-feedback"></span>
            {!! Form::close() !!}
        </div>
    </div>

    <button type="button" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"
            data-toggle="tooltip" data-placement="bottom"
            title="Essas são as propostas que ainda não chegaram à Comissão. Uma proposta precisa de 20 mil apoios para ser
                encaminhada à Comissão. Antes de criar uma proposta, verifique se não há uma já criada para o mesmo fim.
                 Várias ideias semelhantes terminam diluindo o apoio dos demais cidadãos.">
        <a href="/?q=open"> ABERTAS</a></button>

    <button type="button" class="btn btn-default {{ $query == "committee" ? 'active' :'' }}"
            data-toggle="tooltip" data-placement="bottom"
            title="Essas são as propostas que receberam o apoio suficiente e, neste momento, estão sendo analisadas pela comissão.">
        <a href="/?q=committee">NA COMISSÃO</a></button>

    <button type="button" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}"
            data-toggle="tooltip" data-placement="bottom"
            title="Essas são as propostas que não receberam o apoio suficiente e não foram encaminhadas para análise da comissão.">
        <a href="/?q=expired">EXPIRADAS</a></button>

    <button type="button" class="btn btn-default {{ $query == "disapproved" ? 'active' :'' }}"
            data-toggle="tooltip" data-placement="bottom"
            title="Essas são as propostas analisadas e não acatadas pela comissão.">
        <a href="/?q=disapproved">NÃO ACATADAS</a></button>

    <button type="button" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}"
            data-toggle="tooltip" data-placement="bottom"
            title="Essas são as propostas analisadas e aprovadas pela comissão.">
        <a href="/?q=approved">APROVADAS</a></button>

    {{-- Don't remove before warning --}}
    {{--<div class="row">
        <div class="col-xs-12" role="group" aria-label="...">
            <a href="/?q=open" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"> ABERTAS</a>
            <a href="/?q=committee" class="btn btn-default {{ $query == "committee" ? 'active' :'' }}">NA COMISSÃO</a>
            <a href="/?q=expired" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}">EXPIRADAS</a>
            <a href="/?q=disapproved" class="btn btn-default {{ $query == "disapproved" ? 'active' :'' }}">NÃO ACATADAS</a>
            <a href="/?q=approved" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}">APROVADAS</a>
        </div>
    </div>--}}
</div>
