<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\State;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Session;
use Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesUsers {
        login as traitLogin;
    }

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
            'cpf' => 'required',
        ]);
    }

    /**
     * Create a new user (citizen - 99) instance after a valid registration.
     *
     * @param array $data
     *
     * @return model user
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'uf' => $data['uf'],
            'role_id' => 99,
            'cpf' => $data['cpf'],
            'uuid' => $data['uuid'],
        ]);
    }

    // showRegistrationForm Method Overload
    public function showRegistrationForm()
    {
        if (property_exists($this, 'registerView')) {
            return view($this->registerView);
        }

        $uf = State::all()->pluck('nome', 'uf');

        return view('auth.register', compact('uf'));
    }

    // showLoginForm Method Overload
    public function showLoginForm()
    {
        if (property_exists($this, 'loginView')) {
            return view($this->loginView);
        }

        if (view()->exists('auth.authenticate')) {
            return view('auth.authenticate');
        }

        $uf = State::all()->pluck('nome', 'uf');

        return view('auth.login', compact('uf'));
    }

    // Login Method Overload
    public function login(Request $request)
    {
        // Request comes from Login form
        Session::put('last_auth_attempt', 'login');

        $login = $this->traitLogin($request);

        Session::flash('flash_msg', 'Login feito com Sucesso.');

        return $login;
    }

    // Register Method Overload
    public function register(Request $request)
    {
        // Request comes from Register form
        Session::put('last_auth_attempt', 'register');

        if (!app()->environment('local')) {
            // Validates Captcha
            $validate = Validator::make($request->all(), [
                'g-recaptcha-response' => 'required|captcha',
            ]);

            // Verifies if Captcha fails and redirect to register view
            if ($validate->fails()) {
                $error = Session::flash(
                    'error_msg',
                    'Por favor, clique no campo reCAPTCHA para efetuar o registro!'
                );

                return redirect()
                    ->back()
                    ->withInput($request->all(), 'register')
                    ->withErrors($validate, 'register');
            }
        }

        // If Captcha is OK, then register User Request
        $register = $this->traitRegister($request);

        Session::flash('flash_msg', 'Registro feito com Sucesso.');

        return $register;
    }
}
