<?php

namespace App\Http\Requests;

use App\Data\Models\Proposal;
use App\Enums\ProposalState;
use App\Http\Traits\WithRouteParams;

class ProposalUpdateRequest extends ProposalStoreRequest
{
    use WithRouteParams;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Proposal::find($this->route()->parameters()['id'])->state ==
            ProposalState::NotModerated;
    }
}
