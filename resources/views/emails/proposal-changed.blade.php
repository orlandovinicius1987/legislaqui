@component('mail::message')
A proposta legislativa , a qual você acompanha, foi alterada.

Visualize a proposta em:
<a href="{{route('proposal.show', ['id' => $proposal->id])}}">Link</a>

@include('emails.signature')

@endcomponent
