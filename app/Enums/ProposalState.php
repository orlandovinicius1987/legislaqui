<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ProposalState extends Enum
{
    const NotModerated = 0;
    const Approved = 1;
    const Disapproved = 2;
    const Supported = 3;
    const Expired = 4;
    const Sent = 5;
    const Forwarded = 6;
    const NotForwarded = 7;
    const BillProject = 8;
}
