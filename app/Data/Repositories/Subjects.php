<?php
namespace App\Data\Repositories;

use App\Data\Models\Subject;

class Subjects extends Repository
{
    protected $model = Subject::class;

    public function getSelectOptions()
    {
        return $this->model::all()->pluck('name', 'id');
    }
}
