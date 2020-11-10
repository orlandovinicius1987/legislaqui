@extends('layouts.alerj')

@section('content')

    @if (\Session::has('error_msg'))
        <div class="alert alert-danger">{{ \Session::get('error_msg') }}</div>
    @endif




    <div class="d-flex h-100">
        <div class="row align-self-center w-100 login">
            <div class="col-md-8 col-lg-6 mx-auto">
                <div class="card">
                    <div class="card-header">

                        <h3>
                            Registre-se
                        </h3>

                        <div class="after-auth">
                            <h5>
                                Crie uma conta de usuário usando o formulário abaixo.
                            </h5>
                        </div>

                    </div>

                    <div class="card-body">

                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                            {!! csrf_field() !!}

                            {{ Form::hidden('uuid', Cookie::get('uuid')) }}

                            <div class="form-group{{ $errors->has('name') && (\Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }} row">
                                    <label class="col-12 control-label">Nome</label>
                                    <div class="col-12 ">
                                        <input type="text" class="form-control" name="name" value="{{ old('name') }}" placeholder="Insira seu nome">
                                        @if ($errors->has('name') && (Session::get('last_auth_attempt') === 'register'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                            </div>

                            <div class="form-group{{ $errors->has('email') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }} row">

                                    <label class="col-md-12 control-label">E-Mail</label>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="email" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('email') : '' }}" placeholder="Insira seu email">

                                        @if ($errors->has('email') && (Session::get('last_auth_attempt') === 'register'))
                                            <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                        @endif
                                    </div>
                            </div>



                            <div class="form-group{{ $errors->has('cpf') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }} row">
                                <label class="col-md-12 control-label">CPF</label>

                                <div class="col-md-12">
                                    <input required="required" class="form-control" id="cpf" name="cpf" type="text" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">

{{--                                    <input id="cfp" type="text" class="campo" name="cpf" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">--}}

                                    @if ($errors->has('cpf') && (Session::get('last_auth_attempt') === 'register'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('cpf') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>


                            <div class="row form-group{{ $errors->has('password') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">

                                <label class="col-md-12 control-label">
                                    Senha
                                </label>

                                <div class="col-md-12">
                                    <input type="password" class="form-control" name="password" placeholder="Mínimo de 8 dígitos">

                                    @if ($errors->has('password') && (Session::get('last_auth_attempt') === 'register'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>


                            <div class="row form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">

                                <label class="col-md-12 control-label">
                                    Confirme a Senha
                                </label>

                                <div class="col-md-12">
                                    <input type="password" class="form-control" name="password_confirmation" placeholder="Confirmar sua senha">

                                    @if ($errors->has('password_confirmation'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>

                            <div class="row form-group{{ $errors->has('uf') ? ' has-error' : '' }}">

                                <label class="col-md-12 control-label">
                                    {{ Form::Label('uf', 'UF:') }}
                                </label>

                                <div class="col-md-12">


                                    {{ Form::select('uf', $uf, null, ['class' => 'form-control']) }}

                                    @if ($errors->has('uf'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('uf') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>


                            <div class="row form-group{{ $errors->has('uf') ? ' has-error' : '' }}">

                                <label class="col-md-12 control-label">

                                </label>

                                <div class="col-md-12">

                                    <input class="" type="checkbox" name="terms" id="terms" required style="">

                                    Li e concordo com os <a href="{{route('terms')}}" target="_blank">Termos de Uso</a> e com a <a href="{{route('privacy-policy')}}" target="_blank">Política de Privacidade</a>.

                                </div>
                            </div>

                            @include('partials.recaptcha-v2-form')

                            <div class="form-group row mb-0 text-right">
                                <div class="col-md-12">
                                    <button dusk="registerButton" type="submit" class="btn btn-primary">
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







{{--


    <!-- Registro -->
    <div class="col-md-7 col-12 ">
        <div class="panel panel-default panel-bg">
            <div class="panel-heading-login">
                <div class="col-12  auth text-center">
                    <h3>
                        Registro TESTE
                    </h3>
                </div>
                <div class="after-auth"><h4>Crie uma conta de usuário usando o formulário abaixo.</h4></div>

            </div>

            <div class="panel-body register">
                <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
                    {!! csrf_field() !!}

                    {{ Form::hidden('uuid', Cookie::get('uuid')) }}

                    <div class="form-group{{ $errors->has('name') && (\Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">Nome</label>

                        <div class="col-12  col-md-8">
                            <input type="text" class="form-control" name="name" value="{{ old('name') }}" placeholder="Insira seu nome">
                            @if ($errors->has('name') && (Session::get('last_auth_attempt') === 'register'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('email') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">E-Mail</label>

                        <div class="col-12  col-md-8">
                            <input type="text" class="form-control" name="email" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('email') : '' }}" placeholder="Insira seu email">

                            @if ($errors->has('email') && (Session::get('last_auth_attempt') === 'register'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('cpf') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">CPF</label>

                        <div class="col-12  col-md-8">
                            <input required="required" class="form-control" id="cpf" name="cpf" type="text" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">

                            <input id="cfp" type="text" class="campo" name="cpf" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">

                            @if ($errors->has('cpf') && (Session::get('last_auth_attempt') === 'register'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('cpf') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('password') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">Senha</label>

                        <div class="col-12  col-md-8">
                            <input type="password" class="form-control" name="password" placeholder="Mínimo de 8 dígitos">

                            @if ($errors->has('password') && (Session::get('last_auth_attempt') === 'register'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">Confirme a Senha</label>

                        <div class="col-12  col-md-8">
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Confirmar sua senha">

                            @if ($errors->has('password_confirmation'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>


                    <div class="form-group{{ $errors->has('uf') ? ' has-error' : '' }}">
                        <label class="col-12  col-md-4 control-label">UF</label>

                        <div class="col-12  col-md-8">

                            {{ Form::Label('uf', 'UF:') }}

                            {{ Form::select('uf', $uf, null, ['class' => 'form-control']) }}

                            @if ($errors->has('uf'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('uf') }}</strong>
                                    </span>
                            @endif
                        </div>
                    </div>



                --}}
{{--    {{Location::get()->countryCode}}--}}{{--





                    <div class="form-group{{ $errors->register->has('g-recaptcha-response') ? ' has-error text-center' : '' }}">
                        <div class="col-12 ">
                            {!! app('captcha')->display() !!}

                            @if ($errors->register->has('g-recaptcha-response'))
                                <span class="help-block">
                                        <strong>{{ $errors->register->first('g-recaptcha-response') }}</strong>
                                    </span>
                            @endif

                        </div>
                    </div>

                    <div class="form-group">

                        <div class="col-12  col-md-8 col-md-offset-4">
                            <button dusk="registerButton" type="submit" class="btn btn-primary">
                                <i class="fa fa-btn fa-user fa-fw"></i>&nbsp; Registro
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
--}}

@endsection
