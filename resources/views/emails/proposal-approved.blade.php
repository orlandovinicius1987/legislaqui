@component('mail::message')
Parabéns! A Ideia Legislativa a seguir foi aprovada e está aberta para receber apoios. Compartilhe e faça a ideia alcançar os apoios suficientes!

| Proposta Legislativa |
| :-------------------- |
| {{ $proposal->name }} |

| Exposição da Ideia |
| :------------------ |
| {{ $proposal->idea_exposition }} |

@component('mail::button', ['url' => route('proposal.show', ['id' => $proposal->id])])
    Visualizar ideia
@endcomponent

@component('mail::footer')
    @include('emails.cancel-subscription', ['proposal'=>$proposal])
    <br>
    @include('emails.signature')
@endcomponent

@endcomponent
