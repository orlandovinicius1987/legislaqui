<?php

namespace App\Http\Requests;

use App\Data\Models\Proposal;
use App\Http\Requests\Traits\WithRouteParams;

class ProposalFollowRequest extends Request
{
    use WithRouteParams;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Proposal::find(
            $this->route()->parameters()['id']
        )->isFollowable();
    }

    public function rules()
    {
        return ['id' => 'exists:proposals,id'];
    }
}
