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

    // Likes __belongs_to_many__ Proposal
    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes', 'proposal_id', 'user_id' );
    }
}

