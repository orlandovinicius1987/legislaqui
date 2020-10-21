
<!-- Loading Bootstrap -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

<!-- Loading No-Captcha Re-captcha -->
<script src='https://www.google.com/recaptcha/api.js?hl=pt-BR'></script>







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



<script src="https://unpkg.com/@popperjs/core@2"></script>
<script>
    const button = document.querySelector('#button');
    const tooltip = document.querySelector('#tooltip');

    // Pass the button, the tooltip, and some options, and Popper will do the
    // magic positioning for you:
    Popper.createPopper(button, tooltip, {
        placement: 'right',
    });
</script>

