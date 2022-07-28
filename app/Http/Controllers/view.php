<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class view extends Controller
{
    //
    public function viewTest()
    {
        return view('welcome');
    }
}
