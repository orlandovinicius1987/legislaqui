<?php

namespace App\Http\Middleware;

use Closure;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\Exception\UnsatisfiedDependencyException;

class UUIDMiddleware
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
        if($request->hasCookie('uuid'))
        {
            return $next($request);
        }
        else
        {
            $uuid = Uuid::uuid4();

//            if (Auth::check())
//                $user_id = Auth::user()->id;
//            else
//                $user_id = '';
//
//            Visitors::create([
//                'user_id' => $user_id,
//                'uuid' => $uuid
//            ]);

            $response = $next($request);
            return $response->withCookie(cookie()->forever('uuid', $uuid));
        }
    }
}