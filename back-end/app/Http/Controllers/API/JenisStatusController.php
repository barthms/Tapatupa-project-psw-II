<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\JenisStatus;
use Illuminate\Http\Request;

class JenisStatusController extends Controller
{
    public function index()
    {
        return response()->json(
            JenisStatus::where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = JenisStatus::where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'jenisStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        $record = JenisStatus::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = JenisStatus::findOrFail($id);

        $data = $request->validate([
            'jenisStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = JenisStatus::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Jenis status dihapus (soft delete).']);
    }
}
