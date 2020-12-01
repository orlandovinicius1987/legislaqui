<?php

namespace App\Http\Controllers\Auth;

use App\Data\Models\City;
use App\Data\Models\State;
use App\Data\Models\User;
use App\Http\Controllers\Controller;
use App\Rules\Contact;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use App\Support\Constants;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers {
        register as traitRegister;
    }

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function getRecaptchaRules()
    {
        return config('recaptcha.enabled')
            ? [recaptchaFieldName() => recaptchaRuleName()]
            : [];
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make(
            $data,
            array_merge(
                [
                    'name' => ['required', 'string', 'max:255'],
                    'email' => [
                        'required',
                        'string',
                        'email',
                        'max:255',
                        'unique:users'
                    ],
                    'terms' => 'required',
                    'password' => ['required', 'string', 'min:8', 'confirmed'],
                    'city_id' => ['required'],
                    'uf' => ['required'],
                    'whatsapp' => [new Contact('whatsapp', 'Whatsapp')]
                ],
                $this->getRecaptchaRules()
            )
        );
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
            'password' => Hash::make($data['password']),
            'uf' => $data['uf'],
            'city_id' => $data['city_id'],
            'role_id' => get_role_id(Constants::ROLE_CIDADAO),
            'cpf' => only_numbers($data['cpf']),
            'whatsapp' => only_numbers($data['whatsapp']),
            'uuid' => $data['uuid']
        ]);
    }

    // Register Method Overload
    public function register(Request $request)
    {
        // Request comes from Register form
        \Session::put('last_auth_attempt', 'register');

        redirect('auth.login');

        // If Captcha is OK, then register User Request
        $register = $this->traitRegister($request);

        \Session::flash('flash_msg', 'Registro feito com Sucesso.');

        return $register;
    }

    // showRegistrationForm Method Overload
    public function showRegistrationForm()
    {
        $cities = City::all()->pluck('name', 'id');

        return view('auth.register', compact('cities'));
    }
}
