<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 22/09/2016
 * Time: 13:06.
 */

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class BillsProject extends Eloquent implements Auditable
{
    use AuditableI;

    //public $timestamps = false;

    protected $fillable = ['number', 'owner', 'link', 'year'];
    protected $table = 'bills_project';

    // BillsProject __belongs_to__ Proposal
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }
}
