<?php
namespace App\Data\Models;

use App\Data\Models\User;
use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class City extends Eloquent implements Auditable
{
    use AuditableI;

    protected $fillable = ['name'];

    protected $dates = ['created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
