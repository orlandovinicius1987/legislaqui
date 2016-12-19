<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class SocialUser extends Model
{

    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $guarded = ['user_id', 'social_network_id', 'data'];


    public function find($id)
    {
        return SocialUser::where('social_network_user_id', $id)->first();
    }

    // Socialite
    public function user()
    {
        return $this->belongsTo('App\User');
    }

}

