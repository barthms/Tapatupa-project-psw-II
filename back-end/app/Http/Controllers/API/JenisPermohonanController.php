<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JenisPermohonan;
use Illuminate\Http\Request;

class JenisPermohonanController extends Controller
{
    // GET /api/jenisPermohonan
    public function index()
    {
        $data = JenisPermohonan::where('isDeleted', false)->get();
        return response()->json($data);
    }

    // POST /api/jenisPermohonan
    public function store(Request $request)
    {
        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenisPermohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
        ]);

        $jenisPermohonan = JenisPermohonan::create($validated);

        return response()->json($jenisPermohonan, 201);
    }

    // GET /api/jenisPermohonan/{id}
    public function show($id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        return response()->json($jenisPermohonan);
    }

    // PUT /api/jenisPermohonan/{id}
    public function update(Request $request, $id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);

        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenisPermohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
            'isDeleted' => 'boolean',
        ]);

        $jenisPermohonan->update($validated);

        return response()->json($jenisPermohonan);
    }

    // DELETE /api/jenisPermohonan/{id}
    public function destroy($id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        $jenisPermohonan->update(['isDeleted' => true]);

        return response()->json(['message' => 'Deleted successfully']);
    }
}
