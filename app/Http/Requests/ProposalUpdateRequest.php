<?php

namespace App\Http\Requests;

use App\Data\Models\Proposal;
use App\Enums\ProposalState;

class ProposalUpdateRequest extends ProposalStoreRequest
{
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
