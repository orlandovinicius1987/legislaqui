<?php

namespace App\Listeners;

use App\Events\ProposalTimeLimit;
use App\Repositories\ProposalsRepository;

class EmailProposalTimeLimit
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
     * @param ProposalTimeLimit $event
     *
     * @return void
     */
    public function handle(ProposalTimeLimit $event)
    {
        $this->repository->sendProposalTimeLimit($event->getProposal());
    }
}
