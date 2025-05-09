<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JenisJangkaWaktu extends Model
{
    use HasFactory;

    protected $table = 'jenisJangkaWaktu';
    protected $primaryKey = 'idJenisJangkaWaktu';

    protected $fillable = [
        'jenisJangkaWaktu',
        'keterangan',
        'isDeleted',
    ];

    protected $casts = [
        'isDeleted' => 'boolean',
    ];
}
