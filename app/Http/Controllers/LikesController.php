<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 14/04/2016
 * Time: 14:30.
 */
use App\Proposal;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class LikesController extends Controller
{
    /**
     * Like a comment.
     *
     * @return Response
     */
    public function like()
    {

        // Get Proposal
        $proposal = Proposal::find($id);

        // Returns true if the current user is logged in, false otherwise.
//        if (Auth::check()) {
//            $user = Auth::user();
//            $uuid = Uuid::uuid4();
//        }
//        else {
//            $user = null;
//            $uuid = Uuid::uuid4();
//        }

        if (isset($_POST['post_like'])) {
            // Retrieve user IP address
            $ip = $_SERVER['REMOTE_ADDR'];
            $proposal_id = $_POST['proposal_id'];

//            $voted_IP = array();
//            // Get voters'IPs for the current proposal
//            $meta_IP = get_proposal_meta($proposal_id, "voted_IP");
//
//            if (!empty($meta_IP[0]))
//                $voted_IP = $meta_IP[0];

            // Get votes count for the current proposal
            $like_count = get_proposal_like($proposal_id, 'votes_count', true);

            // Use has already voted ?
            if (!user_has_already_voted($proposal_id)) {
                $voted_IP[$ip] = time();

                // Save IP and increase votes count
                update_proposal_like($proposal_id, 'voted_IP', $voted_IP);
                update_proposal_like($proposal_id, 'votes_count', ++$like_count);

                // Display count (ie jQuery return value)
                echo $like_count;
            } else {
                echo 'already';
            }
        }
        exit;
    }

    public function user_has_already_voted($proposal_id)
    {
        // Retrieve proposal votes IPs
        $meta_IP = get_proposal_like($proposal_id, 'voted_IP');

        $voted_IP = [];

        if (!empty($meta_IP[0])) {
            $voted_IP = $meta_IP[0];
        }

        // Retrieve current user IP
        $ip = $_SERVER['REMOTE_ADDR'];

        // If user has already voted
        if (in_array($ip, array_keys($voted_IP))) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update_proposal_like($id, LikeFormRequest $formRequest)
    {
        $proposal = Proposal::findOrFail($id);

        $input = $formRequest->except('_token');

        $input['user_id'] = Auth::user()->id;
        $input['open'] = true;
        $input['pub_date'] = Carbon::now();
        $input['limit_date'] = Carbon::now();

        // update Proposal
        $proposal->fill($input)->save();

        return Redirect::route('proposals')->with('proposal_crud_msg', 'Like Registrado com Sucesso');
    }

    public function unlike($id)
    {
        $like = new Like();
        $user = Auth::user();
        $id = Input::only('proposal_id');
        $like->where('user_id', $user->id)->where('proposal_id', $id)->first()->delete();

        return Redirect::back();
    }

    // Cookies
    public function showCookie(Request $request)
    {
        return $request->cookie('like');
    }

    public function setCookie()
    {
        return response('Cookie set!')->withCookie(cookie('like', 'my value', 60));
    }
}
