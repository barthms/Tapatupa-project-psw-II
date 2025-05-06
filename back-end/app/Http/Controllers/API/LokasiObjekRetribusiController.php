<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LokasiObjekRetribusi;
use Illuminate\Http\Request;

class LokasiObjekRetribusiController extends Controller
{
    public function index()
    {
        return response()->json(
            LokasiObjekRetribusi::where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = LokasiObjekRetribusi::where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'lokasiObjekRetribusi' => 'required|string',
        ]);

        $record = LokasiObjekRetribusi::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = LokasiObjekRetribusi::findOrFail($id);

        $data = $request->validate([
            'lokasiObjekRetribusi' => 'required|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = LokasiObjekRetribusi::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Lokasi objek retribusi dihapus (soft delete).']);
    }
}
