<?php

namespace App\Data\Models;

use App\Data\Models\Traits\Eventable;
use App\Data\Models\Traits\Joinable;
use App\Data\Models\Traits\Orderable;
use App\Data\Models\Traits\Selectable;
use App\Data\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Model as Eloquent;
use OwenIt\Auditing\Contracts\Auditable as AuditableContract;

abstract class Model extends Eloquent implements AuditableContract
{
    use Selectable, Joinable, Orderable, Filterable, Eventable;

    protected $dates = ['created_at', 'updated_at'];

    protected $controlCreatedBy = false;

    protected $controlUpdatedBy = false;

    /**
     * Save the model to the database.
     *
     * @param  array  $options
     * @return bool
     */
    public function save(array $options = [])
    {
        $saved = parent::save();

        $this->fireEvents(
            $this,
            $this->wasRecentlyCreated ? 'Created' : 'Updated'
        );

        return $saved;
    }

    public static function boot()
    {
        parent::boot();

        static::updating(function ($model) {
            if ($model->controlUpdatedBy) {
                $model->updated_by_id = ($user = auth()->user())
                    ? $user->id
                    : 1;
            }
        });

        static::creating(function ($model) {
            if ($model->controlCreatedBy) {
                $model->created_by_id = ($user = auth()->user())
                    ? $user->id
                    : 1;
            }
        });

        static::deleted(function ($model) {
            $model->fireEvents($model, 'Deleted');
        });
    }

    public static function disableGlobalScopes()
    {
    }

    public static function enableGlobalScopes()
    {
    }
}
