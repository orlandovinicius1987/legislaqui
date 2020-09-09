<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 29/01/2016
 * Time: 16:16.
 */

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class State extends Eloquent implements Auditable
{
    use AuditableI;

    public $timestamps = false;

    protected $primaryKey = 'uf';

    protected $dates = ['created_at', 'updated_at', 'deleted_at'];

    // State __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getUfAttribute()
    {
        return $this->attributes['uf'];
    }
}
