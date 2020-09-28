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

    protected $name;
    protected $email;
    protected $message;

    public function __construct($name,$email,$message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;
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
            ->with(['name' => $this->name])
            ->with(['email' => $this->email])
            ->with(['user_message' => $this->message]);
    }
}
