<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use App\Data\Models\Notification;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailable as IlluminateMailable;
use Illuminate\Contracts\Mail\Mailer as MailerContract;

class Mailable extends IlluminateMailable
{
    use Queueable, SerializesModels;

    /**
     * @var \App\Notifications\SendProposalChanged
     */
    public $notification;

    /**
     * Create a new message instance.
     *
     * @param Notification $notification
     */
    public function __construct($notification)
    {
        $this->notification = $notification;
    }

    /**
     * Send the message using the given mailer.
     *
     * @param  \Illuminate\Contracts\Mail\Mailer  $mailer
     * @return void
     */
    public function send(MailerContract $mailer)
    {
        parent::send($mailer);
    }

    public function fromArray($field)
    {
        return [
            'name' => config('mail.from.name'),
            'address' => config('mail.from.address'),
        ][$field];
    }
}
