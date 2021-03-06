﻿
$(function () {
    function showSlide(n) {
        $('body').unbind('mousewheel');
        currSlide += n;
        currSlide = currSlide <= 0 ? 0 : currSlide >= $slide.length - 1 ? $slide.length - 1 : currSlide;
        var displacment = window.innerWidth * currSlide;
        $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
        setTimeout(function () {
            $('body').bind('mousewheel', mouseEvent);
        }, 800);
        $('nav a.active').removeClass('active');
        $($('a')[currSlide]).addClass('active');
    }
    function mouseEvent(e, delta) {
        showSlide(delta >= 0 ? 1 : -1);
        e.preventDefault();
    }
    $('nav a').click(function (e) {
        var newslide = parseInt($(this).attr('href')[1]);
        var diff = newslide - currSlide - 1;
        showSlide(diff);
        e.preventDefault();
    });
    $(window).resize(function () {
        var displacment = window.innerWidth * currSlide;
        $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
    });
    var currSlide = 0;
    var $slide = $('.slide');
    $($('nav a')[0]).addClass('active');
    $('body').bind('mousewheel', mouseEvent);
});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

