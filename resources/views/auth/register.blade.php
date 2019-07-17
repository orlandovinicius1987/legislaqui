<!-- Registro -->
<div class="col-md-7 col-xs-12">
    <div class="panel panel-default panel-bg">
        <div class="panel-heading-login">
            <div class="col-xs-4 auth"><h3>Registro</h3></div>
            <div class="after-auth"><h4>Crie uma conta de usuário usando o formulário abaixo.</h4></div>
        </div>
        <div class="panel-body register">
            <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                {!! csrf_field() !!}

                {{ Form::hidden('uuid', Cookie::get('uuid')) }}

                <div class="form-group{{ $errors->has('name') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                    <label class="col-xs-4 control-label">Nome</label>

                    <div class="col-xs-8">
                        <input type="text" class="campo" name="name" value="{{ old('name') }}" placeholder="Insira seu nome">
                        @if ($errors->has('name') && (Session::get('last_auth_attempt') === 'register'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('email') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                    <label class="col-xs-4 control-label">E-Mail</label>

                    <div class="col-xs-8">
                        <input type="text" class="campo" name="email" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('email') : '' }}" placeholder="Insira seu email">

                        @if ($errors->has('email') && (Session::get('last_auth_attempt') === 'register'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('cpf') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                    <label class="col-xs-4 control-label">CPF</label>

                    <div class="col-xs-8">
                        <input required="required" class="campo" id="cpf" name="cpf" type="text" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">

                        {{--<input id="cfp" type="text" class="campo" name="cpf" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">--}}

                        @if ($errors->has('cpf') && (Session::get('last_auth_attempt') === 'register'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('cpf') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('password') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                    <label class="col-xs-4 control-label">Senha</label>

                    <div class="col-xs-8">
                        <input type="password" class="campo" name="password" placeholder="Mínimo de 8 dígitos">

                        @if ($errors->has('password') && (Session::get('last_auth_attempt') === 'register'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                    <label class="col-xs-4 control-label">Confirme a Senha</label>

                    <div class="col-xs-8">
                        <input type="password" class="campo" name="password_confirmation" placeholder="Confirmar sua senha">

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

                        {{--Form::Label('uf', 'UF:')--}}
                        {{ Form::select('uf', $uf, null, ['class' => 'campo']) }}

                        @if ($errors->has('uf'))
                            <span class="help-block">
                                        <strong>{{ $errors->first('uf') }}</strong>
                                    </span>
                        @endif
                    </div>
                </div>

                {{--{{Location::get()->countryCode}}--}}

                <div class="form-group{{ $errors->register->has('g-recaptcha-response') ? ' has-error text-center' : '' }}">
                    <div class="col-xs-12">
                        {!! app('captcha')->display() !!}

                        @if ($errors->register->has('g-recaptcha-response'))
                            <span class="help-block">
                                        <strong>{{ $errors->register->first('g-recaptcha-response') }}</strong>
                                    </span>
                        @endif

                    </div>
                </div>

                <div class="form-group">
                    <div class="col-xs-8 col-xs-offset-4">
                        <button dusk="registerButton" type="submit" class="btn btn-primary">
                            <i class="fa fa-btn fa-user fa-fw"></i>&nbsp; Registro
                        </button>
                        <a href="redirect/facebook" id="facebookButton"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\fb_logo_blue29.png"></a>
                        <a href="redirect/twitter"><img src="www.alerj.rj.gov.br\icone_08.png"></a>
                        <a href="redirect/youtube"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\youTube48px.png"></a>
                        <a href="redirect/linkedin"><img src="www.alerj.rj.gov.br\buttonsSocialLogin\linkedin_2C_34px.png"></a>
                        <a href="redirect/instagram"><img src="www.alerj.rj.gov.br\icone_36.png"></a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

