@switch($proposal->state)
    @case(\App\Enums\ProposalState::NotModerated)
        <span class="badge badge-warning">
            Aguardando moderação
        </span>
    @break
    @case(\App\Enums\ProposalState::Approved)
    <span class="badge badge-warning">
            Aberta
        </span>
    @break
    @case(\App\Enums\ProposalState::Disapproved)
        <span class="badge badge-danger">
            Não aprovada
        </span>
    @break
    @case(\App\Enums\ProposalState::Supported)
        <span class="badge badge-success">
            Alcançou apoios suficientes
        </span>
    @break
    @case(\App\Enums\ProposalState::Expired)
        <span class="badge badge-danger">
            Expirada
        </span>
    @break
    @case(\App\Enums\ProposalState::Sent)
        <span class="badge badge-success">
            Enviada para a Comissão de Normas
        </span>
    @break
    @case(\App\Enums\ProposalState::Forwarded)
        <span class="badge badge-success">
            Enviada para projeto de lei
        </span>
    @break
    @case(\App\Enums\ProposalState::NotForwarded)
        <span class="badge badge-danger">
            Não acatada pela Comissão de normas
        </span>
    @break
    @case(\App\Enums\ProposalState::BillProject)
        <span class="badge badge-primary">
            Virou projeto de lei
        </span>
    @break
@endswitch
