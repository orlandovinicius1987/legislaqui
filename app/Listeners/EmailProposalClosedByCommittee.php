<?php

namespace App\Listeners;

use App\Repositories\ProposalsRepository;

class EmailProposalClosedByCommittee
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
     * @param ProposalClosedByCommittee $event
     *
     * @return void
     */
    public function handle(ProposalClosedByCommittee $event)
    {
        $this->repository->sendProposalClosedByCommittee($event->getProposal());
    }
}
