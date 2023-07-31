<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Items extends Model
{
    public function category(){
        return $this->BelongsTo(Category::class);
    }

    protected $fillable = [
        'item_name',
        'item_description',
        'item_price',
        'item_category',
        'item_image',
    ];
    use HasFactory;
}
