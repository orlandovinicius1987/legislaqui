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
                            <div class="form-group{{ $errors->has('whatsapp') && (\Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }} row">
                                <label class="col-12 control-label">Whatsapp</label>
                                <div class="col-12 ">
                                    <input
                                        v-mask='["(##)#####-####"]'
                                        type="text" class="form-control" name="whatsapp" value="{{ old('whatsapp') }}" placeholder="Insira seu Whatsapp">
                                    @if ($errors->has('whatsapp') && (Session::get('last_auth_attempt') === 'register'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('whatsapp') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <div class="form-group{{ $errors->has('cpf') && (Session::get('last_auth_attempt') === 'register') ? ' has-error' : '' }} row">
                                <label class="col-md-12 control-label">CPF</label>
                                <div class="col-md-12">
                                    <input v-mask='["###.###.###-##"]' required="required" class="form-control" id="cpf" name="cpf" type="text" value="{{ (Session::get('last_auth_attempt') === 'register') ? old('cpf') : '' }}" placeholder="Insira seu CPF">

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
                            <div class="row form-group{{ $errors->has('city_id') ? ' has-error' : '' }}">
                                <label class="col-md-12 control-label">
                                    {{ Form::Label('Município', 'Município') }}
                                </label>
                                <div class="col-md-12">
                                    {{ Form::select('city_id', $cities, null, ['data-width'=>'100%','data-style'=>'form-control', 'data-live-search'=>'true', 'title'=>'Escolha um município...']) }}
                                    @if ($errors->has('city_id'))
                                        <span class="help-block">
                                        <strong>{{ $errors->first('city_id') }}</strong>
                                    </span>
                                    @endif
                                </div>
                            </div>
                            <input type="hidden" name="uf" value="RJ">
                            <div class="row form-group{{ $errors->has('terms') ? ' has-error' : '' }}">
                                <label class="col-md-12 control-label">
                                </label>
                                <div class="col-md-12">
                                    <input class="" type="checkbox" name="terms" id="terms" required style="">
                                    Li e concordo com os <a href="{{route('terms')}}" target="_blank">Termos de Uso</a> e com a <a href="{{route('privacy-policy')}}" target="_blank">Política de Privacidade</a>.
                                </div>
                            </div>
                            @include('partials.recaptcha-v2-form')
                            <div class="form-group row mb-0">
                                <div class="col-md-12">
                                    <button dusk="registerButton" type="submit" class="btn btn-primary">
                                        <i class="fas fa-user"></i>&nbsp; Registro
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
