<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JenisObjekRetribusi;
use Illuminate\Http\Request;

class JenisObjekRetribusiController extends Controller
{
    public function index()
    {
        return response()->json(
            JenisObjekRetribusi::where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = JenisObjekRetribusi::where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'jenisObjekRetribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        $record = JenisObjekRetribusi::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = JenisObjekRetribusi::findOrFail($id);

        $data = $request->validate([
            'jenisObjekRetribusi' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = JenisObjekRetribusi::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Jenis objek retribusi dihapus (soft delete).']);
    }
}
