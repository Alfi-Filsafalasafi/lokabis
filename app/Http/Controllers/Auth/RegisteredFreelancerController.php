<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisteredFreelancerController extends Controller
{
    public function create()
    {
        return Inertia::render('Auth/RegisterFreelancer');
    }
}
