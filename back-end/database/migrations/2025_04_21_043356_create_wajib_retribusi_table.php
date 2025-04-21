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
        Schema::create('wajibRetribusi', function (Blueprint $table) {
            $table->id('idWajibRetribusi');
            $table->unsignedBigInteger('idJenisRetribusi');
            $table->string('NIK')->unique();
            $table->string('namaWajibRetribusi');
            $table->string('pekerjaan')->nullable();
            $table->text('alamat')->nullable();
            $table->string('nomorPonsel')->nullable();
            $table->string('nomorWhatsapp')->nullable();
            $table->string('email')->nullable();
            $table->string('fileFoto')->nullable();
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idJenisRetribusi')->references('idJenisObjekRetribusi')->on('jenisObjekRetribusi');
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wajib_retribusi');
    }
};
