<?php

namespace App\Http\Middleware;

use Closure;

class NavbarAndFooterParams
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->has('navbar')) {
            session()->put('navbarDisabled', !to_boolean($request->get('navbar')));
        }

        if ($request->has('footer')) {
            session()->put('footerDisabled', !to_boolean($request->get('footer')));
        }

        return $next($request);
    }
}
