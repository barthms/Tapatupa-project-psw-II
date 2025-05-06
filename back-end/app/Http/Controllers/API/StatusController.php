<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function index()
    {
        return response()->json(
            Status::with('jenisStatus')->where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = Status::with('jenisStatus')->where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'idJenisStatus' => 'required|exists:jenisStatus,idJenisStatus',
            'namaStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        $record = Status::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = Status::findOrFail($id);

        $data = $request->validate([
            'idJenisStatus' => 'required|exists:jenisStatus,idJenisStatus',
            'namaStatus' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = Status::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Status dihapus (soft delete).']);
    }
}
