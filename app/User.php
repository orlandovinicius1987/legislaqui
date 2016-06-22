<?php

namespace App;

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
        'name', 'email', 'password', 'uf', 'role_id', 'cpf', 'uuid'
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

    // User likes Proposals
    public function likes() {
        return $this->belongsToMany(Proposal::class, 'likes', 'user_id',  'proposal_id' );
    }

    // User has only one State
    public function states() {
        return $this->hasOne(State::class);
    }

    // User has one Role
    public function roles() {
        return $this->hasOne(Role::class, 'id');
    }

    // Get is_admin attribute
    public function getIsAdminAttribute() {
        return Auth::user()->role_id === 0 or Auth::user()->role_id === 1;
    }

    // Get Role Name
        public function getRoleNameAttribute() {
        return Role::find($this->role_id)->role;
    }

    // Get Proposals Count
    public function getProposalsCountAttribute() {
        return Proposal::where('user_id', $this->id)->count();
    }

    // Get Likes Count
    public function getLikesCountAttribute() {
        return Like::where('user_id', $this->id)->count();
    }

    // Get Approvals Count
    public function getApprovalsCountAttribute ()
    {
        return Approval::where('user_id', $this->id)->count();
    }

    // Get Responded Count
    public function getProposalsRespondedCountAttribute ()
    {
        return Proposal::where('responder_id', $this->id)->count();
    }

    public function getAvatarAttribute()
    {
        return "https://www.gravatar.com/avatar/" . md5( strtolower( trim( $this->email ) ) ) . "?d=identicon" . "&s=80";
    }

}
