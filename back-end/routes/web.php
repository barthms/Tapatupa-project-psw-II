<?php

use App\Http\Controllers\API\JenisPermohonanController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function (){
    Route::apiResource('jenisPermohonan', JenisPermohonanController::class);
});