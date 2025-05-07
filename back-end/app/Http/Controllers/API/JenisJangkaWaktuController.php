<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\JenisJangkaWaktu;
use Illuminate\Http\Request;

class JenisJangkaWaktuController extends Controller
{
    public function index()
    {
        return JenisJangkaWaktu::where('isDeleted', false)->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'jenisJangkaWaktu' => 'required|string|max:255',
            'keterangan' => 'nullable|string',
        ]);

        $item = JenisJangkaWaktu::create($data);
        return response()->json($item, 201);
    }

    public function show($id)
    {
        return JenisJangkaWaktu::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $item = JenisJangkaWaktu::findOrFail($id);
        $item->update($request->only('jenisJangkaWaktu', 'keterangan'));
        return response()->json($item);
    }

    public function destroy($id)
    {
        $item = JenisJangkaWaktu::findOrFail($id);
        $item->update(['isDeleted' => true]);
        return response()->json(['message' => 'Deleted']);
    }
}
