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
        Schema::create('permohonanSewa', function (Blueprint $table) {
            $table->id('idPermohonanSewa');
            $table->unsignedBigInteger('idJenisPermohonan');
            $table->string('nomorSuratPermohonan');
            $table->date('tanggalPengajuan');
            $table->unsignedBigInteger('idWajibRetribusi');
            $table->unsignedBigInteger('idObjekRetribusi');
            $table->unsignedBigInteger('idJenisJangkaWaktu');
            $table->integer('lamaSewa');
            $table->unsignedBigInteger('idPeruntukanSewa');
            $table->unsignedBigInteger('idStatus');
            $table->unsignedBigInteger('createBy');
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idJenisPermohonan')->references('idJenisPermohonan')->on('jenisPermohonan');
            $table->foreign('idWajibRetribusi')->references('idWajibRetribusi')->on('wajibRetribusi');
            $table->foreign('idObjekRetribusi')->references('idObjekRetribusi')->on('objekRetribusi');
            $table->foreign('idJenisJangkaWaktu')->references('idJenisJangkaWaktu')->on('jenisJangkaWaktu');
            $table->foreign('idPeruntukanSewa')->references('idPeruntukanSewa')->on('peruntukanSewa');
            $table->foreign('idStatus')->references('idStatus')->on('status');
            $table->foreign('createBy')->references('userId')->on('user');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permohonan_sewa');
    }
};
