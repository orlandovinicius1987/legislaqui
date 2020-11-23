<?php

namespace App\Providers;

use App\Policies\ProposalPolicy;
use App\Policies\UserPolicy;
use App\Data\Models\Proposal;
use App\Data\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Proposal::class => ProposalPolicy::class,
        User::class => UserPolicy::class
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param \Illuminate\Contracts\Auth\Access\Gate $gate
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
    }
}
