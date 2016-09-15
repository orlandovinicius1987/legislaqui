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
                        <h3 class="box-title">Propostas Legislativas que estão em Comissão</h3>
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <div id="dataTableUser_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">

                            <div class="row">
                                <div class="col-sm-12">
                                    <table id="dataTableAdmin2" class="table table-bordered table-striped table-hover compact dataTable" role="grid" aria-describedby="dataTableAdmin2_info">
                                        <thead>
                                        <tr role="row">
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Moderação da Comissão</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        @foreach ($inCommittee as $inCommittee)
                                            <tr>
                                                <td>{{ $inCommittee->id }}</td>
                                                <td><a href="{{ route('admin.proposal.show',array('id'=>$inCommittee->id)) }}">{{ $inCommittee->name }}</a></td>
                                                {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$approved->id)) }}">{{ $approved->name }}</a></td>--}}
                                                {{--<td><a href="{{ route('admin.proposal.toCommittee', $inCommittee->id) }}" class="btn btn-danger">Enviar</a></td>--}}
                                                {{--<td><a href="{{ route('admin.proposal.response', ['id' => $inCommittee->id]) }}" class="btn btn-info botao" role="button">--}}
                                                    {{--<i class="fa fa-cog fa-spin fa fa-fw"></i> Moderar essa Ideia! </a></td>--}}
                                                <td>
                                                    <a href="{{ route('admin.proposal.committeeApproval', $inCommittee->id) }}" class="btn btn-danger">Aprovar</a>
                                                    <a href="{{ route('admin.proposal.committeeDisapproval', $inCommittee->id) }}" class="btn btn-danger">Desaprovar</a>
                                                </td>

                                            </tr>
                                        @endforeach
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nome</th>
                                            <th>Moderação da Comissão</th>
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
