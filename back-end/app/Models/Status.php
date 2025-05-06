<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = 'status';
    protected $primaryKey = 'idStatus';

    protected $fillable = [
        'idJenisStatus',
        'namaStatus',
        'keterangan',
        'isDeleted',
    ];

    public function jenisStatus()
    {
        return $this->belongsTo(JenisStatus::class, 'idJenisStatus', 'idJenisStatus');
    }
}
