<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_merchant', 'id_customer', 'id_menu', 'jumlah_order', 'no_hp', 'alamat_pengiriman',
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'id_customer');
    }

    public function merchant()
    {
        return $this->belongsTo(Merchant::class, 'id_merchant');
    }

    public function menu()
    {
        return $this->belongsTo(KelolaMenu::class, 'id_menu');
    }
}

