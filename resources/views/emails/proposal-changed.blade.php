@component('mail::message')
    A ideia legislativa a qual você acompanha foi alterada.

@component('mail::button', ['url' => route('proposal.show', ['id' => $proposal->id])])
    Visualizar ideia
@endcomponent

| Proposta Legislativa |
| :-------------------- |
| {{ $proposal->name }} |

| Exposição da Ideia |
| :------------------ |
| {{ $proposal->idea_exposition }} |

@include('emails.signature')

@endcomponent
