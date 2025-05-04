<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JenisPermohonan;

class JenisPermohonanSeeder extends Seeder
{
    public function run(): void
    {
        JenisPermohonan::insert([
            [
                'parentId' => null,
                'jenisPermohonan' => 'Sewa Tanah Kosong',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'parentId' => null,
                'jenisPermohonan' => 'Sewa Bangunan Pemerintah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'parentId' => null,
                'jenisPermohonan' => 'Sewa Ruko',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
