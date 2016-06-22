<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/01/2016
 * Time: 16:53
 */

namespace App\Http\Controllers;

use App\Events\ProposalWasCreated;
use App\User;
use App\Proposal;
use App\Like;
use App\ProposalHistory;
use Gate;

use App\Http\Requests;
use App\Http\Requests\ProposalFormRequest;
use App\Http\Requests\ResponseFormRequest;
use App\Http\Controllers\Controller;

use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Request;

use Cookie;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;

use App\Repositories\ProposalsRepository;

class ProposalsController extends Controller
{
    public function index()
    {
       return view('proposals.index')->with('proposals', Proposal::paginate(20));
    }

    public function show($id)
    {
        //Get Proposal
        $proposal = Proposal::findOrFail($id);

        return view('proposals.show', ['proposal' => $proposal]);
        //return view('proposals.show')->with('proposal', $proposal);
    }

    public function approval($id)
    {
        $proposal = Proposal::findorFail($id);

        $user_id = Auth::user()->id;

        $approvals = User::find($user_id)->approvals()->where('proposal_id', $id)->get()->count();

        if ($approvals > '0') {
            Session::flash('error_msg','Você já apoiou este projeto.');
        }
        else {
            $proposal->approvals()->save(Auth::user());
            Session::flash('flash_msg','Seu apoio foi incluído com sucesso.');
        }

        return Redirect::route('proposals');
    }

//    public function isLikedByMe($id)
//    {
//        $proposal = Proposal::findOrFail($id)->first();
//        if (Like::whereUserId(Auth::id())->orwhere(Auth::guest())->whereProposalId($proposal->id)->exists()){
//            return 'true';
//        }
//        return 'false';
//    }

    public function like($id)
    {
        return $this->likeUnlike($id, 'like');
    }

    public function unlike($id)
    {
        return $this->likeUnlike($id, 'unlike');
    }

    public function likeUnlike($id, $action)
    {

        //Get Proposal
        $proposal = Proposal::findorFail($id);

        //Get User
        if (!Auth::check()) {
            // The user is not logged in...
            // Retrieve UUID from Cookie
            $user_id = null;
            $unique = Cookie::get('uuid');
        }
        else {
            //Retrieve UUID from User
            $user_id = Auth::user()->id;
            $unique = Auth::user()->uuid;
        }

        //Possible Values: Null, 0 or 1
        $existing_like = Like::where('uuid', $unique)->where('proposal_id', $id)->value('like');
        //dd($existing_like, $action, $str_action);

        switch ($existing_like) {
            // Already Unliked
            case '0':
                switch ($action) {
                    case 'like':
                        Like::where('uuid', $unique)->where('proposal_id', $id)->update(['like' => $action == 'like']);
                        Session::flash('flash_msg', 'Seu ' . $action . ' foi recomputado com sucesso!');
                        break;
                    case 'unlike':
                        Session::flash('error_msg', 'Você já deu ' . $action . ' neste projeto!');
                        break;
                }
                break;
            // Already Liked
            case '1':
                switch ($action) {
                    case 'like':
                        Session::flash('error_msg', 'Você já deu ' . $action . ' neste projeto!');
                        break;
                    case 'unlike':
                        Like::where('uuid', $unique)->where('proposal_id', $id)->update(['like' => $action == 'like']);
                        Session::flash('flash_msg', 'Seu ' . $action . ' foi recomputado com sucesso!');
                        break;
                }
                break;
            // New Like
            case null:
                //dd($existing_like, $action, $str_action);
                Like::create([
                    'user_id' => $user_id,
                    'uuid' => $unique,
                    'proposal_id' => $proposal->id,
                    'like' => $action == 'like',
                    'ip_address' => Request::ip()
                ]);
                Session::flash('flash_msg','Seu ' . $action . ' foi computado com sucesso.');
                break;
        }

//        return Redirect::route('proposals');
        return Redirect::back();
    }

    public function create()
    {
        return view('proposals.create');
    }

    public function store(ProposalFormRequest $formRequest)
    {
        $input = $formRequest->except('_token');

        $input['user_id'] = Auth::user()->id;
        $input['open'] = true;
        $input['pub_date'] = Carbon::now();
        $input['limit_date'] = Carbon::now();
        //dd($input);

        $proposal = Proposal::create($input);
        event(new ProposalWasCreated($proposal));
        //Event::fire(new ProposalWasCreated($proposal));

        return Redirect::route('proposals')->with('proposal_crud_msg', 'Proposta Legislativa Incluída com Sucesso');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //Get Proposal
        $proposal = Proposal::findOrFail($id);

        //Via User Model
        //        if ($user->can('update', $post)) {
        //            //
        //        }

        if (Gate::allows('edit', $proposal)) {
            return view('proposals.edit')->with('proposal', $proposal);
        }
        else {
            return Redirect::route('proposals')->with('error_msg', 'Você não é o dono desta Proposta');
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id, ProposalFormRequest $formRequest)
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
        return Redirect::route('proposals')->with('proposal_crud_msg', 'Proposta Legislativa Editada com Sucesso');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        $proposal = Proposal::findOrFail($id);

        if (Gate::allows('destroy', $proposal)) {
            $proposal->delete();
            return Redirect::route('proposals')->with('proposal_crud_msg', 'Proposta Legislativa Removida com Sucesso');
        }
        else {
            return Redirect::route('proposals')->with('error_msg', 'Você não é o dono desta Proposta');
        }
    }

    public function notResponded()
    {
        return view('proposals.notresponded', [
            'proposals' => Proposal::whereNull('response')->paginate(20),
            'is_not_responded' => true
        ]);
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
        $proposal = Proposal::findOrFail($id);

        if (Gate::allows('edit', $proposal)) {
            return view('proposals.response')->with('proposal', $proposal);
        }
        else {
            return Redirect::route('proposals')->with('error_msg', 'Você não é o dono desta Proposta');
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function updateResponse($id, ResponseFormRequest $formRequest)
    {
        $proposal = Proposal::findOrFail($id);

        $input = $formRequest->except('_token','_method');

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
        return Redirect::route('proposals')->with('proposal_crud_msg', 'Proposta Legislativa Respondida com Sucesso');

    }
}