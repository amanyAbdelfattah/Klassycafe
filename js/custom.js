$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('header').addClass('fixed');
            $('.menu-bar').fadeIn();
        } else {
            $('header .menu-bar').removeClass('fixed');
        }
    });
});