<?php

namespace App\Data\Models;

use App\Proposal;
use Ramsey\Uuid\Uuid;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model as Eloquent;

class Notification extends Eloquent
{
    use Notifiable;

    /**
     * @var array
     */
    protected $fillable = [
        'proposal_id',
        'subject',
        'destination',
        'content_type',
    ];

    protected $table = 'notifications';

    public function save(array $options = [])
    {
        $this->uuid = $this->uuid ?? (string) Uuid::uuid4();

        return parent::save($options);
    }

    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }

    public function markAsSent()
    {
        $this->sent_at = now();

        $this->save();

        $this->invitation->markAsSent($this->content_type);
    }

    public function markAsReceived()
    {
        if (!$this->received_at) {
            $this->received_at = now();

            $this->save();

            $this->invitation->markAsReceived(
                'automatically',
                $this->content_type
            );
        }
    }

    public function routeNotificationForMail()
    {
        return $this->destination;
    }
}
