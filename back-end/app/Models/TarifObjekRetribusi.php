<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TarifObjekRetribusi extends Model
{
    protected $table = 'tarifObjekRetribusi';
    protected $primaryKey = 'idTarifObjekRetribusi';

    protected $fillable = [
        'idObjekRetribusi',
        'idJenisJangkaWaktu',
        'tanggalDinilai',
        'namaPenilai',
        'tarif',
        'nominalTarif',
        'fileHasilPenilaian',
        'keterangan',
        'isDefault',
        'isDeleted',
    ];

    public function objekRetribusi()
    {
        return $this->belongsTo(ObjekRetribusi::class, 'idObjekRetribusi', 'idObjekRetribusi');
    }

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu', 'idJenisJangkaWaktu');
    }
}
