<?php
/**
 * Created by PhpStorm.
 * User: falbernaz
 * Date: 08/04/2016
 * Time: 12:34
 */

if ( ! function_exists('set_menu_active'))
{
    function set_menu_active($path)
    {
        return Request::is($path) ? 'active' : '';
    }
}