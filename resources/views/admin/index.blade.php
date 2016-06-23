@extends('layouts.admin')
@section('content')

@include('includes.status')

@if (Session::has('flash_msg'))
    <div class="alert alert-info">{{ Session::get('flash_msg') }}</div>
@endif

@if (Session::has('error_msg'))
    <div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
@endif

@if(Session::has('user_crud_msg'))
    <div class="alert alert-info">{{ Session::get('user_crud_msg') }}</div>
@endif

<!-- Main row -->
<div class="row">

    {{--<div class="col-md-12">--}}

        {{--<div class="box">--}}
            {{--<div class="box-header">--}}
                {{--<h3 class="box-title">Usuários</h3>--}}
                {{--<div class="pull-right"><a href="admin/users/create" class="btn btn-success">Criar Novo Usuário</a></div>--}}
            {{--</div><!-- /.box-header -->--}}
            {{--<div class="box-body">--}}
                {{--<div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">--}}

                    {{--<div class="row">--}}
                        {{--<div class="col-sm-12">--}}
                            {{--<table id="example1" class="table table-bordered table-striped table-hover compact dataTable" role="grid" aria-describedby="example1_info">--}}
                                {{--<thead>--}}
                                {{--<tr role="row">--}}
                                    {{--<th class="sorting_asc" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column descending" style="width: 196px;" aria-sort="ascending">Id</th>--}}
                                    {{--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 241px;">Nome</th>--}}
                                    {{--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 214px;">Email</th>--}}
                                    {{--<th class="sorting" tabindex="0" aria-controls="example1" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending" style="width: 168px;">Função</th>--}}
                                {{--</tr>--}}
                                {{--</thead>--}}
                                {{--<tbody>--}}

                                {{--@foreach ($users as $user)--}}
                                    {{--<tr>--}}
                                        {{--<td>{{ $user->id }}</td>--}}
                                        {{--<!-- <td> --}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{-- </td>-->--}}
                                        {{--<td class="blue_link"><a href="{{ route('admin.users.show',array('id'=>$user->id)) }}">{{ $user->name }}</a></td>--}}
                                        {{--Email--}}
                                        {{--<td>{{ $user->email }}</td>--}}
                                        {{--Role--}}
                                        {{--<td> {{ $user->role_name }}</td>--}}
                                    {{--</tr>--}}
                                {{--@endforeach--}}

                                {{--</tbody>--}}
                                {{--<tfoot>--}}
                                {{--<tr>--}}
                                    {{--<th rowspan="1" colspan="1">Id</th>--}}
                                    {{--<th rowspan="1" colspan="1">Nome</th>--}}
                                    {{--<th rowspan="1" colspan="1">Email</th>--}}
                                    {{--<th rowspan="1" colspan="1">Função</th>--}}
                                {{--</tr>--}}
                                {{--</tfoot>--}}
                            {{--</table>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div><!-- /.box-body -->--}}
        {{--</div>--}}
    {{--</div>--}}

    <!-- Left col -->
    {{--<section class="col-lg-7 connectedSortable">--}}

        {{--<div class="bs-example bs-example-tabs" data-example-id=togglable-tabs>--}}
            {{--<ul id=myTabs class="nav nav-tabs" role=tablist>--}}
                {{--<li role=presentation class=active><a href=#home id=home-tab role=tab data-toggle=tab aria-controls=home aria-expanded=true>Home</a></li>--}}
                {{--<li role=presentation><a href=#profile role=tab id=profile-tab data-toggle=tab aria-controls=profile>Profile</a></li>--}}
                {{--<li role=presentation class=dropdown> <a href=# id=myTabDrop1 class=dropdown-toggle data-toggle=dropdown aria-controls=myTabDrop1-contents>Dropdown <span class=caret></span></a>--}}
                    {{--<ul class=dropdown-menu aria-labelledby=myTabDrop1 id=myTabDrop1-contents>--}}
                        {{--<li><a href=#dropdown1 role=tab id=dropdown1-tab data-toggle=tab aria-controls=dropdown1>@fat</a></li>--}}
                        {{--<li><a href=#dropdown2 role=tab id=dropdown2-tab data-toggle=tab aria-controls=dropdown2>@mdo</a></li>--}}
                    {{--</ul>--}}
                {{--</li>--}}
            {{--</ul>--}}

            {{--<div id=myTabContent class=tab-content>--}}
                {{--<div role=tabpanel class="tab-pane fade in active" id=home aria-labelledby=home-tab> <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p> </div>--}}
                {{--<div role=tabpanel class="tab-pane fade" id=profile aria-labelledby=profile-tab> <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p> </div>--}}
                {{--<div role=tabpanel class="tab-pane fade" id=dropdown1 aria-labelledby=dropdown1-tab> <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p> </div>--}}
                {{--<div role=tabpanel class="tab-pane fade" id=dropdown2 aria-labelledby=dropdown2-tab> <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p> </div>--}}
            {{--</div>--}}
        {{--</div>--}}




        {{--<!-- Custom tabs (Charts with tabs)-->--}}
        {{--<div class="nav-tabs-custom">--}}
            {{--<!-- Tabs within a box -->--}}
            {{--<ul id="admTabs" class="nav nav-tabs pull-right" role=tablist>--}}
                {{--<li role="presentation" class="active"><a href="#propostas" data-toggle="tab" role="tab" aria-controls="propostas">Propostas</a></li>--}}
                {{--<li role="presentation"><a href="#users" data-toggle="tab" role="tab" aria-controls="users">Users</a></li>--}}
                {{--<li class="pull-left header"><i class="fa fa-inbox"></i> Usuários</li>--}}
            {{--</ul>--}}

            {{--<!-- Tab panes -->--}}
            {{--<div class="tab-content">--}}

                {{--<div><a href="admin/users/create" class="btn btn-success">Criar Novo Usuário</a></div>--}}

                {{--<div role="tabpanel" class="tab-pane fade in " id="propostas">--}}
                    {{--<div class="panel panel-default">--}}

                        {{--<div class="panel-heading">--}}
                            {{--{!! $proposals->links() !!}--}}
                        {{--</div>--}}

                        {{--<div class="panel-body">--}}
                            {{--<table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">--}}
                                {{--<thead>--}}
                                {{--<tr>--}}
                                    {{--<th><h3>Proposta Legislativa</h3></th>--}}
                                    {{--@if (isset($is_not_responded) && Auth::user()->is_admin)--}}
                                        {{--<th><h3>Sem Resposta</h3></th>--}}
                                    {{--@else--}}
                                        {{--<th><h3>Likes</h3></th>--}}
                                        {{--<th><h3>Unlikes</h3></th>--}}
                                        {{--<th><h3>Rating</h3></th>--}}
                                        {{--<th><h3>Apoios</h3></th>--}}
                                    {{--@endif--}}
                                {{--</tr>--}}
                                {{--</thead>--}}

                                {{--<tbody>--}}
                                {{--@foreach ($proposals as $proposal)--}}
                                    {{--<tr>--}}
                                        {{--<!-- <td> --}}{{----}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{----}}{{-- </td>-->--}}
                                        {{--<td class="blue_link"><a href="{{ route('proposal.show',array('id'=>$proposal->id)) }}">{{ $proposal->name }}</a></td>--}}
                                        {{--@if (isset($is_not_responded) && Auth::user()->is_admin)--}}
                                            {{--<td><a href="{{ route('proposal.response', $proposal->id) }}" class="btn btn-danger">Responder Proposta</a></td>--}}
                                        {{--@else--}}
                                            {{--Likes --}}
                                            {{--<td>{{ $proposal->like_count }}</td>--}}
                                            {{--Unlikes--}}
                                            {{--<td>{{ $proposal->unlike_count }}</td>--}}
                                            {{--Rating--}}
                                            {{--<td>{{ $proposal->rating }}</td>--}}
                                            {{--Approvals--}}
                                            {{--<td>{{ $proposal->approvals()->count() }}</td>--}}
                                        {{--@endif--}}
                                    {{--</tr>--}}
                                {{--@endforeach--}}
                                {{--</tbody>--}}
                            {{--</table>--}}
                        {{--</div>--}}

                        {{--<div class="panel-footer">--}}
                            {{--{!! $proposals->links() !!}--}}
                        {{--</div>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div role="tabpanel" class="tab-pane fade in active" id="users">--}}
                    {{--<div class="panel panel-default">--}}

                        {{--<div class="panel-body">--}}
                            {{--<table id="datatable" class="table table-striped table-hover compact" cellspacing="0" width="100%">--}}
                                {{--<thead>--}}
                                {{--<tr>--}}
                                    {{--<th><h3>Id</h3></th>--}}
                                    {{--<th><h3>Nome</h3></th>--}}
                                    {{--<th><h3>E-Mail</h3></th>--}}
                                    {{--<th><h3>Role</h3></th>--}}
                                {{--</tr>--}}
                                {{--</thead>--}}

                                {{--<tbody>--}}
                                {{--@foreach ($users as $user)--}}
                                    {{--<tr>--}}
                                        {{--<td>{{ $user->id }}</td>--}}
                                        {{--<!-- <td> --}}{{-- Html::linkAction('ProposalsController@show', $proposal->name, array($proposal->id)) --}}{{-- </td>-->--}}
                                        {{--<td class="blue_link"><a href="{{ route('admin.users.show',array('id'=>$user->id)) }}">{{ $user->name }}</a></td>--}}
                                        {{--Email--}}
                                        {{--<td>{{ $user->email }}</td>--}}
                                        {{--Role--}}
                                        {{--<td>{{ $user->role_id }}</td>--}}
                                    {{--</tr>--}}
                                {{--@endforeach--}}
                                {{--</tbody>--}}
                            {{--</table>--}}
                        {{--</div>--}}

                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}

            {{--<div class="tab-content no-padding">--}}
                {{--<!-- Morris chart - Sales -->--}}
                {{--<div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;"></div>--}}
                {{--<div class="chart tab-pane" id="sales-chart" style="position: relative; height: 300px;"></div>--}}

  {{----}}


            {{--</div>--}}
        {{--</div><!-- /.nav-tabs-custom -->--}}
        {{--<!-- Chat box -->--}}
        {{--<div class="box box-success">--}}
            {{--<div class="box-header">--}}
                {{--<i class="fa fa-comments-o"></i>--}}
                {{--<h3 class="box-title">Chat</h3>--}}
                {{--<div class="box-tools pull-right" data-toggle="tooltip" title="Status">--}}
                    {{--<div class="btn-group" data-toggle="btn-toggle" >--}}
                        {{--<button type="button" class="btn btn-default btn-sm active"><i class="fa fa-square text-green"></i></button>--}}
                        {{--<button type="button" class="btn btn-default btn-sm"><i class="fa fa-square text-red"></i></button>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="box-body chat" id="chat-box">--}}
                {{--<!-- chat item -->--}}
                {{--<div class="item">--}}
                    {{--<img src="dist/img/user4-128x128.jpg" alt="user image" class="online"/>--}}
                    {{--<p class="message">--}}
                        {{--<a href="#" class="name">--}}
                            {{--<small class="text-muted pull-right"><i class="fa fa-clock-o"></i> 2:15</small>--}}
                            {{--Mike Doe--}}
                        {{--</a>--}}
                        {{--I would like to meet you to discuss the latest news about--}}
                        {{--the arrival of the new theme. They say it is going to be one the--}}
                        {{--best themes on the market--}}
                    {{--</p>--}}
                    {{--<div class="attachment">--}}
                        {{--<h4>Attachments:</h4>--}}
                        {{--<p class="filename">--}}
                            {{--Theme-thumbnail-image.jpg--}}
                        {{--</p>--}}
                        {{--<div class="pull-right">--}}
                            {{--<button class="btn btn-primary btn-sm btn-flat">Open</button>--}}
                        {{--</div>--}}
                    {{--</div><!-- /.attachment -->--}}
                {{--</div><!-- /.item -->--}}
                {{--<!-- chat item -->--}}
                {{--<div class="item">--}}
                    {{--<img src="dist/img/user3-128x128.jpg" alt="user image" class="offline"/>--}}
                    {{--<p class="message">--}}
                        {{--<a href="#" class="name">--}}
                            {{--<small class="text-muted pull-right"><i class="fa fa-clock-o"></i> 5:15</small>--}}
                            {{--Alexander Pierce--}}
                        {{--</a>--}}
                        {{--I would like to meet you to discuss the latest news about--}}
                        {{--the arrival of the new theme. They say it is going to be one the--}}
                        {{--best themes on the market--}}
                    {{--</p>--}}
                {{--</div><!-- /.item -->--}}
                {{--<!-- chat item -->--}}
                {{--<div class="item">--}}
                    {{--<img src="dist/img/user2-160x160.jpg" alt="user image" class="offline"/>--}}
                    {{--<p class="message">--}}
                        {{--<a href="#" class="name">--}}
                            {{--<small class="text-muted pull-right"><i class="fa fa-clock-o"></i> 5:30</small>--}}
                            {{--Susan Doe--}}
                        {{--</a>--}}
                        {{--I would like to meet you to discuss the latest news about--}}
                        {{--the arrival of the new theme. They say it is going to be one the--}}
                        {{--best themes on the market--}}
                    {{--</p>--}}
                {{--</div><!-- /.item -->--}}
            {{--</div><!-- /.chat -->--}}
            {{--<div class="box-footer">--}}
                {{--<div class="input-group">--}}
                    {{--<input class="form-control" placeholder="Type message..."/>--}}
                    {{--<div class="input-group-btn">--}}
                        {{--<button class="btn btn-success"><i class="fa fa-plus"></i></button>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div><!-- /.box (chat box) -->--}}
        {{--<!-- TO DO List -->--}}
        {{--<div class="box box-primary">--}}
            {{--<div class="box-header">--}}
                {{--<i class="ion ion-clipboard"></i>--}}
                {{--<h3 class="box-title">To Do List</h3>--}}
                {{--<div class="box-tools pull-right">--}}
                    {{--<ul class="pagination pagination-sm inline">--}}
                        {{--<li><a href="#">&laquo;</a></li>--}}
                        {{--<li><a href="#">1</a></li>--}}
                        {{--<li><a href="#">2</a></li>--}}
                        {{--<li><a href="#">3</a></li>--}}
                        {{--<li><a href="#">&raquo;</a></li>--}}
                    {{--</ul>--}}
                {{--</div>--}}
            {{--</div><!-- /.box-header -->--}}
            {{--<div class="box-body">--}}
                {{--<ul class="todo-list">--}}
                    {{--<li>--}}
                        {{--<!-- drag handle -->--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<!-- checkbox -->--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<!-- todo text -->--}}
                        {{--<span class="text">Design a nice theme</span>--}}
                        {{--<!-- Emphasis label -->--}}
                        {{--<small class="label label-danger"><i class="fa fa-clock-o"></i> 2 mins</small>--}}
                        {{--<!-- General tools such as edit or delete-->--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<span class="text">Make the theme responsive</span>--}}
                        {{--<small class="label label-info"><i class="fa fa-clock-o"></i> 4 hours</small>--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<span class="text">Let theme shine like a star</span>--}}
                        {{--<small class="label label-warning"><i class="fa fa-clock-o"></i> 1 day</small>--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<span class="text">Let theme shine like a star</span>--}}
                        {{--<small class="label label-success"><i class="fa fa-clock-o"></i> 3 days</small>--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<span class="text">Check your messages and notifications</span>--}}
                        {{--<small class="label label-primary"><i class="fa fa-clock-o"></i> 1 week</small>--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                    {{--<li>--}}
                        {{--<span class="handle">--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--<i class="fa fa-ellipsis-v"></i>--}}
                        {{--</span>--}}
                        {{--<input type="checkbox" value="" name=""/>--}}
                        {{--<span class="text">Let theme shine like a star</span>--}}
                        {{--<small class="label label-default"><i class="fa fa-clock-o"></i> 1 month</small>--}}
                        {{--<div class="tools">--}}
                            {{--<i class="fa fa-edit"></i>--}}
                            {{--<i class="fa fa-trash-o"></i>--}}
                        {{--</div>--}}
                    {{--</li>--}}
                {{--</ul>--}}
            {{--</div><!-- /.box-body -->--}}
            {{--<div class="box-footer clearfix no-border">--}}
                {{--<button class="btn btn-default pull-right"><i class="fa fa-plus"></i> Add item</button>--}}
            {{--</div>--}}
        {{--</div><!-- /.box -->--}}
        {{--<!-- quick email widget -->--}}
        {{--<div class="box box-info">--}}
            {{--<div class="box-header">--}}
                {{--<i class="fa fa-envelope"></i>--}}
                {{--<h3 class="box-title">Quick Email</h3>--}}
                {{--<!-- tools box -->--}}
                {{--<div class="pull-right box-tools">--}}
                    {{--<button class="btn btn-info btn-sm" data-widget="remove" data-toggle="tooltip" title="Remove"><i class="fa fa-times"></i></button>--}}
                {{--</div><!-- /. tools -->--}}
            {{--</div>--}}
            {{--<div class="box-body">--}}
                {{--<form action="#" method="post">--}}
                    {{--<div class="form-group">--}}
                        {{--<input type="email" class="form-control" name="emailto" placeholder="Email to:"/>--}}
                    {{--</div>--}}
                    {{--<div class="form-group">--}}
                        {{--<input type="text" class="form-control" name="subject" placeholder="Subject"/>--}}
                    {{--</div>--}}
                    {{--<div>--}}
                        {{--<textarea class="textarea" placeholder="Message" style="width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>--}}
                    {{--</div>--}}
                {{--</form>--}}
            {{--</div>--}}
            {{--<div class="box-footer clearfix">--}}
                {{--<button class="pull-right btn btn-default" id="sendEmail">Send <i class="fa fa-arrow-circle-right"></i></button>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</section><!-- /.Left col -->--}}
    {{--<!-- right col (We are only adding the ID to make the widgets sortable)-->--}}
    {{--<section class="col-lg-5 connectedSortable">--}}
        {{--<!-- Map box -->--}}
        {{--<div class="box box-solid bg-light-blue-gradient">--}}
            {{--<div class="box-header">--}}
                {{--<!-- tools box -->--}}
                {{--<div class="pull-right box-tools">--}}
                    {{--<button class="btn btn-primary btn-sm daterange pull-right" data-toggle="tooltip" title="Date range"><i class="fa fa-calendar"></i></button>--}}
                    {{--<button class="btn btn-primary btn-sm pull-right" data-widget='collapse' data-toggle="tooltip" title="Collapse" style="margin-right: 5px;"><i class="fa fa-minus"></i></button>--}}
                {{--</div><!-- /. tools -->--}}
                {{--<i class="fa fa-map-marker"></i>--}}
                {{--<h3 class="box-title">--}}
                    {{--Visitors--}}
                {{--</h3>--}}
            {{--</div>--}}
            {{--<div class="box-body">--}}
                {{--<div id="world-map" style="height: 250px; width: 100%;"></div>--}}
            {{--</div><!-- /.box-body-->--}}
            {{--<div class="box-footer no-border">--}}
                {{--<div class="row">--}}
                    {{--<div class="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">--}}
                        {{--<div id="sparkline-1"></div>--}}
                        {{--<div class="knob-label">Visitors</div>--}}
                    {{--</div><!-- ./col -->--}}
                    {{--<div class="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">--}}
                        {{--<div id="sparkline-2"></div>--}}
                        {{--<div class="knob-label">Online</div>--}}
                    {{--</div><!-- ./col -->--}}
                    {{--<div class="col-xs-4 text-center">--}}
                        {{--<div id="sparkline-3"></div>--}}
                        {{--<div class="knob-label">Exists</div>--}}
                    {{--</div><!-- ./col -->--}}
                {{--</div><!-- /.row -->--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<!-- /.box -->--}}
        {{--<!-- solid sales graph -->--}}
        {{--<div class="box box-solid bg-teal-gradient">--}}
            {{--<div class="box-header">--}}
                {{--<i class="fa fa-th"></i>--}}
                {{--<h3 class="box-title">Sales Graph</h3>--}}
                {{--<div class="box-tools pull-right">--}}
                    {{--<button class="btn bg-teal btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>--}}
                    {{--<button class="btn bg-teal btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="box-body border-radius-none">--}}
                {{--<div class="chart" id="line-chart" style="height: 250px;"></div>--}}
            {{--</div><!-- /.box-body -->--}}
            {{--<div class="box-footer no-border">--}}
                {{--<div class="row">--}}
                    {{--<div class="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">--}}
                        {{--<input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60" data-fgColor="#39CCCC"/>--}}
                        {{--<div class="knob-label">Mail-Orders</div>--}}
                    {{--</div><!-- ./col -->--}}
                    {{--<div class="col-xs-4 text-center" style="border-right: 1px solid #f4f4f4">--}}
                        {{--<input type="text" class="knob" data-readonly="true" value="50" data-width="60" data-height="60" data-fgColor="#39CCCC"/>--}}
                        {{--<div class="knob-label">Online</div>--}}
                    {{--</div><!-- ./col -->--}}
                    {{--<div class="col-xs-4 text-center">--}}
                        {{--<input type="text" class="knob" data-readonly="true" value="30" data-width="60" data-height="60" data-fgColor="#39CCCC"/>--}}
                        {{--<div class="knob-label">In-Store</div>--}}
                    {{--</div><!-- ./col -->--}}
                {{--</div><!-- /.row -->--}}
            {{--</div><!-- /.box-footer -->--}}
        {{--</div><!-- /.box -->--}}
        {{--<!-- Calendar -->--}}
        {{--<div class="box box-solid bg-green-gradient">--}}
            {{--<div class="box-header">--}}
                {{--<i class="fa fa-calendar"></i>--}}
                {{--<h3 class="box-title">Calendar</h3>--}}
                {{--<!-- tools box -->--}}
                {{--<div class="pull-right box-tools">--}}
                    {{--<!-- button with a dropdown -->--}}
                    {{--<div class="btn-group">--}}
                        {{--<button class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown"><i class="fa fa-bars"></i></button>--}}
                        {{--<ul class="dropdown-menu pull-right" role="menu">--}}
                            {{--<li><a href="#">Add new event</a></li>--}}
                            {{--<li><a href="#">Clear events</a></li>--}}
                            {{--<li class="divider"></li>--}}
                            {{--<li><a href="#">View calendar</a></li>--}}
                        {{--</ul>--}}
                    {{--</div>--}}
                    {{--<button class="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>--}}
                    {{--<button class="btn btn-success btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>--}}
                {{--</div><!-- /. tools -->--}}
            {{--</div><!-- /.box-header -->--}}
            {{--<div class="box-body no-padding">--}}
                {{--<!--The calendar -->--}}
                {{--<div id="calendar" style="width: 100%"></div>--}}
            {{--</div><!-- /.box-body -->--}}
            {{--<div class="box-footer text-black">--}}
                {{--<div class="row">--}}
                    {{--<div class="col-sm-6">--}}
                        {{--<!-- Progress bars -->--}}
                        {{--<div class="clearfix">--}}
                            {{--<span class="pull-left">Task #1</span>--}}
                            {{--<small class="pull-right">90%</small>--}}
                        {{--</div>--}}
                        {{--<div class="progress xs">--}}
                            {{--<div class="progress-bar progress-bar-green" style="width: 90%;"></div>--}}
                        {{--</div>--}}
                        {{--<div class="clearfix">--}}
                            {{--<span class="pull-left">Task #2</span>--}}
                            {{--<small class="pull-right">70%</small>--}}
                        {{--</div>--}}
                        {{--<div class="progress xs">--}}
                            {{--<div class="progress-bar progress-bar-green" style="width: 70%;"></div>--}}
                        {{--</div>--}}
                    {{--</div><!-- /.col -->--}}
                    {{--<div class="col-sm-6">--}}
                        {{--<div class="clearfix">--}}
                            {{--<span class="pull-left">Task #3</span>--}}
                            {{--<small class="pull-right">60%</small>--}}
                        {{--</div>--}}
                        {{--<div class="progress xs">--}}
                            {{--<div class="progress-bar progress-bar-green" style="width: 60%;"></div>--}}
                        {{--</div>--}}
                        {{--<div class="clearfix">--}}
                            {{--<span class="pull-left">Task #4</span>--}}
                            {{--<small class="pull-right">40%</small>--}}
                        {{--</div>--}}
                        {{--<div class="progress xs">--}}
                            {{--<div class="progress-bar progress-bar-green" style="width: 40%;"></div>--}}
                        {{--</div>--}}
                    {{--</div><!-- /.col -->--}}
                {{--</div><!-- /.row -->--}}
            {{--</div>--}}
        {{--</div><!-- /.box -->--}}
    {{--</section><!-- right col -->--}}
</div><!-- /.row (main row) -->
@endsection