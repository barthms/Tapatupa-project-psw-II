<?php

use App\Http\Controllers\API\JenisPermohonanController;
use App\Http\Controllers\API\JenisJangkaWaktuController;
use App\Http\Controllers\API\JangkaWaktuSewaController;
use App\Http\Controllers\Api\JenisObjekRetribusiController;
use App\Http\Controllers\Api\JenisStatusController;
use App\Http\Controllers\Api\LokasiObjekRetribusiController;
use App\Http\Controllers\Api\ObjekRetribusiController;
use App\Http\Controllers\Api\PermohonanSewaController;
use App\Http\Controllers\Api\PeruntukanSewaController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\TarifObjekRetribusiController;
use App\Http\Controllers\Api\WajibRetribusiController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/jenisPermohonan', JenisPermohonanController::class);
Route::apiResource('/jangkaWaktuSewa', JangkaWaktuSewaController::class);
// JenisObjekRetribusi
Route::apiResource('/jenisObjekRetribusi', JenisObjekRetribusiController::class);
Route::patch('/jenisObjekRetribusi/restore/{id}', [JenisObjekRetribusiController::class, 'restore']);
// listDeleted not yet implemented
Route::get('/jenisObjekRetribusi/listDeleted', [JenisObjekRetribusiController::class, 'listDeleted']);

// JenisJangkaWaktu
Route::apiResource('/jenisJangkaWaktu', JenisJangkaWaktuController::class);
Route::patch('/jenisJangkaWaktu/restore/{id}', [JenisJangkaWaktuController::class, 'restore']);
// listDeleted not yet implemented

// JenisStatus
Route::apiResource('/jenisStatus', JenisStatusController::class);
Route::patch('/jenisStatus/restore/{id}', [JenisStatusController::class, 'restore']);
// listDeleted not yet implemented

// Status
Route::apiResource('/status', StatusController::class);
Route::patch('/status/restore/{id}', [StatusController::class, 'restore']);

// LokasiObjekRetribusi
Route::apiResource('/lokasiObjekRetribusi', LokasiObjekRetribusiController::class);
Route::patch('/lokasiObjekRetribusi/restore/{id}', [LokasiObjekRetribusiController::class, 'restore']);

// tarifObjekRetribusi
Route::apiResource('/tarifObjekRetribusi', TarifObjekRetribusiController::class);
Route::patch('/tarifObjekRetribusi/restore/{id}', [TarifObjekRetribusiController::class, 'restore']);

// PeruntukanSewa
Route::apiResource('/peruntukanSewa', PeruntukanSewaController::class);
Route::patch('/peruntukanSewa/restore/{id}', [PeruntukanSewaController::class, 'restore']);

// wajibRetribusi
Route::apiResource('/wajibRetribusi', WajibRetribusiController::class);
Route::patch('/wajibRetribusi/restore/{id}', [WajibRetribusiController::class, 'restore']);

// objekRetribusi
Route::apiResource('/objekRetribusi', ObjekRetribusiController::class);
Route::patch('/objekRetribusi/restore/{id}', [ObjekRetribusiController::class, 'restore']);

// permohonanSewa
Route::patch('/permohonanSewa/restore/{id}', [PermohonanSewaController::class, 'restore']);
Route::apiResource('/permohonanSewa', PermohonanSewaController::class);

// Route::apiResource('/auth', AuthController::class);
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

// Opsional: Route tambahan untuk ambil semua user (jika memang ingin diekspose)
Route::get('/users', [AuthController::class, 'index']);
