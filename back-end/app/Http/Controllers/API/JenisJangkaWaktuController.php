<?php
// app/Http/Controllers/Api/JenisJangkaWaktuController.php

namespace App\Http\Controllers\Api;

use App\Models\JenisJangkaWaktu;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        return JenisJangkaWaktu::where('isDeleted', false)->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'jenisJangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        return JenisJangkaWaktu::create([
            'jenisJangkaWaktu' => $request->jenisJangkaWaktu,
            'keterangan' => $request->keterangan,
        ]);
    }

    public function destroy($id)
    {
        $data = JenisJangkaWaktu::findOrFail($id);
        $data->isDeleted = true;
        $data->save();

        return response()->json(['message' => 'Berhasil dihapus (soft delete)']);
    }
}
