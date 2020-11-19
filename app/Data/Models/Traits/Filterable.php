<?php

namespace App\Data\Models\Traits;

trait Filterable
{
    public function getFilterableColumns()
    {
        return coollect(
            isset($this->filterableColumns) ? $this->filterableColumns : []
        );
    }
}
