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
    const Forwarded = 'Em discussão pela comissão';
    //const NotForwarded = 'Não acatadas pela Comissão de normas';
    const BillProject = 'Viraram projeto de lei';

    public static function filterStates()
    {
        return [
            json_encode([self::All]) => 'Todas',
            json_encode(self::openStates()) => 'Abertas',
            json_encode([
                self::Supported
            ]) => 'Aguardando envio à Comissão de Normas',
            json_encode([self::Sent]) => 'Em avaliação pela Comissão de Normas',
            json_encode([self::Expired]) => 'Encerradas sem apoios suficientes',
            json_encode([
                self::BillProject
            ]) => 'Transformadas em projeto de lei'
        ];
    }

    public static function openStates()
    {
        return [self::Approved, self::Supported];
    }
}
