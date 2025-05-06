<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermohonanSewa extends Model
{
    protected $table = 'permohonanSewa';
    protected $primaryKey = 'idPermohonanSewa';

    protected $fillable = [
        'idJenisPermohonan',
        'nomorSuratPermohonan',
        'tanggalPengajuan',
        'idWajibRetribusi',
        'idObjekRetribusi',
        'idJenisJangkaWaktu',
        'lamaSewa',
        'idPeruntukanSewa',
        'idStatus',
        'createBy',
        'isDeleted',
    ];

    public function jenisPermohonan()
    {
        return $this->belongsTo(JenisPermohonan::class, 'idJenisPermohonan');
    }

    public function wajibRetribusi()
    {
        return $this->belongsTo(WajibRetribusi::class, 'idWajibRetribusi');
    }

    public function objekRetribusi()
    {
        return $this->belongsTo(ObjekRetribusi::class, 'idObjekRetribusi');
    }

    public function jenisJangkaWaktu()
    {
        return $this->belongsTo(JenisJangkaWaktu::class, 'idJenisJangkaWaktu');
    }

    public function peruntukanSewa()
    {
        return $this->belongsTo(PeruntukanSewa::class, 'idPeruntukanSewa');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'idStatus');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'createBy', 'userId');
    }
}
