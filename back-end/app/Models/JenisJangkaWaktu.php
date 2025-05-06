<?php
// app/Models/JenisJangkaWaktu.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JenisJangkaWaktu extends Model
{
    protected $table = 'jenisJangkaWaktu'; // pakai nama tabel custom

    protected $primaryKey = 'idJenisJangkaWaktu'; // primary key custom

    protected $fillable = ['jenisJangkaWaktu', 'keterangan', 'isDeleted'];

    public $timestamps = true;
}
