<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 22/09/2016
 * Time: 13:06.
 */
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class BillsProject extends Eloquent
{
    //public $timestamps = false;

    protected $fillable = ['number', 'owner', 'link'];
    protected $table = 'bills_project';

    // BillsProject __belongs_to__ Proposal
    public function proposal()
    {
        return $this->belongsTo(Proposal::class, 'bills_project_id');
    }
}
