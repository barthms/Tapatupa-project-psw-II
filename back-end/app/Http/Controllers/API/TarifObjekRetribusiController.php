<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TarifObjekRetribusi;
use Illuminate\Http\Request;

class TarifObjekRetribusiController extends Controller
{
    public function index()
    {
        return response()->json(
            TarifObjekRetribusi::with(['objekRetribusi', 'jenisJangkaWaktu'])
                ->where('isDeleted', false)
                ->get()
        );
    }

    public function show($id)
    {
        $data = TarifObjekRetribusi::with(['objekRetribusi', 'jenisJangkaWaktu'])
            ->where('isDeleted', false)
            ->findOrFail($id);

        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idObjekRetribusi' => 'required|exists:objekRetribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'tanggalDinilai' => 'required|date',
            'namaPenilai' => 'required|string|max:255',
            'tarif' => 'required|numeric',
            'nominalTarif' => 'required|numeric',
            'fileHasilPenilaian' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string',
            'isDefault' => 'boolean',
        ]);

        $record = TarifObjekRetribusi::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = TarifObjekRetribusi::findOrFail($id);

        $data = $request->validate([
            'idObjekRetribusi' => 'required|exists:objekRetribusi,idObjekRetribusi',
            'idJenisJangkaWaktu' => 'required|exists:jenisJangkaWaktu,idJenisJangkaWaktu',
            'tanggalDinilai' => 'required|date',
            'namaPenilai' => 'required|string|max:255',
            'tarif' => 'required|numeric',
            'nominalTarif' => 'required|numeric',
            'fileHasilPenilaian' => 'nullable|string|max:255',
            'keterangan' => 'nullable|string',
            'isDefault' => 'boolean',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = TarifObjekRetribusi::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Tarif Objek Retribusi dihapus (soft delete).']);
    }
}
