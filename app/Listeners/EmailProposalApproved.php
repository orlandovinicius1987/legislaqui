<?php

namespace App\Listeners;

use App\Repositories\ProposalsRepository;

class EmailProposalApproved
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
     * @param ProposalApproved $event
     *
     * @return void
     */
    public function handle(ProposalApproved $event)
    {
        $this->repository->sendProposalApproved($event->getProposal());
    }
}
