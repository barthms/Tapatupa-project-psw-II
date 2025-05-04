<?php

// app/Models/User.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $fillable = [
        'username',
        'password',
        'token',
        'email',
        'keterangan',
        'isDeleted',
    ];

    // Jika nama tabel tidak menggunakan konvensi default (yaitu plural 'users')
    protected $table = 'users';
}
