<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 13/01/2016
 * Time: 11:25.
 */
namespace App\Http\Controllers;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('welcome');
    }
}
