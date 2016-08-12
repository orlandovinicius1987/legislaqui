<?php

namespace App\Listeners;

use App\Events\ProposalWasCreated;
use App\Repositories\ProposalsRepository;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

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
     * @param  ProposalClosed  $event
     * @return void
     */
    public function handle(ProposalClosed $event)
    {
        $this->repository->sendProposalClosed($event->getProposal());
    }
}
