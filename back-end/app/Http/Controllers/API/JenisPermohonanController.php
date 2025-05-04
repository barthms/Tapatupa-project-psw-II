<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JenisPermohonan;
use Illuminate\Http\Request;

class JenisPermohonanController extends Controller
{
    // GET /api/jenis-permohonan
    public function index()
    {
        $data = JenisPermohonan::where('isDeleted', false)->get();
        return response()->json($data);
    }

    // POST /api/jenis-permohonan
    public function store(Request $request)
    {
        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenis_permohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
        ]);

        $jenisPermohonan = JenisPermohonan::create($validated);

        return response()->json($jenisPermohonan, 201);
    }

    // GET /api/jenis-permohonan/{id}
    public function show($id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        return response()->json($jenisPermohonan);
    }

    // PUT /api/jenis-permohonan/{id}
    public function update(Request $request, $id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);

        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenis_permohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
            'isDeleted' => 'boolean',
        ]);

        $jenisPermohonan->update($validated);

        return response()->json($jenisPermohonan);
    }

    // DELETE /api/jenis-permohonan/{id}
    public function destroy($id)
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        $jenisPermohonan->update(['isDeleted' => true]);

        return response()->json(['message' => 'Deleted successfully']);
    }
}
