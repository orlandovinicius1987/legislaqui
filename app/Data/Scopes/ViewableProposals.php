<?php

namespace App\Data\Scopes;

use App\Data\Models\Proposal;
use App\Data\Models\User;
use App\Enums\ProposalState;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class ViewableProposals extends Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $builder
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function apply(Builder $builder, Model $model)
    {
        $user = auth()->user();
        if (static::$enabled) {
            if (!$user || !$user->is_admin) {
                $builder->where(function ($builder) use ($user) {
                    $builder->ofState([
                        ProposalState::Approved,
                        ProposalState::Disapproved,
                        ProposalState::Supported,
                        ProposalState::Expired,
                        ProposalState::Sent,
                        ProposalState::Forwarded,
                        ProposalState::NotForwarded,
                        ProposalState::BillProject
                    ]);

                    if ($user) {
                        $builder->orWhere('proposals.user_id', $user->id);
                    }
                });
            }
        }
    }
}
