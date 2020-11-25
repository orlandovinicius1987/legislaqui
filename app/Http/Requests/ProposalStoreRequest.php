<?php

namespace App\Http\Requests;

use App\Http\Traits\WithRouteParams;

class ProposalStoreRequest extends Request
{
    use WithRouteParams;

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
            'name' => 'required',
            'problem' => 'required',
            'idea_exposition' => 'required'
        ];
    }
}
