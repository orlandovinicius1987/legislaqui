<?php

namespace App\Listeners;

use App\Events\ProposalReachedApprovalGoal;
use App\Repositories\ProposalsRepository;

class EmailProposalReachedApprovalGoal
{
    /**
     * @var ProposalsRepository
     */
    private $repository;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(ProposalsRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Handle the event.
     *
     * @param ProposalReachedApprovalGoal $event
     *
     * @return void
     */
    public function handle(ProposalReachedApprovalGoal $event)
    {
        $this->repository->sendProposalApprovalGoalNotification(
            $event->getProposal()
        );
    }
}
