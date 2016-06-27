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

use App\Repositories\UsersRepository;
use Auth;

use App\Proposal;
use App\User;
use App\State;
use App\Role;
use App\Approval;
use App\ProposalHistory;
use App\Repositories\ProposalsRepository;

use Gate;

use Carbon\Carbon;

use App\Http\Requests\ResponseFormRequest;
use App\Http\Requests\ProposalFormRequest;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

use Illuminate\Support\Facades\Redirect;



class AdminController extends Controller
{

    /**
     * @var ProposalsRepository
     */
    private $proposalsRepository;
    private $usersRepository;

    public function __construct(ProposalsRepository $proposalsRepository, UsersRepository $usersRepository)
    {
        $this->proposalsRepository = $proposalsRepository;
        $this->usersRepository = $usersRepository;
    }

    public function index ()
    {
        return view('admin.index');
    }

    public function users ()
    {
        $users = $this->usersRepository->all();

        return view('admin.users.index')
            ->with(compact('users'));
    }

    public function showUser($id)
    {
        //Get User
        $user = $this->usersRepository->find($id);

        return view('admin.users.show')
            ->with(compact('user'));
        // ['user' => $user]);
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

        return Redirect::to('/admin')->with('user_crud_msg', 'Usuário Incluído com Sucesso');
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

        $user = $this->usersRepository->find($id);

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
        $user = $this->usersRepository->find($id);

        $user->name = Input::get('name');
        $user->email = Input::get('email');
//        $user->password   = Hash::make(Input::get('password'));

        $user->save();

        return Redirect::to('/admin')->with('user_crud_msg', 'Usuário Editado com Sucesso');
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyUser($id)
    {
        $this->usersRepository->destroy($id);

        return Redirect::to('/admin')->with('user_crud_msg', 'Usuário Removido com Sucesso');
    }

    /**
     * Lists all proposals in Admin.
     *
     * @return Response
     */
    public function proposals()
    {
        $proposals = $this->proposalsRepository->all();
        return view('admin.proposals.index')->with(compact('proposals'));
    }

    public function showProposal($id)
    {
        $proposal = $this->proposalsRepository->find($id);

        //return view('admin.proposals.show', ['proposal' => $proposal]);
        //return view('proposals.show')->with('proposal', $proposal);
        return view('admin.proposals.show')->with(compact('proposal'));
    }

    public function notResponded()
    {
//        return view('admin.notresponded', [
//            'proposals' => Proposal::whereNull('response')->paginate(20),
//            'is_not_responded' => true
//        ]);

       // dd(Proposal::whereNull('response_id'));
        //$proposals = Proposal::all();
        $proposals = $this->proposalsRepository->all();

        return view('admin.proposals.notresponded')->with('notrespondeds', $proposals->where('responder_id', null));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function response($id)
    {
        //Get Proposal
        $proposal = $this->proposalsRepository->find($id);
        //$proposal = Proposal::findOrFail($id);

        return view('admin.proposals.response')->with('proposal', $proposal);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function updateResponse($id, ResponseFormRequest $formRequest)
    {
        $proposal = $this->proposalsRepository->find($id);
        //$proposal = Proposal::findOrFail($id);

        $input = $formRequest->except('_token','_method','_wysihtml5_mode');

        $input['responder_id'] = Auth::user()->id;

        //Create ProposalHistory Object
        $proposal_history = new ProposalHistory();
        //Get attributes from Proposals Eloquent
        $proposal_history->setRawAttributes(array_except($proposal->getAttributes(), ['id','created_at', 'updated_at']));

        //Append Update Info + Response
        $proposal_history->proposal_id = $id;
        $proposal_history->update_id =  Auth::user()->id;
        $proposal_history->update_date = Carbon::now();
        $proposal_history->response = $input['response'];
        $proposal_history->responder_id = $input['responder_id'];
        //$proposal_history->fill($input);

        //dd($proposal_history);

        //Save History
        $proposal_history->save();

        //Then update Proposal
        $proposal->forcefill($input)->save();
        // dd($proposal);
        return Redirect::route('admin.proposals')->with('proposal_crud_msg', 'Proposta Legislativa Respondida com Sucesso');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function editProposal($id)
    {
        //Get Proposal
        $proposal = $this->proposalsRepository->find($id);
        //$proposal = Proposal::findOrFail($id);

        //Via User Model
        //        if ($user->can('update', $post)) {
        //            //
        //        }

        if (Gate::allows('edit', $proposal)) {
            return view('admin.proposals.edit')->with('proposal', $proposal);
        }
        else {
            return Redirect::route('admin.proposals')->with('error_msg', 'Você não é o dono desta Proposta');
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function updateProposal($id, ProposalFormRequest $formRequest)
    {
        $proposal = Proposal::findOrFail($id);

        $input = $formRequest->except('_token');

        $input['user_id'] = Auth::user()->id;
        $input['open'] = true;
        $input['pub_date'] = Carbon::now();
        $input['limit_date'] = Carbon::now();

        //Create ProposalHistory Object
        $proposal_history = new ProposalHistory();
        //Get attributes from Proposals Eloquent

        $proposal_history->setRawAttributes(array_except($proposal->getAttributes(), ['id','created_at', 'updated_at']));
        //dd($proposal_history);
        //Append Update Info
        $proposal_history->proposal_id = $id;
        $proposal_history->update_id =  Auth::user()->id;
        $proposal_history->update_date = Carbon::now();
        //Save History
        $proposal_history->save();

        //Then update Proposal
        $proposal->fill($input)->save();
        return Redirect::route('admin.proposals')->with('proposal_crud_msg', 'Proposta Legislativa Editada com Sucesso');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyProposal($id)
    {
        $proposal = $this->proposalsRepository->find($id);
        //$proposal = Proposal::findOrFail($id);

        if (Gate::allows('destroy', $proposal)) {
            $proposal->delete();
            return Redirect::route('admin.proposals')->with('proposal_crud_msg', 'Proposta Legislativa Removida com Sucesso');
        }
        else {
            return Redirect::route('admin.proposals')->with('error_msg', 'Você não é o dono desta Proposta');
        }
    }

}