<div class="social-buttons">

    <a href="mailto:&amp;subject=edemocracia&amp;body={{ urlencode($url) }} ">
        <i class="fa fa-envelope-square"></i>
    </a>

    <a href="https://www.facebook.com/sharer/sharer.php?u={{ urlencode($url) }}"
       target="_blank">
        <i class="fa fa-facebook-official"></i>
    </a>

    <a href="https://twitter.com/intent/tweet?url={{ urlencode($url) }}"
       target="_blank">
        <i class="fa fa-twitter-square"></i>
    </a>

    <a href="https://plus.google.com/share?url={{ urlencode($url) }}"
       target="_blank">
        <i class="fa fa-google-plus-square"></i>
    </a>

    <div class="pull-right">

        <a href="{{ route('proposal.like', ['id' => $proposal->id]) }}">
            <i class="fa fa-caret-square-o-up" aria-hidden="true"></i> Like
        </a>

        <a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}">
            <i class="fa fa-caret-square-o-down" aria-hidden="true"></i> Dislike
        </a>

        <a href="{{ route('proposal.approval', $proposal->id) }}">
            <i class="fa fa-star" aria-hidden="true"></i> Apoiar
        </a>

    </div>
</div>

