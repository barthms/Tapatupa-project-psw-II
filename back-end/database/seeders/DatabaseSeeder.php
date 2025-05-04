<?php

// database/seeders/DatabaseSeeder.php
namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Menambahkan data user pertama
        User::create([
            'username' => 'admin',
            'password' => Hash::make('admin123'),
            'email' => 'admin@example.com',
            'token' => null,
            'keterangan' => 'Admin utama',
            'isDeleted' => false,
        ]);

        // Menambahkan data user kedua
        User::create([
            'username' => 'user1',
            'password' => Hash::make('user123'),
            'email' => 'user1@example.com',
            'token' => null,
            'keterangan' => 'User biasa',
            'isDeleted' => false,
        ]);

        // Panggil seeder lain jika diperlukan
        $this->call([
            JenisPermohonanSeeder::class,
        ]);
    }
}
