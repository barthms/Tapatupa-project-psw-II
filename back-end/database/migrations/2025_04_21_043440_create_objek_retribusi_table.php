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
        Schema::create('objekRetribusi', function (Blueprint $table) {
            $table->id('idObjekRetribusi');
            $table->unsignedBigInteger('idLokasiObjekRetribusi');
            $table->unsignedBigInteger('idJenisObjekRetribusi');
            $table->string('kodeObjekRetribusi')->unique();
            $table->string('noBangunan')->nullable();
            $table->integer('jumlahLantai')->nullable();
            $table->string('objekRetribusi');
            $table->float('panjangTanah')->nullable();
            $table->float('lebarTanah')->nullable();
            $table->float('luasTanah')->nullable();
            $table->float('panjangBangunan')->nullable();
            $table->float('lebarBangunan')->nullable();
            $table->float('luasBangunan')->nullable();
            $table->text('alamat')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->text('keterangan')->nullable();
            $table->string('gambarDenahTanah')->nullable();
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idLokasiObjekRetribusi')->references('idLokasiObjekRetribusi')->on('lokasiObjekRetribusi');
            $table->foreign('idJenisObjekRetribusi')->references('idJenisObjekRetribusi')->on('jenisObjekRetribusi');
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('objek_retribusi');
    }
};
