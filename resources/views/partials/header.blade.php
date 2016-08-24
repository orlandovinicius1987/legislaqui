<div class="row pull-right">
    {!! Form::open(array('route' => 'home.post', 'class'=>'form navbar-form navbar-right searchform')) !!}
    {!! Form::text('search', null,
                           array('required',
                                'class'=>'form-control',
                                'placeholder'=>'Pesquise uma ideia legislativa')) !!}
    {!! Form::submit('Buscar',
                               array('class'=>'btn')) !!}
    {!! Form::close() !!}

    <div class="" role="group" aria-label="...">
        {{--<a href="/proposals?q=progress" class="btn btn-default {{ $query == "progress" ? 'active' :'' }}"> Em andamento</a>--}}
        <a href="/" class="btn btn-default {{ $query == "open" ? 'active' :'' }}"> Abertas</a>
        <a href="/?q=comittee" class="btn btn-default {{ $query == "comittee" ? 'active' :'' }}">Na comissão</a>
        <a href="/?q=finished" class="btn btn-default {{ $query == "finished" ? 'active' :'' }}">Concluídas</a>
    </div>
</div>