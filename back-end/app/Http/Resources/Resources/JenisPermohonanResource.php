<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class JenisPermohonanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'idJenisPermohonan' => $this->idJenisPermohonan,
            'parentId' => $this->parentId,
            'jenisPermohonan' => $this->jenisPermohonan,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

        // Jika relasi children dimuat dan ada anak yang tidak dihapus
        if ($this->relationLoaded('children') && $this->children->isNotEmpty()) {
            $children = $this->children->where('isDeleted', false);
            if ($children->isNotEmpty()) {
                $data['children'] = JenisPermohonanResource::collection($children);
            }
        }

        return $data;
    }
}
