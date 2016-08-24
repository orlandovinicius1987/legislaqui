<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 18/02/2016
 * Time: 11:56.
 */
namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class ProposalHistory extends Eloquent
{
    protected $table = 'proposals_history';
    public $timestamps = false;
}
