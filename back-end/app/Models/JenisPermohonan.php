<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class JenisPermohonan extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'jenisPermohonan';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'idJenisPermohonan';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'parentId',
        'jenisPermohonan',
        'isDeleted',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'isDeleted' => 'boolean',
    ];

    /**
     * Get the parent jenis permohonan.
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(JenisPermohonan::class, 'parentId', 'idJenisPermohonan');
    }

    /**
     * Get the child jenis permohonan.
     */
    public function children(): HasMany
    {
        return $this->hasMany(JenisPermohonan::class, 'parentId', 'idJenisPermohonan');
    }
}