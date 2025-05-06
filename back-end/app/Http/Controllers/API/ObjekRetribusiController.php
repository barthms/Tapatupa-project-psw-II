<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ObjekRetribusi;
use Illuminate\Http\Request;

class ObjekRetribusiController extends Controller
{
    public function index()
    {
        return response()->json(
            ObjekRetribusi::with(['lokasiObjekRetribusi', 'jenisObjekRetribusi'])
                ->where('isDeleted', false)
                ->get()
        );
    }

    public function show($id)
    {
        $data = ObjekRetribusi::with(['lokasiObjekRetribusi', 'jenisObjekRetribusi'])
            ->where('isDeleted', false)
            ->findOrFail($id);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idLokasiObjekRetribusi' => 'required|exists:lokasiObjekRetribusi,idLokasiObjekRetribusi',
            'idJenisObjekRetribusi' => 'required|exists:jenisObjekRetribusi,idJenisObjekRetribusi',
            'kodeObjekRetribusi' => 'required|string|unique:objekRetribusi,kodeObjekRetribusi',
            'noBangunan' => 'nullable|string|max:255',
            'jumlahLantai' => 'nullable|integer',
            'objekRetribusi' => 'required|string|max:255',
            'panjangTanah' => 'nullable|numeric',
            'lebarTanah' => 'nullable|numeric',
            'luasTanah' => 'nullable|numeric',
            'panjangBangunan' => 'nullable|numeric',
            'lebarBangunan' => 'nullable|numeric',
            'luasBangunan' => 'nullable|numeric',
            'alamat' => 'nullable|string',
            'latitude' => 'nullable|string|max:255',
            'longitude' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string',
            'gambarDenahTanah' => 'nullable|string',
        ]);

        $record = ObjekRetribusi::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = ObjekRetribusi::findOrFail($id);

        $data = $request->validate([
            'idLokasiObjekRetribusi' => 'required|exists:lokasiObjekRetribusi,idLokasiObjekRetribusi',
            'idJenisObjekRetribusi' => 'required|exists:jenisObjekRetribusi,idJenisObjekRetribusi',
            'kodeObjekRetribusi' => 'required|string|unique:objekRetribusi,kodeObjekRetribusi,' . $id . ',idObjekRetribusi',
            'noBangunan' => 'nullable|string|max:255',
            'jumlahLantai' => 'nullable|integer',
            'objekRetribusi' => 'required|string|max:255',
            'panjangTanah' => 'nullable|numeric',
            'lebarTanah' => 'nullable|numeric',
            'luasTanah' => 'nullable|numeric',
            'panjangBangunan' => 'nullable|numeric',
            'lebarBangunan' => 'nullable|numeric',
            'luasBangunan' => 'nullable|numeric',
            'alamat' => 'nullable|string',
            'latitude' => 'nullable|string|max:255',
            'longitude' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string',
            'gambarDenahTanah' => 'nullable|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = ObjekRetribusi::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Objek Retribusi dihapus (soft delete).']);
    }
}
