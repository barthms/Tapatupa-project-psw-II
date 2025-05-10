<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\JenisPermohonanResource;
use App\Models\JenisPermohonan;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class JenisPermohonanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $query = JenisPermohonan::query();
        
        // Only show non-deleted items by default
        if (!$request->has('showDeleted') || !$request->showDeleted) {
            $query->where('isDeleted', false);
        }
        
        // Option to include children
        if ($request->has('withChildren') && $request->withChildren) {
            $query->with('children');
        }
        
        // Option to only show root items (no parent)
        if ($request->has('onlyRoot') && $request->onlyRoot) {
            $query->whereNull('parentId');
        }
        
        $jenisPermohonan = $query->get();
        
        return JenisPermohonanResource::collection($jenisPermohonan);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @throws ValidationException
     */
    public function store(Request $request): JenisPermohonanResource
    {
        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenisPermohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
        ]);

        $jenisPermohonan = JenisPermohonan::create($validated);

        return new JenisPermohonanResource($jenisPermohonan);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id): JenisPermohonanResource
    {
        $query = JenisPermohonan::query();
        
        // Option to include children
        if ($request->has('withChildren') && $request->withChildren) {
            $query->with('children');
        }
        
        $jenisPermohonan = $query->findOrFail($id);
        
        return new JenisPermohonanResource($jenisPermohonan);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @throws ValidationException
     */
    public function update(Request $request, string $id): JenisPermohonanResource
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);

        $validated = $request->validate([
            'parentId' => 'nullable|exists:jenisPermohonan,idJenisPermohonan',
            'jenisPermohonan' => 'required|string|max:255',
        ]);

        // Prevent setting itself as parent
        if (isset($validated['parentId']) && $validated['parentId'] == $id) {
            throw ValidationException::withMessages([
                'parentId' => ['Cannot set itself as parent'],
            ]);
        }

        $jenisPermohonan->update($validated);

        return new JenisPermohonanResource($jenisPermohonan);
    }

    /**
     * Soft delete the specified resource.
     */
    public function destroy(string $id): Response
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        $jenisPermohonan->update(['isDeleted' => true]);

        return response()->noContent();
    }
    
    /**
     * Restore a soft-deleted resource.
     */
    public function restore(string $id): JenisPermohonanResource
    {
        $jenisPermohonan = JenisPermohonan::findOrFail($id);
        $jenisPermohonan->update(['isDeleted' => false]);
        
        return new JenisPermohonanResource($jenisPermohonan);
    }
}