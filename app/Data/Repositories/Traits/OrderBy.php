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
        return (new $this->model())->getOrderBy() ?? [
            'field' => 'name',
            'order' => 'desc'
        ];
    }

    public function new()
    {
        return new $this->model();
    }

    public function orderBy($query, $data)
    {
        $orderBy =
            isset($data['order_by']) && $data['order_by']
                ? (array) json_decode($data['order_by'])
                : ($data['order_by'] = $this->getDefaultOrderBy());

        $this->addCustomSelects($query, $orderBy);

        return $query->orderBy($orderBy['field'], $orderBy['order']);
    }

    public function addCustomSelects($query, $orderBy)
    {
    }
}
