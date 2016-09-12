<div class="action_links">

    <a href="{{ route('proposal.like', ['id' => $proposal->id]) }}">
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Curtir
    </a>

    <a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}">
        <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> Descurtir
    </a>

    @if (!Auth::check())
        <a href="{{ route('proposal.approval', $proposal->id) }}" onclick="if(!confirm('Para apoiar oficialmente uma ideia legislativa você precisa criar uma conta na página da ALERJ.')){return false;};">
            <i class="fa fa-star" aria-hidden="true"></i> Apoiar essa Ideia!
        </a>
    @else
        <a href="{{ route('proposal.approval', $proposal->id) }}">
            <i class="fa fa-star" aria-hidden="true"></i> Apoiar essa Ideia!
        </a>
    @endif

    <div class="pull-right">

        <a href="mailto:&amp;subject={{ config('app.name') }}&amp;body={{ urlencode($url) }} ">
            <i class="fa fa-envelope-square"></i>
        </a>

        <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode($url) }}"
           target="_blank">
            <i class="fa fa-facebook-official"></i>
        </a>

        <a href="https://twitter.com/intent/tweet?text=Proponha%20sua%20Ideia%20Legislativa%20Aqui!&url={{ urlencode($url) }}&via=Legislaqui! - ALERJ&hashtags={!! config('app.name') !!},e-democracia,e-cidadania"
           target="_blank">
            <i class="fa fa-twitter-square"></i>
        </a>

        <a href="https://plus.google.com/share?url={{ urlencode($url) }}"
           target="_blank">
            <i class="fa fa-google-plus-square"></i>
        </a>

    </div>
</div>

