<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WajibRetribusi extends Model
{
    protected $table = 'wajibRetribusi';
    protected $primaryKey = 'idWajibRetribusi';

    protected $fillable = [
        'idJenisRetribusi',
        'NIK',
        'namaWajibRetribusi',
        'pekerjaan',
        'alamat',
        'nomorPonsel',
        'nomorWhatsapp',
        'email',
        'fileFoto',
        'isDeleted',
    ];

    public function jenisRetribusi()
    {
        return $this->belongsTo(JenisObjekRetribusi::class, 'idJenisRetribusi', 'idJenisObjekRetribusi');
    }
}
