@component('mail::message')
Você está recebendo esta mensagem porque foi solicitada a troca de senha da sua conta.

@component('mail::button', ['url' => $resetUrl])
    Trocar senha
@endcomponent

Este link irá expirar em {{$expire}} minutos.

Se você não solicitou a troca da senha, por favor ignore esta mensagem.

@component('mail::footer')
    @include('emails.signature')
@endcomponent

@endcomponent
