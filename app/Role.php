<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 04/03/2016
 * Time: 14:07.
 */
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Role extends Eloquent
{
    public $timestamps = false;

    // Role __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class, 'role_id');
    }
}
