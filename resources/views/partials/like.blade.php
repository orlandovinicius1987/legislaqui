<!-- <script>
    $(function(){
        var proposalId = <?php echo $proposal->id;  ?>;

        $('.like-btn').click(function(){
            $('.dislike-btn').removeClass('dislike-h');
            $(this).addClass('like-h');
            alert('like ' +proposalId);
            $.ajax({
                type:"POST",
                url:"/proposals/ajax.php",
                data:'act=like&proposalId='+proposalId,
                success: function(){
                }
            });
        });
        $('.dislike-btn').click(function(){
            $('.like-btn').removeClass('like-h');
            $(this).addClass('dislike-h');
            alert('dislike ' +proposalId);
            $.ajax({
                type:"POST",
                url:"/proposals/ajax.php",
                data:'act=dislike&proposalId='+proposalId,
                success: function(){
                }
            });
        });
    });
</script> -->

<div class="like-buttons">
    <div class="like-btn">
        <a href="{{ route('proposal.like', ['id' => $proposal->id]) }}">
            <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span>Like</a></div>
    <div class="dislike-btn">
        <a href="{{ route('proposal.unlike', ['id' => $proposal->id]) }}">
            <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span>Dislike</a></div>
</div>