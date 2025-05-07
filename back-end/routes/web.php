<?php

use App\Http\Controllers\API\JenisPermohonanController;
use App\Http\Controllers\API\JenisJangkaWaktuController;
use App\Http\Controllers\API\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function (){
    Route::apiResource('/jenisPermohonan', JenisPermohonanController::class);

    Route::apiResource('/jenisJangkaWaktu', JenisJangkaWaktuController::class);
    Route::apiResource('/Auth',AuthController::class);
});
