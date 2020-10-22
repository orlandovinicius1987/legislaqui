<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 14/04/2016
 * Time: 14:11.
 */

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class Like extends Eloquent implements Auditable
{
    use AuditableI;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'proposal_id',
        'uuid',
        'ip_address',
        'like',
    ];
    protected $table = 'likes';

    //    public function owner()
    //    {
    //        return $this->belongsTo(Proposal::class, 'proposal_id');
    //    }

    /**
     * Get the proposal that owns the like.
     */
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
        // if foreign_key is different of proposal_id; not the case
        //return $this->belongsTo('App\Proposal', 'foreign_key');
    }
}
