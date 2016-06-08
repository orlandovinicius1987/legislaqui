<?php

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Proposal extends Eloquent {

    //public $timestamps = false;

    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'pub_date', 'limit_date'];

    protected $fillable = ['name', 'idea_central', 'problem', 'idea_exposition', 'user_id', 'situation', 'pub_date', 'limit_date'];

    //protected $guarded = ['id', 'pub_date', 'limit_date'];

    // Proposal __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Approvals __belongs_to_many__ Proposal
    public function approvals()
    {
        return $this->belongsToMany(User::class, 'approvals', 'proposal_id', 'user_id' );
    }

    public function responder()
    {
        return $this->belongsTo(User::class, 'responder_id');
    }

    // Proposal __has_many__ Likes
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

}

