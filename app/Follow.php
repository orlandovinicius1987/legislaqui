<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 14/04/2016
 * Time: 14:11.
 */
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Follow extends Eloquent
{
    public $timestamps = false;

    protected $fillable = ['user_id', 'proposal_id'];
    protected $table = 'proposal_follows';

    /**
     * Get the followed proposal.
     */
    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }
}
