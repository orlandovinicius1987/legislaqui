<?php

namespace App\Data\Models\Traits;

trait Orderable
{
    public function getOrderBy()
    {
        return isset($this->orderBy) ? $this->orderBy : null;
    }
}
