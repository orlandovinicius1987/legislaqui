<?php

namespace App\Data\Repositories\Traits;

trait OrderBy
{
    public function getOrderByOptions()
    {
        return [
            json_encode([
                'field' => 'name',
                'order' => 'desc'
            ]) => 'Ordem alfabética'
        ];
    }

    public function getDefaultOrderBy()
    {
        return $this->model->orderBy ?? ['field' => 'name', 'order' => 'desc'];
    }

    public function orderBy($query, $data)
    {
        $orderBy =
            isset($data['order_by']) && $data['order_by']
                ? (array) json_decode($data['order_by'])
                : ($data['order_by'] = $this->getDefaultOrderBy());

        return $query->orderBy($orderBy['field'], $orderBy['order']);
    }
}
