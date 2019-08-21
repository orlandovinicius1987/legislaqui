<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Input;

class HomeController extends Controller
{
    public function index()
    {
        return redirect()->route('proposals.index', Input::toArray());
    }
}
