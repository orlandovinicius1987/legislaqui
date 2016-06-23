<!-- JavaScripts -->
<!-- Loading jQuery -->
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>--}}

<!-- Loading Bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!-- Loading No-Captcha Re-captcha -->
<script src='https://www.google.com/recaptcha/api.js?hl=pt-BR'></script>

{{--<!-- Loading DataTable -->--}}
{{--<script type="text/javascript" src="https://cdn.datatables.net/s/bs/dt-1.10.10,r-2.0.0/datatables.min.js"></script>--}}
{{-- <script src="{{ elixir('js/app.js') }}"></script> --}}

{{--<script>--}}
    {{--$(document).ready(function() {--}}
        {{--// init datatable on #datatable table--}}
        {{--$('#datatable').DataTable( {--}}
            {{--language: {--}}
                {{--url: '//cdn.datatables.net/plug-ins/1.10.10/i18n/Portuguese-Brasil.json'--}}
            {{--}--}}
        {{--} );--}}
    {{--});--}}
{{--</script>--}}


<!-- Go to www.addthis.com/dashboard to customize your tools -->
{{--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56fbe38cd9a3aab0"></script>--}}


{{--<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>--}}

{{--<script>--}}
{{--    $('.navbar ul li a').click(function(e) {--}}
{{--    var $this = $(this);--}}
{{--    if (!$this.hasClass('active')) {--}}
{{--        $this.addClass('active');--}}
{{--    }--}}
{{--    else {--}}
{{--        $this.removeClass('active');--}}
{{--    }--}}
{{--    e.preventDefault();--}}
{{--    });--}}

{{--$(".navbar ul li a").click(function() {--}}
{{--// remove classes from all--}}
{{--    $("li").removeClass("active");--}}
{{--// add class to the one we clicked--}}
{{--    $(this).addClass("active");--}}
{{--});--}}

{{--// Sets active link in Bootstrap menu--}}
{{--// Add this code in a central place used\shared by all pages--}}
{{--// like your _Layout.cshtml in ASP.NET MVC for example--}}
{{--//$('a[href="' + this.location.pathname + '"]').parents('li,ul').addClass('active');--}}

{{--$(function () {--}}
    {{--setNavigation();--}}
{{--});--}}

{{--function setNavigation() {--}}
    {{--var path = window.location.pathname;--}}
{{--//    alert(path);--}}
{{--//    path = path.replace(/\/$/, "");--}}
{{--//    path = decodeURIComponent(path);--}}
    {{--alert(path);--}}

    {{--$(".nav li a").each(function () {--}}
        {{--var href = $(this).attr('href');--}}
        {{--alert(href);--}}
        {{--if (path.substring(0, href.length) === href) {--}}
            {{--$(this).closest('li').addClass('active');--}}
        {{--}--}}
        {{--else { $(this).closest('li').removeClass('active'); }--}}
    {{--});--}}
{{--}--}}

{{--</script>--}}

{{--<script>--}}
    {{--$(document).ready(function() {--}}
        {{--$('a[href="' + this.location.pathname + '"]').parent().addClass('active');--}}
    {{--});--}}
{{--</script>--}}



<script>
    var popupSize = {
        width: 780,
        height: 550
    };

    $(document).on('click', '.social-buttons > a', function(e){

        var
                verticalPos = Math.floor(($(window).width() - popupSize.width) / 2),
                horisontalPos = Math.floor(($(window).height() - popupSize.height) / 2);

        var popup = window.open($(this).prop('href'), 'social',
                'width='+popupSize.width+',height='+popupSize.height+
                ',left='+verticalPos+',top='+horisontalPos+
                ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

        if (popup) {
            popup.focus();
            e.preventDefault();
        }

    });
</script>

