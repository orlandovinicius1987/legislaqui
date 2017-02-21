@extends('layouts.alerj')

@section('content')

@if (Session::has('error_msg'))
<div class="alert alert-danger">{{ Session::get('error_msg') }}</div>
@endif

<div class="login">
    <div class="row">

        {{-- Include Auth Register View --}}
        @include('auth.register')



        <div class="col-md-5 col-xs-12">
            <div class="panel panel-default panel-bg">
                <div class="panel-heading-login">
                    <div class="col-xs-4 auth"><h3>Login</h3></div>
                    <div class="after-auth"><h4>Caso já tenha uma conta de usuário, entre com seus dados abaixo.</h4></div>
                </div>
                <div class="panel-body">

                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">

                            {!! csrf_field() !!}

                            <div class="form-group{{ $errors->has('email') && (Session::get('last_auth_attempt') === 'login') ? ' has-error' : '' }}">

                                <label class="col-xs-4 control-label">E-Mail</label>

                                <div class="col-xs-8">
                                    <input type="email" class="campo" name="email" value="{{ (Session::get('last_auth_attempt') === 'login') ? old('email') : '' }}" placeholder="Insira seu email">

                                    @if ($errors->has('email') && (Session::get('last_auth_attempt') === 'login'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') && (Session::get('last_auth_attempt') === 'login') ? ' has-error' : '' }}">
                                <label class="col-xs-4 control-label">Senha</label>

                                <div class="col-xs-8">
                                    <input type="password" class="campo" name="password" placeholder="Insira sua senha">

                                    @if ($errors->has('password') && (Session::get('last_auth_attempt') === 'login'))
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

                                <a class="btn btn-link form-forgot-pwd" href="{{ url('/password/reset') }}">Esqueceu sua Senha?</a><br>
                                <a href="redirect/facebook" id="facebookButton"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\fb_logo_blue29.png"></a>
                                <a href="redirect/twitter"><img src="www.alerj.rj.gov.br\icone_08.png"></a>
                                <a href="redirect/youtube"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\youTube48px.png"></a>
                                <a href="redirect/linkedin"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\linkedin_2C_34px.png"></a>
                                <a href="redirect/instagram"><img src="www.alerj.rj.gov.br\icone_36.png"></a>
                                <div class="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
