/*
 * create an iframe that loads the atbox.html
 */
$(function() {
    var iframe = $('<iframe>').attr({
        src: '/rbox.html',
        id: 'rbox',
        scrolling: 'no'});
    iframe.css({
        border: 'none',
        'background-color': 'transparent'
    });
    $('body').append(iframe);
});
