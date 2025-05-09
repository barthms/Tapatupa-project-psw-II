<?php

namespace Database\Seeders;

use App\Models\JenisJangkaWaktu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisJangkaWaktuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        JenisJangkaWaktu::insert([
            [
                'jenisJangkaWaktu' => 'Harian',
                'keterangan' => 'Permohonan berlaku selama satu hari',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'jenisJangkaWaktu' => 'Mingguan', 
                'keterangan' => 'Permohonan berlaku selama satu minggu',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'jenisJangkaWaktu' => 'Bulanan',
                'keterangan' => 'Permohonan berlaku selama satu bulan',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'jenisJangkaWaktu' => 'Tahunan',
                'keterangan' => 'Permohonan berlaku selama satu tahun',
                'created_at' => now(),
                'updated_at' => now(),
            ],        ]);
    }
}
