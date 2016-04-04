<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\State;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Session;
use Validator;
use Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;

class AuthController extends Controller
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

    use AuthenticatesUsers, RegistersUsers {
        AuthenticatesUsers::redirectPath insteadof RegistersUsers;
        AuthenticatesUsers::getGuard insteadof RegistersUsers;
        login as traitLogin;
        register as traitRegister;
    }

    use ThrottlesLogins;

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
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'uf' => $data['uf'],
            'role_id' => 99,
        ]);
    }

    // Method Overload
    public function showRegistrationForm()
    {
        if (property_exists($this, 'registerView')) {
            return view($this->registerView);
        }

        $uf = State::lists('nome', 'uf');
        return view('auth.register', compact('uf'));
    }

    // Method Overload
    public function showLoginForm()
    {
        if (property_exists($this, 'loginView')) {
            return view($this->loginView);
        }

        if (view()->exists('auth.authenticate')) {
            return view('auth.authenticate');
        }

        $uf = State::lists('nome', 'uf');
        return view('auth.login', compact('uf'));
    }

    // Login Method Overload
    public function login(Request $request)
    {
        // Request comes from Login form
        Session::put('last_auth_attempt', 'login');

        return $this->traitLogin($request);
    }

    // Register Method Overload
    public function register(Request $request)
    {
        // Request comes from Register form
        Session::put('last_auth_attempt', 'register');

        // Verifies Captcha
        if (! $this->validateCaptcha()) {

            Session::flash('error_msg','Por favor clique no campo reCAPTCHA! para efetuar o registro.');

            return redirect()->back()->withInput(Request::all(), 'register');
        }

        $register = $this->traitRegister($request);

        Session::flash('flash_msg','Registro feito com Sucesso.');

        return $register;

    }

    // ValidateCaptcha
    protected function validateCaptcha() {

        $validate = Validator::make(Request::all(), [
            'g-recaptcha-response' => 'required|captcha'
        ]);

//        if ($validate->fails()) {
//            dd($validate->errors()->all());
//            return false;
//        }

        if ($validate->fails()) {
            return false;
        }

        return true;
    }
}
