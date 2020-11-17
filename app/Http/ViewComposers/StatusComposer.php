<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 22/06/2016
 * Time: 12:24.
 */
//        app/Http/ViewComposers/StatusComposer.php
namespace App\Http\ViewComposers;

use App\Data\Models\Approval;
use App\Data\Models\Proposal;
use App\Data\Models\User;

// app/viewComposers/StatusComposer.php

class StatusComposer
{
    public function compose($view)
    {
        //Conversar com o Antônio
        //        $proposals = Proposal::all();
        //        $proposals_count = $proposals->count();
        //        $approvals_count = Approval::all()->count();
        //        $users_count = User::all()->count();

        $proposals = Proposal::whereNotNull('id')
            ->get()
            ->values();
        $proposals_count = $proposals->count();
        $approvals_count = Approval::all()->count();
        $users_count = User::whereNotNull('id')
            ->get()
            ->values()
            ->count();

        if ($proposals->count()) {
            $not_responded_count = round(
                ($proposals
                    ->where('approved_by', null)
                    ->where('disapproved_by', null)
                    ->where('response', null)
                    ->count() /
                    $proposals->count()) *
                    100,
                2
            );
        } else {
            $not_responded_count = 0;
        }

        $view
            ->with(compact('proposals_count'))
            ->with(compact('approvals_count'))
            ->with(compact('users_count'))
            ->with(compact('not_responded_count'));
    }
}
