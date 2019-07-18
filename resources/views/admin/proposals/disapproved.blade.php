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
                        <h3 class="box-title">Propostas Legislativas Não Aprovadas</h3>
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
                                            <th>Situação</th>
                                            {{--<th>Sem Resposta</th>--}}
                                        </tr>
                                        </thead>

                                        <tbody>
                                        @foreach ($disapproveds as $disapproved)
                                            <tr>
                                                <td>{{ $disapproved->id }}</td>
                                                <td><a href="{{ route('admin.proposal.show',array('id'=>$disapproved->id)) }}">{{ $disapproved->name }}</a></td>
                                                {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$disapproved->id)) }}">{{ $disapproved->name }}</a></td>--}}
                                                {{--<td><a href="{{ route('admin.proposal.response', $disapproved->id) }}" class="btn btn-danger">Responder Proposta</a></td>--}}
                                                <td>
                                                    @if ($disapproved->in_committee == false)

                                                    @elseif ($disapproved->in_committee == true && $disapproved->approved_by_committee == null &&  $disapproved->disapproved_by_committee == null)
                                                        <span class="label label-primary"> Está em aprovação</span>
                                                    @else
                                                        @if ($disapproved->approved_by_committee != null && $disapproved->bill_project_id != null)
                                                            <span class="label label-success"> Virou projeto de lei!</span>
                                                        @elseif ($disapproved->approved_by_committee != null && $disapproved->bill_project_id == null)
                                                            <span class="label label-info"> Aprovada pela Comissão</span>
                                                        @elseif ($disapproved->disapproved_by_committee)
                                                            <span class="label label-warning"> Desaprovada pela Comissão</span>
                                                        @endif
                                                    @endif
                                                </td>

                                            </tr>
                                        @endforeach
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Situação</th>
                                            {{--<th>Sem Resposta</th>--}}
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
@stop
