<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ObjekRetribusi extends Model
{
    protected $table = 'objekRetribusi';
    protected $primaryKey = 'idObjekRetribusi';

    protected $fillable = [
        'idLokasiObjekRetribusi',
        'idJenisObjekRetribusi',
        'kodeObjekRetribusi',
        'noBangunan',
        'jumlahLantai',
        'objekRetribusi',
        'panjangTanah',
        'lebarTanah',
        'luasTanah',
        'panjangBangunan',
        'lebarBangunan',
        'luasBangunan',
        'alamat',
        'latitude',
        'longitude',
        'keterangan',
        'gambarDenahTanah',
        'isDeleted',
    ];

    public function lokasiObjekRetribusi()
    {
        return $this->belongsTo(LokasiObjekRetribusi::class, 'idLokasiObjekRetribusi', 'idLokasiObjekRetribusi');
    }

    public function jenisObjekRetribusi()
    {
        return $this->belongsTo(JenisObjekRetribusi::class, 'idJenisObjekRetribusi', 'idJenisObjekRetribusi');
    }
}
