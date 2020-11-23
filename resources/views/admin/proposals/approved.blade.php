@extends('layouts.admin')

@section('title', config('app.name'))

<!-- Current Proposals -->
@section('content')

    @if (Session::has('flash_msg'))
        <div class="alert alert-info">{{ Session::get('flash_msg') }}</div>
    @endif

    @if (Session::has('error_msg'))
        <div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
    @endif

    @if(Session::has('proposal_crud_msg'))
        <div class="alert alert-info">{{ Session::get('proposal_crud_msg') }}</div>
    @endif

    @include('includes.status')

        <!-- Main row -->
        <div class="row">

            <div class="col-md-12">

                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">Propostas Legislativas Em Tramitação</h3>
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <div id="dataTableAdmin2_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="dataTableAdmin2" class="table table-bordered table-striped table-hover compact dataTable" role="grid" aria-describedby="dataTableAdmin2_info">
                                        <thead>
                                        <tr role="row">
                                            <th>Id</th>
                                            <th>Nome</th>
                                            @if(config('app.likes_enabled'))
                                                <th>Curtidas</th>
                                            @endIf
                                            <th>Apoios</th>
                                            <th>Situação</th>
                                            <th>Moderação</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        @foreach ($approveds as $approved)
                                            <tr>
                                                <td>{{ $approved->id }}</td>
                                                <td><a href="{{ route('admin.proposal.show',array('id'=>$approved->id)) }}">{{ $approved->name }}</a></td>
                                                {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$approved->id)) }}">{{ $approved->name }}</a></td>--}}
                                                {{--<td><a href="{{ route('admin.proposal.response', $approved->id) }}" class="btn btn-danger">Responder Proposta</a></td>--}}
                                                @if(config('app.likes_enabled'))
                                                    <td>{{$approved->like_count - $approved->unlike_count}}</td>
                                                @endIf
                                                <td>{{$approved->approvals()->count()}}</td>
                                                <td>
                                                   @if ($approved->in_committee == false)
                                                        <span class="label label-default"> Em votação</span></a>

                                                   @elseif ($approved->in_committee == true && $approved->approved_by_committee == null &&  $approved->disapproved_by_committee == null)
                                                            <span class="label label-primary"> Está em aprovação</span>
                                                   @else
                                                        @if ($approved->approved_by_committee != null && $approved->bill_project_id != null)
                                                            <span class="label label-success"> Virou projeto de lei!</span>
                                                        @elseif ($approved->approved_by_committee != null && $approved->bill_project_id == null)
                                                            <span class="label label-info"> Aprovada pela Comissão</span>
                                                        @elseif ($approved->disapproved_by_committee)
                                                            <span class="label label-warning"> Desaprovada pela Comissão</span>
                                                        @endif
                                                   @endif
                                                </td>
                                                @if($approved->isModeratable())
                                                    <td><a href="{{ route('admin.proposal.response', ['id' => $approved->id]) }}" class="btn btn-info botao" role="button"><i class="fa fa-cog fa-spin fa fa-fw"></i> Moderar esta ideia!</a>  </td>
                                                @endif
                                                </tr>
                                        @endforeach
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@stop
