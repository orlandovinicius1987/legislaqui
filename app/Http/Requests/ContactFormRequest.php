<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 28/06/2016
 * Time: 11:20.
 */

namespace App\Http\Requests;

class ContactFormRequest extends Request
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'    => 'required',
            'email'   => 'required|email',
            'message' => 'required',
        ];
    }
}
