<?php

namespace App\Data\Repositories\Traits;

trait PerPage
{
    protected $defaultPageSize = 10;

    public function getViewVariables($data = null)
    {
        return [
            'pageSizes' => [
                '5' => '5',
                '10' => '10',
                '15' => '15',
                '20' => '20',
                '50' => '50'
            ],
            'per_page' => $data['per_page'] ?? $this->defaultPageSize
        ];
    }

    public function paginate($query, $data)
    {
        $data['per_page'] = $data['per_page'] ?? $this->defaultPageSize;
        $data['page'] = $data['page'] ?? 1;

        if ($data['per_page'] == 'all') {
            return $query->paginate($query->count());
        } else {
            return $query->paginate(
                $data['per_page'],
                ['*'],
                'page',
                $data['page']
            );
        }
    }
}
