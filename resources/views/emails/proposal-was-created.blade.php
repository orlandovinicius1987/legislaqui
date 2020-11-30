@component('mail::message')
    **{{$proposal->user->name}}**,

    Obrigado pela sua contribuição! Sua Ideia Legislativa foi criada e está aguardando moderação.

    @component('mail::button', ['url' => route('proposal.show', ['id' => $proposal->id])])
        Visualizar ideia
    @endcomponent

    | Proposta Legislativa |
    | :-------------------- |
    | {{ $proposal->name }} |

    | Exposição da Ideia |
    | :------------------ |
    | {{ $proposal->idea_exposition }} |

    @component('mail::footer')
        @include('emails.cancel-subscription', ['proposal'=>$proposal])
        <br>
        @include('emails.signature')
    @endcomponent

@endcomponent
