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
                'parentId' => 1,
                'jenisPermohonan' => 'Sewa Tanah Kosong',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'parentId' => 2,
                'jenisPermohonan' => 'Sewa Bangunan Pemerintah',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'parentId' => 3,
                'jenisPermohonan' => 'Sewa Ruko',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
