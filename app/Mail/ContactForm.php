<?php

namespace App\Mail;

use App\Http\Requests\ContactFormRequest;
use App\Support\Constants;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    protected $contactFormRequest;

    public function __construct(ContactFormRequest $contactFormRequest)
    {
        $this->contactFormRequest = $contactFormRequest;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->view('emails.contact')
            ->subject(Constants::CONTACT_FORM_MAIL_SUBJECT)
            ->with(['name' => $this->contactFormRequest->get('name')])
            ->with(['email' => $this->contactFormRequest->get('email')])
            ->with(['user_message' => $this->contactFormRequest->get('message')]);
    }
}
