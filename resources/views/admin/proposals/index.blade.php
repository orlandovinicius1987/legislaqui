@extends('layouts.admin')

@section('title', 'e-democracia')

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
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <div id="example2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="example2" class="table table-bordered table-striped table-hover compact dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                        <tr role="row">
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Id: activate to sort column ascending" style="width: 68px;">Id</th>
                                            <th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Nome: activate to sort column descending" style="width: 296px;" aria-sort="ascending">Nome</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Likes: activate to sort column ascending" style="width: 241px;">Curtidas</th>
                                            {{--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Dislikes: activate to sort column ascending" style="width: 214px;">Dislikes</th>--}}
                                            {{--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Rating: activate to sort column ascending" style="width: 168px;">Rating</th>--}}
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Apoios: activate to sort column ascending" style="width: 168px;">Apoios</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Resposta: activate to sort column ascending" style="width: 168px;">Moderação</th>
                                            <th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Resposta: activate to sort column ascending" style="width: 168px;">Resposta</th>
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
                                                <td>{{ ($proposal->like_count - $proposal->unlike_count)}}</td>
                                                {{--Unlikes--}}
                                                {{--<td>{{ $proposal->unlike_count }}</td>--}}
                                                {{--Rating--}}
                                                {{--<td>{{ $proposal->rating }}</td>--}}
                                                {{--Approvals--}}
                                                <td>{{ $proposal->approvals()->count() }}</td>

                                                {{--Proposal Moderation--}}
                                                <td class="text-center">
                                                    {{--{{$proposal->moderation($proposal->id)}}--}}
                                                    {{--@if () === null)--}}
                                                        {{--<a href="{{ route('admin.proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a>--}}
                                                    {{--@endif--}}
                                                    @if ($proposal->approved_at == null && $proposal->approved_by == null && $proposal->disapproved_at == null && $proposal->disapproved_by == null )
                                                        <a href="{{ route('admin.proposal.response', ['id' => $proposal->id]) }}" class="btn btn-info botao" role="button">
                                                            <i class="fa fa-cog fa-spin fa fa-fw"></i> Moderar essa Ideia! </a>
                                                    @else
                                                    já moderado
                                                    @endif
                                                </td>

                                                {{--Proposal Response--}}
                                                <td>

                                                    @if ($proposal->responder_id === null)
                                                    <a href="{{ route('admin.proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a>
                                                    @endif

                                                    {{--{{ $proposal->responder_id or 'Sem Resposta' }}--}}
                                                </td>
                                                <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                                                {{--<td class="blue_link"><a href="{{ route('admin.users.show',array('id'=>$user->id)) }}">{{ $user->name }}</a></td>--}}

                                            </tr>
                                        @endforeach

                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th rowspan="1" colspan="1">Id</th>
                                            <th rowspan="1" colspan="1">Nome</th>
                                            <th rowspan="1" colspan="1">Curtidas</th>
                                            {{--<th rowspan="1" colspan="1">Dislikes</th>--}}
                                            {{--<th rowspan="1" colspan="1">Rating</th>--}}
                                            <th rowspan="1" colspan="1">Apoiamentos</th>
                                            <th rowspan="1" colspan="1">Resposta</th>
                                        </tr>
                                        </tfoot>
                                    </table>

                            <!-- <td> {{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}} </td>-->
                            {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}"></a></td>--}}
{{--@if (isset($is_not_responded) && Auth::user()->is_admin)--}}
                                {{--<td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>--}}

            </div>
    </div>
@stop