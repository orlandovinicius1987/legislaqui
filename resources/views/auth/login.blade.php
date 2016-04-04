@extends('layouts.alerj')

@section('content')

    @if (Session::has('error_msg'))
        <div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
    @endif

<div class="">
    <div class="row">
        <div class="col-xs-12">
            <div class="panel panel-default panel-bg">
                <div class="panel-heading"><h3>Login</h3></div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">

                            {!! csrf_field() !!}

                            <div class="form-group{{ $errors->has('email') && Session::get('last_auth_attempt') == 'login' ? ' has-error' : '' }}">

                                <label class="col-xs-4 control-label">E-Mail</label>

                                <div class="col-xs-8">
                                    <input type="email" class="campo" name="email" value="{{ old('email') }}" placeholder="Insira seu email">

                                    @if ($errors->has('email') && Session::get('last_auth_attempt') == 'login')
                                        <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') && Session::get('last_auth_attempt') == 'login' ? ' has-error' : '' }}">
                                <label class="col-xs-4 control-label">Senha</label>

                                <div class="col-xs-8">
                                    <input type="password" class="campo" name="password" placeholder="Insira sua senha">

                                    @if ($errors->has('password') && Session::get('last_auth_attempt') == 'login')
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-xs-8 col-xs-offset-4">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"> Permanecer conectado
                                        </label>
                                    </div>
                                </div>
                            </div>

                        <div class="form-group">
                            <div class="col-xs-8 col-xs-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-sign-in fa-fw"></i>&nbsp; Login
                                </button>

                                <a class="btn btn-link form-forgot-pwd" href="{{ url('/password/reset') }}">Esqueceu sua Senha?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
       <!-- Registro -->
        <div class="col-xs-12">
            <div class="panel panel-default panel-bg">
                <div class="panel-heading"><h3>Registro</h3></div>
                <div class="panel-body register">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                        {!! csrf_field() !!}

                        <div class="form-group{{ $errors->has('name') && Session::get('last_auth_attempt') == 'register' ? ' has-error' : '' }}">
                            <label class="col-xs-4 control-label">Nome</label>

                            <div class="col-xs-8">
                                <input type="text" class="campo" name="name" value="{{ old('name') }}" placeholder="Insira seu nome">
                                @if ($errors->has('name') && Session::get('last_auth_attempt') == 'register')
                                    <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('email') && Session::get('last_auth_attempt') == 'register' ? ' has-error' : '' }}">
                            <label class="col-xs-4 control-label">E-Mail</label>

                            <div class="col-xs-8">
                                <input type="email" class="campo" name="email" value="{{ old('email') }}" placeholder="Insira seu email">

                                @if ($errors->has('email') && Session::get('last_auth_attempt') == 'register')
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') && Session::get('last_auth_attempt') == 'register' ? ' has-error' : '' }}">
                            <label class="col-xs-4 control-label">Senha</label>

                            <div class="col-xs-8">
                                <input type="password" class="campo" name="password" placeholder="Insira sua senha">

                                @if ($errors->has('password') && Session::get('last_auth_attempt') == 'register')
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            <label class="col-xs-4 control-label">Confirme a Senha</label>

                            <div class="col-xs-8">
                                <input type="password" class="campo" name="password_confirmation" placeholder="Confirme sua senha">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('uf') ? ' has-error' : '' }}">
                            <label class="col-xs-4 control-label">UF</label>

                            <div class="col-xs-8">

                                {{-- Form::Label('uf', 'UF:') --}}
                                {{ Form::select('uf', $uf, null, ['class' => 'campo']) }}

                                @if ($errors->has('uf'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('uf') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-8 col-xs-offset-4">
                                {!! app('captcha')->display() !!}
                                {{--<div class="g-recaptcha" data-sitekey="6Ld4hBwTAAAAAGysW_DwpbnwzIKmWtXyAsxsIrBf"></div>--}}
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-xs-8 col-xs-offset-4">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fa fa-btn fa-user fa-fw"></i>&nbsp; Registro
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
