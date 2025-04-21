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
        Schema::create('jenisPermohonan', function (Blueprint $table) {
            $table->id('idJenisPermohonan');
            $table->unsignedBigInteger('parentId')->nullable();
            $table->string('jenisPermohonan');
            $table->timestamps();
            $table->boolean('isDeleted')->default(false);
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jenis_permohonan');
    }
};
