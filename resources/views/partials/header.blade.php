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
    <div class="row">
        <div class="col-xs-12" role="group" aria-label="...">
            <a href="/?q=open" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"> ABERTAS</a>
            <a href="/?q=committee" class="btn btn-default {{ $query == "committee" ? 'active' :'' }}">NA COMISSÃO</a>
            <a href="/?q=expired" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}">EXPIRADAS</a>
            <a href="/?q=disapproved" class="btn btn-default {{ $query == "disapproved" ? 'active' :'' }}">NÃO ACATADAS</a>
            <a href="/?q=approved" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}">APROVADAS</a>
        </div>
    </div>
</div>
