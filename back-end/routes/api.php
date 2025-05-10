<?php

use App\Http\Controllers\API\JenisPermohonanController;
use App\Http\Controllers\API\JenisJangkaWaktuController;
use App\Http\Controllers\Api\JenisObjekRetribusiController;
use App\Http\Controllers\Api\JenisStatusController;
use App\Http\Controllers\Api\LokasiObjekRetribusiController;
use App\Http\Controllers\Api\ObjekRetribusiController;
use App\Http\Controllers\Api\PermohonanSewaController;
use App\Http\Controllers\Api\PeruntukanSewaController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\TarifObjekRetribusiController;
use App\Http\Controllers\Api\WajibRetribusiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/jenisPermohonan', JenisPermohonanController::class);
Route::apiResource('/jenisJangkaWaktu', JenisJangkaWaktuController::class);
Route::apiResource('/jenisObjekRetribusi', JenisObjekRetribusiController::class);
Route::apiResource('/jenisStatus', JenisStatusController::class);
Route::apiResource('/lokasiObjekRetribusi', LokasiObjekRetribusiController::class);
Route::apiResource('/permohonanSewa', PermohonanSewaController::class);
Route::apiResource('/peruntukanSewa', PeruntukanSewaController::class);
Route::apiResource('/status', StatusController::class);
Route::apiResource('/tarifObjekRetribusi', TarifObjekRetribusiController::class);
Route::apiResource('/wajibRetribusi', WajibRetribusiController::class);
Route::apiResource('/objekRetribusi', ObjekRetribusiController::class);
