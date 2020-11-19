<?php

namespace App\Data\Models\Traits;

trait Selectable
{
    public function getSelectColumns()
    {
        return coollect(
            isset($this->selectColumns) ? $this->selectColumns : []
        );
    }

    public function getSelectColumnsRaw()
    {
        return $this->replaceWheres(
            coollect(
                isset($this->selectColumnsRaw) ? $this->selectColumnsRaw : []
            )
        );
    }

    public function replaceWheres($selects)
    {
        return $selects->map(function ($select) {
            return $this->replaceWhere($select);
        });
    }

    public function replaceWhere($select)
    {
        return $select;
    }
}
