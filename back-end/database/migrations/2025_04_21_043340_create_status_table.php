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
        Schema::create('status', function (Blueprint $table) {
            $table->id('idStatus');
            $table->unsignedBigInteger('idJenisStatus');
            $table->string('namaStatus');
            $table->text('keterangan')->nullable();
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
            $table->foreign('idJenisStatus')->references('idJenisStatus')->on('jenisStatus');
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('status');
    }
};
