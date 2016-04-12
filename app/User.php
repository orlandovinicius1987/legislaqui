<?php

namespace App;

use \App\Proposal;
use \App\Like;
use Auth;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'uf', 'role_id'
    ];

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    // User has many Proposals
    public function proposals() {
        return $this->hasMany(Proposal::class);
    }

    // User approvals Proposals
    public function approvals() {
        return $this->belongsToMany(Proposal::class, 'approvals', 'user_id',  'proposal_id' );
    }

    // User has only one State
    public function states() {
        return $this->hasOne(State::class);
    }

    // User has Roles
    public function roles() {
        return $this->has(Role::class);
    }

    //is_admin attribute
    public function getIsAdminAttribute() {
        return Auth::user()->role_id === 0 or Auth::user()->role_id === 1;
    }

}
