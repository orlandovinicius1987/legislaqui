<?php

namespace App\Data\Models\Traits;

trait Orderable
{
    public function getOrderBy()
    {
        return coollect(isset($this->orderBy) ? $this->orderBy : []);
    }
}
