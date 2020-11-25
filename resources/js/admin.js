// <!-- jQuery 3.0.0 -->
window.$ = window.jQuery = require('jquery')

// <!-- jQuery UI 1.11.2 -->
require('./admin/jquery-ui.min')
// <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->

$.widget.bridge('uibutton', $.ui.button)

// <!-- Bootstrap 3.3.2 JS -->
require('./admin/bootstrap/js/bootstrap.min.js')

//<!-- FastClick -->
require('./admin/plugins/fastclick/fastclick.min.js')

//<!-- InputMask -->
require('./admin/jquery.maskedinput.js')

//<!-- DataTables -->
require('./admin/plugins/datatables/jquery.dataTables.min.js')
require('./admin/plugins/datatables/dataTables.bootstrap.min.js')

window.$(function() {
    $('#dataTableUser').DataTable({
        order: [],
        oLanguage: {
            sLengthMenu: 'Mostrando _MENU_ registros',
            sSearch: 'Pesquisa:',
            sInfo: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
            sEmptyTable: 'Sem registros para mostrar',
            sInfoEmpty: 'Sem registros para mostrar',
            oPaginate: {
                sPrevious: 'Anterior',
                sNext: 'Próximo',
            },
        },
    })
    // DataTable #Todas Interface do Admin //
    $('#dataTableAdmin').DataTable(
        {
            order: [],
            oLanguage: {
                sLengthMenu: 'Mostrando _MENU_ registros',
                sSearch: 'Pesquisa:',
                sInfo: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
                sEmptyTable: 'Sem registros para mostrar',
                sInfoEmpty: 'Sem registros para mostrar',
                oPaginate: {
                    sPrevious: 'Anterior',
                    sNext: 'Próximo',
                },
            },
        },
        //                {
        //                    "columnDefs": [
        //                        { "width": "5%", "targets": 0 },
        //                        { "width": "30%", "targets": 1 },
        //                        { "width": "5%", "targets": 2 },
        //                        { "width": "5%", "targets": 3 },
        //                        { "width": "35%", "targets": 4 },
        //                        { "width": "20%", "targets": 5 },
        //                    ]
        //                }
    )
    // DataTable das demais //
    $('#dataTableAdmin2').DataTable({
        order: [],
        oLanguage: {
            sLengthMenu: 'Mostrando _MENU_ registros',
            sSearch: 'Pesquisa:',
            sInfo: 'Mostrando _START_ a _END_ de _TOTAL_ registros',
            sEmptyTable: 'Sem registros para mostrar',
            sInfoEmpty: 'Sem registros para mostrar',
            oPaginate: {
                sPrevious: 'Anterior',
                sNext: 'Próximo',
            },
        },
    })
})

require('./admin/dist/js/app.min.js')
require('./admin/dist/js/pages/dashboard.js')
require('./admin/dist/js/demo.js')

$('#myTabs a').click(function(e) {
    e.preventDefault()
    $(this).tab('show')
})

jQuery(function($) {
    $('#cpf').mask('999.999.999-99')
})

require('bootstrap-select/dist/js/bootstrap-select.min')
require('bootstrap-select/dist/js/i18n/defaults-pt_BR.js')

$('select').selectpicker()
