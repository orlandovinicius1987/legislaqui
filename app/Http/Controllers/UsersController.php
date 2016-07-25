<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/02/2016
 * Time: 17:02
 */

namespace App\Http\Controllers;

use App\User;
use App\Proposal;
use App\ProposalHistory;

use App\Http\Requests;
use App\Http\Requests\ProposalFormRequest;
use App\Http\Controllers\Controller;

use Auth;
use Carbon\Carbon;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;

use App\Repositories\ProposalsRepository;

class UsersController extends Controller
{
    private $proposalsRepository;

    public function __construct(ProposalsRepository $proposals)
    {
       $this->proposalsRepository = $proposals;
    }

    /**
     * Display a list of all user's proposals.
     *
     * @param  Request $request
     * @return Response
     */
    public function proposals($user_id)
    {
        return view('users.proposals', [
            'proposals' => $this->proposalsRepository->forUser($user_id)
        ]);
    }

    /**
     * Display a list of all of the admin user's proposal responses.
     *
     * @param  Request $request
     * @return Response
     */
    public function responses($responder_id)
    {
        return view('users.responses', [
            'proposals' => $this->proposalsRepository->getResponsesForUser($responder_id)
        ]);
    }

}