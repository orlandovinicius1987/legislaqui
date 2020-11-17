<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 04/03/2016
 * Time: 14:07.
 */

namespace App\Data\Models;

use App\Data\Models\User;
use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class Role extends Eloquent implements Auditable
{
    use AuditableI;
    public $timestamps = false;

    protected $fillable = ['role'];

    // Role __belongs_to__ User
    public function user()
    {
        return $this->belongsTo(User::class, 'role_id');
    }
}
