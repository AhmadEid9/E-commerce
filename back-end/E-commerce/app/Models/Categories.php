<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    public function items()
    {
        return $this->hasMany(Items::class);
    }

    protected $fillable = [
        'name',
    ];

    use HasFactory;
}
