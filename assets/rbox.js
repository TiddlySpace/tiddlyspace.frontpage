/* 
 * Create an rbox using tiddlysockets.
 */
$(function() {
    $.ajaxSetup({
        beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-ControlView", "false");
                    }
    });

    var socketuri = 'http://tiddlyspace.com:8081'
        , atdiv = $('<ul id="atbox" class="box">');
    if (typeof(io) === 'undefined') {
        atdiv.addClass('nosocket');
    } 
    $('body').append(atdiv);

    var rbox = new Tiddlers(atdiv,
        socketuri,
        '/search?q=',
        ['*'],
        {sizer: 5});
    rbox.start();
});

