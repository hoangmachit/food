<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'desc' => $this->desc,
            'media_id' => $this->media_id,
            'media' => new MediaResource($this->media),
            'price' => $this->price,
            'status' => $this->status,
            'user_id' => $this->user_id,
            'user' => $this->user,
        ];
    }
}
