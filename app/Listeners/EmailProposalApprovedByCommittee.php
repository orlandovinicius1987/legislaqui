<?php

namespace App\Listeners;

use App\Repositories\ProposalsRepository;

class EmailProposalApprovedByCommittee
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
     * @param ProposalApprovedByCommittee $event
     *
     * @return void
     */
    public function handle(ProposalApprovedByCommittee $event)
    {
        $this->repository->sendProposalApprovedByCommittee($event->getProposal());
    }
}
