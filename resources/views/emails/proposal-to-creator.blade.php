@component('mail::message')
    <table class="container">
        <tr>
            <td>
                <table class="row">
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <h3><strong>{{ $proposal->user->name }}</strong>, Obrigado pela sua contribuição!</h3>
                                    </td>
                                    <td class="expander"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <h5>Proposta Legislativa</h5>
                                        <p class="lead">{{ $proposal->name }}</p>
                                    </td>
                                    <td class="expander"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table class="row">
                    <tr>
                        <td>
                            <table>
                                <tr>
                                    <td>
                                        <p><strong>Problema:</strong> {{ $proposal->problem }}</p>
                                        <p><strong>Exposição da Ideia:</strong> {{ $proposal->idea_exposition }}</p>
                                    </td>
                                    <td class="expander"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table class="row">
                    Visualize a proposta em:
                    <a href="{{route('proposal.show', ['id' => $proposal->id])}}">Link</a>
                </table>
            </td>
        </tr>
    </table>

    @include('emails.signature')

@endcomponent
