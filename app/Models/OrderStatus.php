<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    use HasFactory;
    /**
     * Summary of table
     * @var string
     */
    protected $table = 'order_status';
    /**
     * Summary of fillable
     * @var array
     */
    protected $fillable = ['name'];
}
