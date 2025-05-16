<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\WajibRetribusi;
use Illuminate\Http\Request;

class WajibRetribusiController extends Controller
{
    public function index()
    {
        return response()->json(
            WajibRetribusi::with('jenisRetribusi')->where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = WajibRetribusi::with('jenisRetribusi')->where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idJenisRetribusi' => 'required|exists:jenisObjekRetribusi,idJenisObjekRetribusi',
            'NIK' => 'required|string|unique:wajibRetribusi,NIK',
            'namaWajibRetribusi' => 'required|string|max:255',
            'pekerjaan' => 'nullable|string|max:255',
            'alamat' => 'nullable|string',
            'nomorPonsel' => 'nullable|string|max:20',
            'nomorWhatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'fileFoto' => 'nullable|string|max:255',
        ]);

        $record = WajibRetribusi::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = WajibRetribusi::findOrFail($id);

        $data = $request->validate([
            'idJenisRetribusi' => 'required|exists:jenisObjekRetribusi,idJenisObjekRetribusi',
            'NIK' => 'required|string|unique:wajibRetribusi,NIK,' . $id . ',idWajibRetribusi',
            'namaWajibRetribusi' => 'required|string|max:255',
            'pekerjaan' => 'nullable|string|max:255',
            'alamat' => 'nullable|string',
            'nomorPonsel' => 'nullable|string|max:20',
            'nomorWhatsapp' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'fileFoto' => 'nullable|string|max:255',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = WajibRetribusi::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Wajib Retribusi dihapus (soft delete).']);
    }

    public function restore($id)
    {
        $data = WajibRetribusi::where('isDeleted', true)->find($id);

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan atau belum dihapus'], 404);
        }

        $data->isDeleted = false;
        $data->save();

        return response()->json(['message' => 'Data berhasil direstore', 'data' => $data]);
    }
}
