<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JangkaWaktuSewa;
use Illuminate\Http\Request;

class JangkaWaktuSewaController extends Controller
{
    public function index()
    {
        return response()->json(
            JangkaWaktuSewa::with('jenisJangkaWaktu')
                ->where('isDeleted', false)
                ->get()
        );
    }

    public function show($id)
    {
        $data = JangkaWaktuSewa::with('jenisJangkaWaktu')
            ->where('isDeleted', false)
            ->findOrFail($id);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'jangkaWaktu' => 'required|integer',
            'keterangan' => 'nullable|string',
            'isDefault' => 'boolean',
        ]);

        $record = JangkaWaktuSewa::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = JangkaWaktuSewa::findOrFail($id);

        $data = $request->validate([
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'jangkaWaktu' => 'required|integer',
            'keterangan' => 'nullable|string',
            'isDefault' => 'boolean',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = JangkaWaktuSewa::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Jangka Waktu Sewa dihapus (soft delete).']);
    }

        public function restore($id)
    {
        $data = JangkaWaktuSewa::where('isDeleted', true)->find($id);

        if (!$data) {
            return response()->json(['message' => 'Data tidak ditemukan atau belum dihapus'], 404);
        }

        $data->isDeleted = false;
        $data->save();

        return response()->json(['message' => 'Data berhasil direstore', 'data' => $data]);
    }

}
