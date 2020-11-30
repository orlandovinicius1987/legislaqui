<?php

namespace App\Http\Requests;

use App\Http\Requests\Traits\WithRouteParams;

class ProposalUnfollowRequest extends Request
{
    use WithRouteParams;

    public function rules()
    {
        return ['id' => 'exists:proposals,id'];
    }
}
