<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class SocialUser extends Model implements Auditable
{
    use AuditableI, SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $guarded = ['user_id', 'social_network_id', 'data'];

    public function find($id)
    {
        return self::where('social_network_user_id', $id)->first();
    }

    // Socialite
    public function user()
    {
        return $this->belongsTo('App\Data\Models\User');
    }
}
