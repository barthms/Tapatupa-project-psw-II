<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PermohonanSewa;
use Illuminate\Http\Request;

class PermohonanSewaController extends Controller
{
    public function index()
    {
        return response()->json(
            PermohonanSewa::with(['jenisPermohonan', 'wajibRetribusi', 'objekRetribusi', 'jenisJangkaWaktu', 'peruntukanSewa', 'status', 'createdBy'])
                ->where('isDeleted', false)
                ->get()
        );
    }

    public function show($id)
    {
        $data = PermohonanSewa::with(['jenisPermohonan', 'wajibRetribusi', 'objekRetribusi', 'jenisJangkaWaktu', 'peruntukanSewa', 'status', 'createdBy'])
            ->where('isDeleted', false)
            ->findOrFail($id);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idJenisPermohonan' => 'required|exists:jenisPermohonan,idJenisPermohonan',
            'nomorSuratPermohonan' => 'required|string',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'required|exists:wajibRetribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'required|exists:objekRetribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'lamaSewa' => 'required|integer',
            'idPeruntukanSewa' => 'required|exists:peruntukanSewa,idPeruntukanSewa',
            'idStatus' => 'required|exists:status,idStatus',
            'createBy' => 'required|exists:users,userId',
        ]);

        $permohonanSewa = PermohonanSewa::create($data);
        return response()->json($permohonanSewa, 201);
    }

    public function update(Request $request, $id)
    {
        $permohonanSewa = PermohonanSewa::findOrFail($id);

        $data = $request->validate([
            'idJenisPermohonan' => 'required|exists:jenisPermohonan,idJenisPermohonan',
            'nomorSuratPermohonan' => 'required|string',
            'tanggalPengajuan' => 'required|date',
            'idWajibRetribusi' => 'required|exists:wajibRetribusi,idWajibRetribusi',
            'idObjekRetribusi' => 'required|exists:objekRetribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'lamaSewa' => 'required|integer',
            'idPeruntukanSewa' => 'required|exists:peruntukanSewa,idPeruntukanSewa',
            'idStatus' => 'required|exists:status,idStatus',
            'createBy' => 'required|exists:users,userId',
            'isDeleted' => 'nullable|boolean',
        ]);

        $permohonanSewa->update($data);
        return response()->json($permohonanSewa);
    }

    public function destroy($id)
    {
        $permohonanSewa = PermohonanSewa::findOrFail($id);
        $permohonanSewa->isDeleted = true;
        $permohonanSewa->save();

        return response()->json(['message' => 'Permohonan Sewa dihapus (soft delete).']);
    }

        public function restore($id)
    {
        $data = PermohonanSewa::where('isDeleted', true)->find($id);

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan atau belum dihapus'], 404);
        }

        $data->isDeleted = false;
        $data->save();

        return response()->json(['message' => 'Data berhasil direstore', 'data' => $data]);
    }
}
