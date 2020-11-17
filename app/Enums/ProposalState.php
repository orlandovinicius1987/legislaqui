<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ProposalState extends Enum
{
    const All = 'Todas';

    const NotModerated = 'Não moderadas';
    const Approved = 'Aprovadas';
    const Disapproved = 'Não aprovadas';
    const Supported = 'Alcançaram apoios suficientes';
    const Expired = 'Expiradas';
    const Sent = 'Enviadas para a Comissão de Normas';
    const Forwarded = 'Enviadas para projeto de lei';
    const NotForwarded = 'Não acatadas pela Comissão de normas';
    const BillProject = 'Viraram projeto de lei';
}
