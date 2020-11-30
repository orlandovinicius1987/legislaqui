@component('mail::message')
A Ideia Legislativa a seguir se tornou projeto de lei!

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
