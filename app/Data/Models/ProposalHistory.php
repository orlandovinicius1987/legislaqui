<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/02/2016
 * Time: 11:56.
 */

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class ProposalHistory extends Eloquent implements Auditable
{
    use AuditableI;
    protected $table = 'proposals_history';
    public $timestamps = false;
}
