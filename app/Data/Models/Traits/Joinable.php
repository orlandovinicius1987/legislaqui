<?php

namespace App\Data\Models\Traits;

trait Joinable
{
    public function getJoins()
    {
        return coollect(isset($this->joins) ? $this->joins : []);
    }
}
