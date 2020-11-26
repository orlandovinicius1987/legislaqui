@extends('layouts.admin')

@section('title', config('app.name'))

<!-- Current Proposals -->
@section('content')

    {{--@if (Session::has('flash_msg'))--}}
        {{--<div class="alert alert-info">{{ Session::get('flash_msg') }}</div>--}}
{{--@endif--}}

    {{--@if (Session::has('error_msg'))--}}
        {{--<div class="alert alert-danger">{{ Session::get('error_msg') }}</div>--}}
{{--@endif--}}

    {{--@if(Session::has('proposal_crud_msg'))--}}
        {{--<div class="alert alert-info">{{ Session::get('proposal_crud_msg') }}</div>--}}
{{--@endif--}}

@include('includes.status')

        <!-- Main row -->
        <div class="row">

            <div class="col-md-12">

                @include('partials.error')

                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Ideias Legislativas</h3>
{{--                        <div class="pull-right"><a href="{{ route('admin.proposal.create') }}" class="btn btn-success"> <span class="fas fa-plus" aria-hidden="true"></span> Incluir Nova Ideia</a></div>--}}
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <div id="dataTableAdmin_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="dataTableAdmin" class="table table-bordered table-striped table-hover compact dataTable" role="grid" aria-describedby="dataTableAdmin_info">
                                        <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Id: activate to sort column ascending" style="width: 68px;">Id</th>
                                            <th class="sorting_asc" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Nome: activate to sort column descending" style="width: 296px;" aria-sort="ascending">Nome</th>
                                            @if(config('app.likes_enabled'))
                                                <th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Likes: activate to sort column ascending" style="width: 241px;">Curtidas</th>
                                            @endIf
                                            {{--<th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Dislikes: activate to sort column ascending" style="width: 214px;">Dislikes</th>--}}
                                            {{--<th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Rating: activate to sort column ascending" style="width: 168px;">Rating</th>--}}
                                            <th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Apoios: activate to sort column ascending" style="width: 168px;">Apoios</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Resposta: activate to sort column ascending" style="width: 168px;">Status</th>
                                            <th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="" style="width: 168px;">Moderação</th>
                                            {{--<th class="sorting" tabindex="0" aria-controls="dataTableUser" rowspan="1" colspan="1" aria-label="Resposta: activate to sort column ascending" style="width: 168px;">Resposta</th>--}}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @foreach ($proposals as $proposal)
                                            <tr>
                                                {{--Id--}}
                                                <td>{{ $proposal->id }}</td>
                                                {{--Proposal Name--}}
                                                <td><a href="{{ route('admin.proposal.show',array('id'=>$proposal->id)) }}">{{ $proposal->name }}</a></td>
                                                {{--Likes --}}
                                                @if(config('app.likes_enabled'))
                                                    <td>{{ ($proposal->like_count - $proposal->unlike_count)}}</td>
                                                @endIf
                                                {{--Unlikes--}}
                                                {{--<td>{{ $proposal->unlike_count }}</td>--}}
                                                {{--Rating--}}
                                                {{--<td>{{ $proposal->rating }}</td>--}}
                                                {{--Approvals--}}
                                                <td>{{ $proposal->approvals_count }}</td>

                                                <td>
                                                    @if ($proposal->state == App\Enums\ProposalState::Approved)
                                                        <i class="fa fa-check-circle" aria-hidden="true"></i> Aprovada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::NotModerated)
                                                        <i class="fa fa-circle-notch" aria-hidden="true"></i> Aguardando moderação
                                                    @elseif ($proposal->state == App\Enums\ProposalState::Disapproved)
                                                        <i class="fa fa-times-circle" aria-hidden="true"></i> Desaprovada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::Supported)
                                                        <i class="fa fa-comment-dots" aria-hidden="true"></i> Apoiada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::Expired)
                                                        <i class="fa fa-hourglass" aria-hidden="true"></i> Expirada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::Sent)
                                                        <i class="fa fa-exchange-alt" aria-hidden="true"></i> Enviada para comissão
                                                    @elseif ($proposal->state == App\Enums\ProposalState::Forwarded)
                                                        <i class="fa fa-exchange-alt" aria-hidden="true"></i> Encaminhada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::NotForwarded)
                                                        <i class="fa fa-exchange-alt" aria-hidden="true"></i> Não encaminhada
                                                    @elseif ($proposal->state == App\Enums\ProposalState::BillProject)
                                                        <i class="fa fa-file-alt" aria-hidden="true"></i> Projeto de Lei
                                                    @endif

                                                </td>




                                                {{--Proposal Moderation--}}
                                                <td class="text-center">

                                                    @if ($proposal->isModeratable())

                                                        <a href="{{ route('admin.proposal.response', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">
                                                            <i class="fa fa-cog fa-spin fa fa-fw"></i> Moderar essa ideia! </a>


                                                    @endif
                                                </td>

                                                {{--Proposal Response--}}
                                                {{--<td>--}}

                                                    {{--@if ($proposal->responder_id === null)--}}
                                                    {{--<a href="{{ route('admin.proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a>--}}
                                                    {{--@endif--}}

                                                    {{--{{ $proposal->responder_id or 'Sem Resposta' }}--}}
                                                {{--</td>--}}
                                                <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                                                {{--<td class="blue_link"><a href="{{ route('admin.users.show',array('id'=>$user->id)) }}">{{ $user->name }}</a></td>--}}

                                            </tr>
                                        @endforeach

                                        </tbody>

                                    </table>

                            <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                            {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}"></a></td>--}}
{{--@if (isset($is_not_responded) && Auth::user()->is_admin)--}}
                                {{--<td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>--}}

            </div>
    </div>
@stop
