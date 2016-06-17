<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 26/01/2016
 * Time: 13:59
 */

namespace App\Http\Controllers;

//use Illuminate\Http\Request;

use App\Http\Requests;
//use App\Http\Controllers\Controller;

use App\Proposal;
use App\User;
use App\State;
use App\Role;


use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

use Illuminate\Support\Facades\Redirect;


class AdminController extends Controller
{

    public function index ()
    {
        return view('admin.index')->with('proposals', Proposal::paginate(20))->with('users', User::all());
    }

    public function showUser($id)
    {
        //Get Proposal
        $user = User::findOrFail($id);

        return view('admin.users.show', ['user' => $user]);
    }

    /**
     * Show the form for creating a new user.
     *
     * @return Response
     */
    public function createUser()
    {
        $states = State::pluck('nome', 'uf');
        $roles = Role::pluck('role', 'id');

        return view('admin.users.create')->with('states', $states)->with('roles', $roles);
    }

    /**
     * Store a newly created user in storage.
     *
     * @return Response
     */
    public function storeUser()
    {
        $user = new User;

        $uuid = Uuid::uuid4();

        $user->name = Input::get('name');
        $user->email = Input::get('email');
        $user->password = Hash::make(Input::get('password'));

        $user->uf = Input::get('uf');
        $user->role_id = Input::get('role_id');
        $user->cpf = Input::get('cpf');

        $user->uuid = $uuid;

        $user->save();

        return Redirect::to('/admin');
//
//        $input = $formRequest->except('_token');
//
//        $input['user_id'] = Auth::user()->id;
//        $input['open'] = true;
//        $input['pub_date'] = Carbon::now();
//        $input['limit_date'] = Carbon::now();
//        //dd($input);
//
//        $proposal = Proposal::create($input);
//        event(new ProposalWasCreated($proposal));
//        //Event::fire(new ProposalWasCreated($proposal));
//
//        return Redirect::route('proposals')->with('proposal_crud_msg', 'Proposta Legislativa Incluída com Sucesso');
    }

    /**
     * Show the form for editing the specified user.
     *
     * @param  int  $id
     * @return Response
     */
    public function editUser($id)
    {
        $user = User::find($id);

        return view('admin.users.edit', [ 'user' => $user ]);
    }

    /**
     * Update the specified user in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function updateUser($id)
    {
        $user = User::find($id);

        $user->name = Input::get('name');
        $user->email = Input::get('email');
//        $user->password   = Hash::make(Input::get('password'));

        $user->save();

        return Redirect::to('/admin');
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyUser($id)
    {
        User::destroy($id);

        return Redirect::to('/admin');
    }


}