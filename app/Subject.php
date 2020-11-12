<?php
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class Subject extends Eloquent implements Auditable
{
    use AuditableI;

    protected $fillable = ['name'];

    protected $dates = ['created_at', 'updated_at'];

    public function proposals()
    {
        return $this->belongsToMany(Proposal::class);
    }
}
