<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\PeruntukanSewa;
use Illuminate\Http\Request;

class PeruntukanSewaController extends Controller
{
    public function index()
    {
        return response()->json(
            PeruntukanSewa::where('isDeleted', false)->get()
        );
    }

    public function show($id)
    {
        $data = PeruntukanSewa::where('isDeleted', false)->findOrFail($id);
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'peruntukanSewa' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        $record = PeruntukanSewa::create($data);
        return response()->json($record, 201);
    }

    public function update(Request $request, $id)
    {
        $record = PeruntukanSewa::findOrFail($id);

        $data = $request->validate([
            'peruntukanSewa' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
            'isDeleted' => 'boolean',
        ]);

        $record->update($data);
        return response()->json($record);
    }

    public function destroy($id)
    {
        $record = PeruntukanSewa::findOrFail($id);
        $record->isDeleted = true;
        $record->save();

        return response()->json(['message' => 'Peruntukan Sewa dihapus (soft delete).']);
    }
}
