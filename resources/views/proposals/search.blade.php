@if (count($proposals) === 0)
    no articles found
@elseif (count($proposals) >= 1)
    @foreach($proposals as $proposal)
        <div class="row">
        <div class="col-xs-6">{{$proposal->id}}</div>
        <div class="col-xs-6">{{$proposal->name}}<div>
        </div>
    @endforeach
@endif