<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 27/06/2016
 * Time: 10:49.
 */

namespace App\Repositories;

use App\Data\Repositories\Repository;
use App\Role;
use App\User;
use Illuminate\Contracts\Cache\Repository as Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Ramsey\Uuid\Uuid;

class RolesRepository extends Repository
{
    protected $model = Role::class;

    protected $cache;

    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
    }

    public function findIdByRole($roleName)
    {
        if(!$this->cache->has('role_'.$roleName)){
            $this->cache->put('role_'.$roleName,Role::where('role',$roleName)->first()->id);
        }
        return $this->cache->get('role_'.$roleName);
   }
}
