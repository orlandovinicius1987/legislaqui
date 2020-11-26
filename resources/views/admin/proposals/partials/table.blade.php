<table class="table-responsive table-striped table-show">
    <tbody>
    {{--                                            <tr><td class="table-td-label-show">Situação</td><td class="table-td-show"> {{     }}</td></tr>--}}
    <tr><td class="table-td-label-show">Autor</td><td class="table-td-show"> {{ $proposal->user->name }}</td></tr>
    <tr><td class="table-td-label-show">E-mail do Autor</td><td class="table-td-show"> {{ $proposal->user->email }}</td></tr>
    <tr><td class="table-td-label-show">Whatsapp do Autor</td><td class="table-td-show"> {{ $proposal->user->whatsapp_formatted }}</td></tr>

    {{-- <tr><td class="table-td-label-show">Assuntos</td><td class="table-td-show">
            {!! implode('</br> ',$proposal->subjects->map(function ($subject){
            return $subject->name;
            })->toArray()) !!}</td></tr> --}}

    @if($proposal->pub_date)
        <tr><td class="table-td-label-show">Data Publicação</td><td class="table-td-show"> {{ $proposal->pub_date->format('d/m/Y') }}</td></tr>
    @else
        <tr><td class="table-td-label-show">Data Publicação<td class="table-td-show"> Exibida após aprovação</td></tr>
    @endif
    @if($proposal->pub_date)
        <tr><td class="table-td-label-show">Data Limite</td><td class="table-td-show"> {{ $proposal->limit_date->format('d/m/Y') }}</td></tr>
    @else
        <tr><td class="table-td-label-show">Data Limite<td class="table-td-show"> Exibida após aprovação</td></tr>
    @endif
    <tr><td class="table-td-label-show">Exposição da Ideia</td><td class="table-td-show"> {!! $proposal->idea_exposition !!}</td></tr>
    <tr><td class="table-td-label-show">Número de Apoios</td><td class="table-td-show"> {{ $proposal->approvals->count() }}</td></tr>
    <tr></tr>
    {{-- not moderated == null --}}
    <tr><td class="table-td-label-show">Aprovado em</td><td class="table-td-show"> {{ $proposal->approved_at }}</td></tr>
    <tr><td class="table-td-label-show">Aprovado por</td><td class="table-td-show"> {{ $proposal->approved_by }}</td></tr>
    <tr><td class="table-td-label-show">Desaprovado em</td><td class="table-td-show"> {!! $proposal->disapproved_at !!}</td></tr>
    <tr><td class="table-td-label-show">Desaprovado por</td><td class="table-td-show"> {!! $proposal->disapproved_by !!}</td></tr>
    {{-- if has response -> return response data, else null --}}
    <tr><td class="table-td-label-show">Autor Resposta</td><td class="table-td-show"> {{ $proposal->responder ? $proposal->responder->name  : null }}</td></tr>
    <tr><td class="table-td-label-show">Resposta</td><td class="table-td-show"> {!! $proposal->response ? $proposal->response : null !!}</td></tr>
    <tr><td class="table-td-label-show">Projeto de Lei</td><td class="table-td-show"> {!! $proposal->bill_project_id ? $proposal->bill_project_id : 'Ainda não virou Projeto de Lei' !!}</td></tr>
    </tbody>
</table>
