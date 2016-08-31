<?php

namespace App\Listeners;

use App\Events\ProposalClosed;
use App\Repositories\ProposalsRepository;

class EmailProposalClosed
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
     * @param ProposalClosed $event
     *
     * @return void
     */
    public function handle(ProposalClosed $event)
    {
        $this->repository->sendProposalClosed($event->getProposal());
    }
}
