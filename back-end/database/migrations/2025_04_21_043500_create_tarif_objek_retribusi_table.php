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
        Schema::create('tarifObjekRetribusi', function (Blueprint $table) {
            $table->id('idTarifObjekRetribusi');
            $table->unsignedBigInteger('idObjekRetribusi');
            $table->unsignedBigInteger('idJenisJangkaWaktu');
            $table->date('tanggalDinilai');
            $table->string('namaPenilai');
            $table->float('tarif');
            $table->float('nominalTarif');
            $table->string('fileHasilPenilaian')->nullable();
            $table->text('keterangan')->nullable();
            $table->boolean('isDefault')->default(false);
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idObjekRetribusi')->references('idObjekRetribusi')->on('objekRetribusi');
            $table->foreign('idJenisJangkaWaktu')->references('idJenisJangkaWaktu')->on('jenisJangkaWaktu');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarif_objek_retribusi');
    }
};
