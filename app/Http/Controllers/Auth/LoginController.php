<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Data\Models\State;
use App\Data\Models\User;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Session;
use Validator;
use Cookie;
use Laravel\Socialite\Facades\Socialite as Socialite;
use App\Support\Constants;

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



    public function redirectToProvider(string $provider)
        {
            
            try {
                $scopes = config("services.$provider.scopes") ?? [];
                
                if (count($scopes) === 0) {
                    return Socialite::driver($provider)->redirect();
                } else {
                    return Socialite::driver($provider)->scopes($scopes)->redirect();
                }
                
            } catch (\Exception $e) {
                abort(404);
            }
        }
    public function handleProviderCallback(string $provider)
        {
           
            try {
                $data = Socialite::driver($provider)->stateless()->user();
                
                    return $this->handleSocialUser($provider, $data);
            } catch (\Exception $e) {
                dd($e);
                return redirect('login')->withErrors(['authentication_deny' => 'Login with '.ucfirst($provider).' failed. Please try again.']);
            }
        }
    public function handleSocialUser(string $provider, object $data)
        {
            $user = User::where([
                "social->{$provider}->id" => $data->id,
            ])->first();
            /* if (!$user) {
                        $user = User::where([
                            'email' => $data->email,
                        ])->first();
                    } */
            if (!$user) {
                        return $this->createUserWithSocialData($provider, $data);
                    }
    $social = $user->social;
            $social[$provider] = [
                'id' => $data->id,
                'token' => $data->token
            ];
            $user->social = $social;
            $user->save();
    return $this->socialLogin($user);
        }
    public function createUserWithSocialData(string $provider, object $data)
        {
            try {
                $user = new User;
                $user->name = $data->name;
                $user->email = $data->email;
                $user->social = [
                    $provider => [
                        'id' => $data->id,
                        'token' => $data->token,
                    ],
                ];
                $user->role_id = get_role_id(Constants::ROLE_CIDADAO);
                $user->uuid = Cookie::get('uuid');

                // Check support verify or not
                if ($user instanceof MustVerifyEmail) {
                    $user->markEmailAsVerified();
                }
                
                $user->save();
            return $this->socialLogin($user);
            } catch (Exception $e) {
                
                return redirect('login')->withErrors(['authentication_deny' => 'Login with '.ucfirst($provider).' failed. Please try again.']);
            }
        }
    public function socialLogin(User $user)
        {
            
            auth()->loginUsingId($user->id);
            return redirect($this->redirectTo);
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
                    'cpf' => 'required'
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
            'role_id' => get_role_id(Constants::ROLE_CIDADAO),
            'cpf' => $data['cpf'],
            'uuid' => $data['uuid']
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
        $user = Auth::user();
        $user->update([
            'last_login_at' => Carbon::now()
        ]);

        Session::flash('flash_msg', 'Login feito com Sucesso.');

        return $login;
    }

    // Register Method Overload
    public function register(Request $request)
    {
        // Request comes from Register form
        Session::put('last_auth_attempt', 'register');

        // If Captcha is OK, then register User Request
        $register = $this->traitRegister($request);

        Session::flash('flash_msg', 'Registro feito com Sucesso.');

        return $register;
    }
}
