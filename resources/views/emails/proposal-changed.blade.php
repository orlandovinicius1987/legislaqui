@component('mail::message')
    A ideia legislativa , a qual você acompanha, foi alterada.

@component('mail::button', ['url' => route('proposal.show', ['id' => $proposal->id])])
    Visualizar ideia
@endcomponent

| Proposta Legislativa |
| :-------------------- |
| {{ $proposal->name }} |

| Exposição da Ideia |
| :------------------ |
| {{ $proposal->idea_exposition }} |


{{--<table class="row callout">--}}
{{--    <tr>--}}
{{--        <td class="wrapper last">--}}
{{--            <table class="twelve columns">--}}
{{--                <tr>--}}
{{--                    <td class="panel">--}}
{{--                        <h5>Proposta Legislativa</h5>--}}
{{--                        <p class="lead">{{ $proposal->name }}</p>--}}
{{--                    </td>--}}
{{--                    <td class="expander"></td>--}}
{{--                </tr>--}}
{{--            </table>--}}
{{--        </td>--}}
{{--    </tr>--}}
{{--</table>--}}
{{--<table class="row">--}}
{{--    <tr>--}}
{{--        <td class="wrapper last">--}}
{{--            <table class="twelve columns">--}}
{{--                <tr>--}}
{{--                    <td class="last right-text-pad">--}}
{{--                        <p><strong>Exposição da Ideia:</strong> {{ $proposal->idea_exposition }}</p>--}}
{{--                    </td>--}}
{{--                    <td class="expander"></td>--}}
{{--                </tr>--}}
{{--            </table>--}}
{{--        </td>--}}
{{--    </tr>--}}
{{--</table>--}}

@include('emails.signature')

@endcomponent
