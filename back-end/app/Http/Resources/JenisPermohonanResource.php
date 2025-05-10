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
        return [
            'id' => $this->idJenisPermohonan,
            'parentId' => $this->parentId,
            'jenisPermohonan' => $this->jenisPermohonan,
            'isDeleted' => $this->isDeleted,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'children' => JenisPermohonanResource::collection($this->whenLoaded('children')),
        ];
    }
}