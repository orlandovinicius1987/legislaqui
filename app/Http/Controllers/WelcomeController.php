<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 13/01/2016
 * Time: 11:25
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class WelcomeController extends Controller
{
    public function index ()
    {
        return view('welcome');
    }
}