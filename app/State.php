<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 29/01/2016
 * Time: 16:16.
 */
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class State extends Eloquent
{
    public $timestamps = false;

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    // State __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
