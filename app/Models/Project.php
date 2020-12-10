<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'web_link',
        'github_link',
        'image',
        'description',
        'live',
        'hidden',
    ];

    protected $casts = [
        'released_at' => 'datetime:Y-m-d',
    ];
}
