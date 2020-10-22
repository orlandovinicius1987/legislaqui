@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

{{--@if (Session::has('flash_msg'))--}}
    {{--<div class="alert alert-info">--}}
        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>--}}
        {{--{!! Session::get('flash_msg') !!}--}}
    {{--</div>--}}
{{--@endif--}}

@if(!empty(Session::get('flash_msg')))
    <div id="flash-overlay-modal" class="modal fade {{ $modalClass ?? '' }}">
        <div class="modal-dialog">
            <div class="modal-content">
                {{--<div class="modal-header">--}}
                {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--}}
                {{--</div>--}}

                <div class="modal-body">
                    <div class="alert alert-info">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        {!! Session::get('flash_msg') !!}
                    </div>
                </div>

                {{--<div class="modal-footer">--}}
                {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--}}
                {{--</div>--}}
            </div>
        </div>
    </div>

@endif

{{--@if (Session::has('error_msg'))--}}
    {{--<div class="alert alert-danger">--}}
        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>--}}
        {{--{!! Session::get('error_msg') !!}--}}
    {{--</div>--}}
{{--@endif--}}

@if(!empty(Session::get('error_msg')))



    <div id="flash-overlay-modal" class="modal fade {{ $modalClass ?? '' }}">
        <div class="modal-dialog">
            <div class="modal-content">
                {{--<div class="modal-header">--}}
                {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--}}
                {{--</div>--}}

                <div class="modal-body">
                    <div class="alert alert-danger">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        {{Session::get('error_msg')}}

                    </div>
                </div>

                {{--<div class="modal-footer">--}}
                {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--}}
                {{--</div>--}}
            </div>
        </div>
    </div>

@endif

{{--@if(Session::has('proposal_crud_msg'))--}}
    {{--<div class="alert alert-info">--}}
        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>--}}
        {{--{!! Session::get('proposal_crud_msg') ? : $proposal_crud_msg !!}--}}
    {{--</div>--}}
{{--@endif--}}

@if(!empty(Session::get('proposal_crud_msg')))

    <div id="flash-overlay-modal" class="modal fade {{ $modalClass ?? '' }}">
        <div class="modal-dialog">
            <div class="modal-content">
                {{--<div class="modal-header">--}}
                {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--}}
                {{--</div>--}}

                <div class="modal-body">
                    <div class="alert alert-info">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        {!! Session::get('proposal_crud_msg') ? : $proposal_crud_msg !!}
                    </div>
                </div>

                {{--<div class="modal-footer">--}}
                {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--}}
                {{--</div>--}}
            </div>
        </div>
    </div>

@endif

{{--@if(Session::has('user_crud_msg'))--}}
    {{--<div class="alert alert-info">--}}
        {{--<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>--}}
        {{--{!! Session::get('user_crud_msg') !!}--}}
    {{--</div>--}}
{{--@endif--}}

@if(!empty(Session::get('user_crud_msg')))

    <div id="flash-overlay-modal" class="modal fade {{ $modalClass ?? '' }}">
        <div class="modal-dialog">
            <div class="modal-content">
                {{--<div class="modal-header">--}}
                {{--<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>--}}
                {{--</div>--}}

                <div class="modal-body">
                    <div class="alert alert-info">
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                        {!! Session::get('user_crud_msg') !!}
                    </div>
                </div>

                {{--<div class="modal-footer">--}}
                {{--<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>--}}
                {{--</div>--}}
            </div>
        </div>
    </div>

@endif

@if(Session::has('admin_user_crud_msg'))
    <div class="alert alert-info">{!! Session::get('admin_user_crud_msg') !!}</div>
@endif

@if(Session::has('admin_proposal_crud_msg'))
    <div class="alert alert-info">{!! Session::get('admin_proposal_crud_msg') !!}</div>
@endif

@if (Session::has('admin_flash_msg'))
    <div class="alert alert-info">{!! Session::get('admin_flash_msg') !!}</div>
@endif

@if (Session::has('admin_error_msg'))
    <div class="alert alert-danger">{!! Session::get('admin_error_msg') !!}</div>
@endif

@if (Session::has('flash_msg'))
<div class="alert alert-info"> {!! Session::get('flash_msg') !!}</div>
@endif
{{----}}
@if (Session::has('error_msg'))
<div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
@endif
{{----}}
@if(Session::has('user_crud_msg'))
<div class="alert alert-info">{{ Session::get('user_crud_msg') }}</div>
@endif


<script>
    $(function() {
        $('#flash-overlay-modal').modal('show');
        $('#flash-overlay-modal').delay(3000).fadeOut(350);
        $('#flash-overlay-modal').promise().done(function(){
            // will be called when all the animations on the queue finish
            $('#flash-overlay-modal').modal('hide');
        });
       $('#flash-overlay-modal').modal('hide');
    });
</script>
