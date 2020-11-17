<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 14/04/2016
 * Time: 14:11.
 */

namespace App\Data\Models;

use App\Data\Models\Proposal;
use App\Data\Models\User;
use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Auditable as AuditableI;
use OwenIt\Auditing\Contracts\Auditable;

class ProposalFollow extends Eloquent implements Auditable
{
    use AuditableI;

    public $timestamps = false;

    protected $fillable = ['user_id', 'proposal_id'];
    protected $table = 'proposal_follows';

    protected $with = ['user'];
    /**
     * Get the followed proposal.
     */
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
