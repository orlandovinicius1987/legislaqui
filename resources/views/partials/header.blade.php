<div class="header">
    <div class="row">
        <div class="col-xs-12 col-sm-8 pull-right">
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
        <div class="col-xs-12 col-sm-8 pull-right" role="group" aria-label="...">
            <a href="/?q=open" class="btn btn-default {{ $query == null ? 'active' :'' }} {{ $query == "open" ? 'active' :'' }}"> Abertas</a>
            <a href="/?q=committee" class="btn btn-default {{ $query == "committee" ? 'active' :'' }}">Na comissão</a>
            <a href="/?q=expired" class="btn btn-default {{ $query == "expired" ? 'active' :'' }}">Expiradas</a>
            <a href="/?q=disapproved" class="btn btn-default {{ $query == "disapprove" ? 'active' :'' }}">Não acatadas</a>
            <a href="/?q=approved" class="btn btn-default {{ $query == "approved" ? 'active' :'' }}">Aprovadas</a>
        </div>
    </div>
</div>