<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class JangkaWaktuSewa extends Model
{
    protected $table = 'jangkaWaktuSewa';
    protected $primaryKey = 'idJangkaWaktuSewa';

    protected $fillable = [
        'idJenisJangkaWaktu',
        'jangkaWaktu',
        'keterangan',
        'isDefault',
        'isDeleted',
    ];

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu', 'idJenisJangkaWaktu');
    }
}
