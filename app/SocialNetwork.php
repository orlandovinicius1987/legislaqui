<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class SocialNetwork extends Model
{
    use SoftDeletes;

    protected $table = 'social_networks';

    protected $fillable = [
        'id', 'name', 'slug', 'logo',
    ];

    protected $dates = ['deleted_at'];

     // Socialite
    public function users()
    {
        return $this->belongsToMany('App\User', 'social_users', 'social_network_id');
    }
}
