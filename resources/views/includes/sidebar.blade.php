<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

    <style>
        .tooltip-inner {
            max-width: 350px;
            width: 350px;
        }

    </style>

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
            <div class="pull-left image">
                <img src="{{ Auth::user()->avatar }}" class="img-circle" alt="User Image" />
            </div>
            <div class="pull-left info">
                <p>{{ Auth::user()->name }}</p>
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
            </div>
        </div>
        <!-- search form -->
        {{--<form action="#" method="get" class="sidebar-form">--}}
            {{--<div class="input-group">--}}
                {{--<input type="text" name="q" class="form-control" placeholder="Search..."/>--}}
                {{--<span class="input-group-btn">--}}
                {{--<button type='submit' name='search' id='search-btn' class="btn btn-flat"><i class="fa fa-search"></i></button>--}}
                {{--</span>--}}
            {{--</div>--}}
        {{--</form>--}}
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
            <li class="header">NAVEGAÇÃO</li>
            <li class="active treeview">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>Dashboard</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    {{--<li class="active"><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>--}}
                    {{--<li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>--}}
                    <li><a>Ideias Legislativas</a></li>
                    <li><a dusk="proposalsLink" href="/admin/proposals"><i class="fa fa-hashtag text-info"></i> Todas</a></li>
                    <li><a dusk="notrespondedLink" href="/admin/proposals/notresponded" data-toggle="tooltip" data-placement="right" title="Ideias legislativas criadas pelo cidadão que ainda não foram moderadas."><i class="fa fa-cogs text-danger "></i> Aguardando Moderação</a></li>
                    <li><a dusk="approvedLink" href="/admin/proposals/approved" data-toggle="tooltip" data-placement="right" title="Ideias legislativas aprovadas pelo moderador e disponíveis publicamente para apoiamentos."><i class="fa fa-check-circle text-success"></i> Aprovadas pelo moderador</a></li>
                    <li><a dusk="disapprovedLink" href="/admin/proposals/disapproved" data-toggle="tooltip" data-placement="right" title="Ideias legislativas não aprovadas pelo moderador."><i class="fa fa-times-circle text-warning"></i> Não aprovadas pelo moderador</a></li>
                    <hr>
                    <li><a dusk="approvalGoalLink" href="/admin/proposals/approval-goal" data-toggle="tooltip" data-placement="right" title="Ideias legislativas que receberam o número necessário de apoios e aguardam o envio, pelo moderador, para a análise da comissão."><i class="fa fa-trophy text-success"></i>Atingiram {{ config('global.approvalGoal') }} apoios</a></li>
                    <li><a dusk="expiredLink" href="/admin/proposals/expired" data-toggle="tooltip" data-placement="right" title="Ideias legislativas que não receberam o número necessário de apoios até a data limite."><i class="fa fa-clock text-warning"></i> Ideias Expiradas</a></li>
                    <hr>
                    <li><a>Em aprovação</a></li>
                    <li><a dusk="inCommitteeLink" href="/admin/proposals/in-committee" data-toggle="tooltip" data-placement="right" title="Ideias legislativas aguardando a análise da comissão."><i class="fa fa-gavel text-danger"></i>Aguardando análise</a></li>
                    <li><a dusk="approvedByCommitteeLink" href="/admin/proposals/approved-by-committee" data-toggle="tooltip" data-placement="right" title="Ideias legislativas aprovadas pela comissão."><i class="fa fa-check-circle text-success"></i> Em discussão pela comissão</a></li>
                    {{-- <li><a dusk="disapprovedByCommitteeLink" href="/admin/proposals/disapproved-by-committee" data-toggle="tooltip" data-placement="right" title="Ideias legislativas não aprovadas pela comissão."><i class="fa fa-exclamation-triangle text-warning"></i> Não aprovadas pela comissão</a></li> --}}
                    <li><a dusk="billProjectLink" href="/admin/proposals/bill-project-sidebar" data-toggle="tooltip" data-placement="right" title="Ideias legislativas que se tornaram projetos de lei, os quais foram assignados no sistema."><i class="fa fa-file-alt"></i> Tornaram-se projetos de lei</a></li>
                    <hr>
                    @can('edit', Auth::user())
                    <li><a>Usuários</a></li>
                    <li><a dusk="usersLink" href="/admin/users"><i class="fa fa fa-users text-warning"></i> Todos</a></li>
                    <li><a dusk="usersCidadaoLink" href="/admin/users/?q=cidadao"><i class="fa fa-user-circle text-warning"></i> Cidadãos</a></li>
                    <li><a dusk="usersServidoresLink" href="/admin/users/?q=servidores"><i class="fa fa-id-card text-warning"></i> Servidores</a></li>

                    @endcan
                </ul>
            </li>
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-files-o"></i>--}}
                    {{--<span>Layout Options</span>--}}
                    {{--<span class="label label-primary pull-right">4</span>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>--}}
                    {{--<li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>--}}
                    {{--<li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>--}}
                    {{--<li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li>--}}
                {{--<a href="pages/widgets.html">--}}
                    {{--<i class="fa fa-th"></i> <span>Widgets</span> <small class="label pull-right bg-green">new</small>--}}
                {{--</a>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-pie-chart"></i>--}}
                    {{--<span>Charts</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>--}}
                    {{--<li><a href="pages/charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>--}}
                    {{--<li><a href="pages/charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-laptop"></i>--}}
                    {{--<span>UI Elements</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>--}}
                    {{--<li><a href="pages/UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>--}}
                    {{--<li><a href="pages/UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>--}}
                    {{--<li><a href="pages/UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>--}}
                    {{--<li><a href="pages/UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>--}}
                    {{--<li><a href="pages/UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-edit"></i> <span>Forms</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>--}}
                    {{--<li><a href="pages/forms/advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>--}}
                    {{--<li><a href="pages/forms/editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-table"></i> <span>Tables</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>--}}
                    {{--<li><a href="pages/tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li>--}}
                {{--<a href="pages/calendar.html">--}}
                    {{--<i class="fa fa-calendar"></i> <span>Calendar</span>--}}
                    {{--<small class="label pull-right bg-red">3</small>--}}
                {{--</a>--}}
            {{--</li>--}}
            {{--<li>--}}
                {{--<a href="pages/mailbox/mailbox.html">--}}
                    {{--<i class="fa fa-envelope"></i> <span>Mailbox</span>--}}
                    {{--<small class="label pull-right bg-yellow">12</small>--}}
                {{--</a>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-folder"></i> <span>Examples</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="pages/examples/invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>--}}
                    {{--<li><a href="pages/examples/login.html"><i class="fa fa-circle-o"></i> Login</a></li>--}}
                    {{--<li><a href="pages/examples/register.html"><i class="fa fa-circle-o"></i> Register</a></li>--}}
                    {{--<li><a href="pages/examples/lockscreen.html"><i class="fa fa-circle-o"></i> Lockscreen</a></li>--}}
                    {{--<li><a href="pages/examples/404.html"><i class="fa fa-circle-o"></i> 404 Error</a></li>--}}
                    {{--<li><a href="pages/examples/500.html"><i class="fa fa-circle-o"></i> 500 Error</a></li>--}}
                    {{--<li><a href="pages/examples/blank.html"><i class="fa fa-circle-o"></i> Blank Page</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li class="treeview">--}}
                {{--<a href="#">--}}
                    {{--<i class="fa fa-share"></i> <span>Multilevel</span>--}}
                    {{--<i class="fa fa-angle-left pull-right"></i>--}}
                {{--</a>--}}
                {{--<ul class="treeview-menu">--}}
                    {{--<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>--}}
                    {{--<li>--}}
                        {{--<a href="#"><i class="fa fa-circle-o"></i> Level One <i class="fa fa-angle-left pull-right"></i></a>--}}
                        {{--<ul class="treeview-menu">--}}
                            {{--<li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>--}}
                            {{--<li>--}}
                                {{--<a href="#"><i class="fa fa-circle-o"></i> Level Two <i class="fa fa-angle-left pull-right"></i></a>--}}
                                {{--<ul class="treeview-menu">--}}
                                    {{--<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>--}}
                                    {{--<li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>--}}
                                {{--</ul>--}}
                            {{--</li>--}}
                        {{--</ul>--}}
                    {{--</li>--}}
                    {{--<li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>--}}
                {{--</ul>--}}
            {{--</li>--}}
            {{--<li><a href="documentation/index.html"><i class="fa fa-book"></i> Documentation</a></li>--}}
            {{--<li class="header">LABELS</li>--}}
            {{--<li><a href="#"><i class="fa fa-circle-o text-danger"></i> Important</a></li>--}}
            {{--<li><a href="#"><i class="fa fa-circle-o text-warning"></i> Warning</a></li>--}}
            {{--<li><a href="#"><i class="fa fa-circle-o text-info"></i> Information</a></li>--}}
        </ul>
    </section>
    <!-- /.sidebar -->
</aside>
