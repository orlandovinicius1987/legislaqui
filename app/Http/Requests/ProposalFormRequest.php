<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Proposal;
use Auth;

class ProposalFormRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'name' => 'required',
            'idea_central' => 'required',
            'problem' => 'required',
            'idea_exposition' => 'required'
        ];
    }
}
