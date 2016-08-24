<?php

namespace App\Listeners;

use App\Events\ProposalWasCreated;
use App\Repositories\ProposalsRepository;

class EmailProposalCreator
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
     * @param ProposalWasCreated $event
     *
     * @return void
     */
    public function handle(ProposalWasCreated $event)
    {
        $this->repository->sendProposalToCreator($event->getProposal());
    }
}
