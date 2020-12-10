<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'is_home' => true
    ]);
});

Route::get('/projects', function () {
    $projects = Project::all();
    return Inertia::render('Projects', [
        'projects' => $projects
    ]);
});
