@include('emails.layouts.header')
<body>
<table class="body">
    <tr>
        <td class="center" align="center" valign="top">
            <center>
                <table class="row header">
                    <tr>
                        <td class="center" align="center">
                            <center>
                                <table class="container">
                                    <tr>
                                        <td class="wrapper last">
                                            <table class="twelve columns">
                                                <tr>
                                                    <td class="six sub-columns">
                                                        {{ Html::image(('img/alerj.png'), null, array( 'width' => 70, 'height' => 70 )) }}
                                                    </td>
                                                    <td class="six sub-columns last" align="right" style="text-align:right; vertical-align:middle;">
                                                        <span class="template-label">{{ config('app.name') }}</span>
                                                    </td>
                                                    <td class="expander"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </center>
                        </td>
                    </tr>
                </table>
                <br>
                <table class="container">
                    <tr>
                        <td>

                            <table class="row">
                                <tr>
                                    <td class="wrapper last">
                                        <table class="twelve columns">
                                            <tr>
                                                <td>
                                                    <h3><strong>{{ $proposal->user->name }}</strong>, Sua Ideia Legislativa atingiu o número mínimo de apoios necessários para ser avaliado por uma comissão. Parabéns e obrigado pela sua contribuição!</h3>
                                                    <img width="580" height="300" src="http://placehold.it/580x300">
                                                </td>
                                                <td class="expander"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table class="row callout">
                                <tr>
                                    <td class="wrapper last">
                                        <table class="twelve columns">
                                            <tr>
                                                <td class="panel">
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
                                    <td class="wrapper last">
                                        <table class="twelve columns">
                                            <tr>
                                                <td class="last right-text-pad">
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
                                <tr>
                                    <td class="wrapper last">
                                        <table class="twelve columns">
                                            <tr>
                                                <td align="center">
                                                    <center>
                                                        <p style="text-align:center;"><a href="#">Terms</a> | <a href="#">Privacy</a> | <a href="#">Unsubscribe</a></p>
                                                    </center>
                                                </td>
                                                <td class="expander"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                </table>
            </center>
        </td>
    </tr>
</table>
<script type="text/javascript">
    /* <![CDATA[ */
    (function(){try{var s,a,i,j,r,c,l=document.getElementsByTagName("a"),t=document.createElement("textarea");for(i=0;l.length-i;i++){try{a=l[i].getAttribute("href");if(a&&a.indexOf("/cdn-cgi/l/email-protection") > -1  && (a.length > 28)){s='';j=27+ 1 + a.indexOf("/cdn-cgi/l/email-protection");if (a.length > j) {r=parseInt(a.substr(j,2),16);for(j+=2;a.length>j&&a.substr(j,1)!='X';j+=2){c=parseInt(a.substr(j,2),16)^r;s+=String.fromCharCode(c);}j+=1;s+=a.substr(j,a.length-j);}t.innerHTML=s.replace(/</g,"&lt;").replace(/>/g,"&gt;");l[i].setAttribute("href","mailto:"+t.value);}}catch(e){}}}catch(e){}})();
    /* ]]> */
</script>
</body>
</html>
