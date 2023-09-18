<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;
    /**
     * Summary of fillable
     * @var array
     */
    protected $fillable = ['name', 'extension', 'status'];

    public function getPathAttribute()
    {
        return asset('uploads' . DIRECTORY_SEPARATOR . $this->name);
    }
}
