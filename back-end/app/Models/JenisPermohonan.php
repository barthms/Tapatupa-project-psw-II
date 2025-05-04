<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisPermohonan extends Model
{
    use HasFactory;
    protected $table = 'jenisPermohonan';
    protected $primaryKey = 'idJenisPermohonan';
    protected $fillable = ['parentId', 'jenisPermohonan', 'isDeleted'];
}
