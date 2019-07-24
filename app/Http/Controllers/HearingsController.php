<?php

namespace App\Http\Controllers;


class HearingsController extends Controller
{
    public function index()
    {
        return view('hearings.index');
    }
}
