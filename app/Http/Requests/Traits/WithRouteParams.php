<?php

namespace App\Http\Requests\Traits;

trait WithRouteParams
{
    public function all($array = null)
    {
        return array_replace_recursive(
            parent::all(),
            $this->route()->parameters()
        );
    }
}
