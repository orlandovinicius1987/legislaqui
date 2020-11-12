<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 08/04/2016
 * Time: 12:34.
 */

use App\Repositories\RolesRepository;

if (!function_exists('set_menu_active')) {
    function set_menu_active($path)
    {
        return Request::is($path) ? 'active' : '';
    }
}

function get_role_id($name)
{
    return app(RolesRepository::class)->findIdByRole($name);
}

function only_numbers($string)
{
    return preg_replace('/\D/', '', $string);
}
