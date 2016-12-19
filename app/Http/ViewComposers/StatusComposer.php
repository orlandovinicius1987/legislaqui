<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 22/06/2016
 * Time: 12:24.
 */

namespace App\Http\ViewComposers;

use App\Approval;
use App\Proposal;
use App\User;

// app/viewComposers/StatusComposer.php

class StatusComposer
{
    public function compose($view)
    {
        $proposals = Proposal::all();
        $proposals_count = $proposals->count();
        $approvals_count = Approval::all()->count();
        $users_count = User::all()->count();
        $not_responded_count = round(($proposals->where('approved_by', null)->where('disapproved_by', null)->where('response', null)->count() / $proposals->count()) * 100, 2);

        $view
            ->with(compact('proposals_count'))
            ->with(compact('approvals_count'))
            ->with(compact('users_count'))
            ->with(compact('not_responded_count'));
    }
}
