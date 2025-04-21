<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jangkaWaktuSewa', function (Blueprint $table) {
            $table->id('idJangkaWaktuSewa');
            $table->unsignedBigInteger('idJenisJangkaWaktu');
            $table->integer('jangkaWaktu');
            $table->text('keterangan')->nullable();
            $table->boolean('isDefault')->default(false);
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idJenisJangkaWaktu')->references('idJenisJangkaWaktu')->on('jenisJangkaWaktu');
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jangka_waktu_sewa');
    }
};
