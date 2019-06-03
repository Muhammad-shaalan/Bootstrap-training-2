/*global $*/
/*global console */
$(document).ready(function () {
    "use strict";
//Nice Scroll
    $("body").niceScroll({
        cursorcolor: "rgba(82, 78, 78, .3)",
        cursorwidth: "10"
    });


//Carousel    
    $('.carousel').carousel({
        interval: 3000
    });
    
//Show Option Box    
    $('.gear').click(function () {
        $('.color-option').slideToggle(1000);
    });
    
//Change Color
    var color = $('.option-box li');
    color.eq(0).css('backgroundColor', "#E41B17").end()
         .eq(1).css('backgroundColor', "#0895D1").end()
         .eq(2).css('backgroundColor', "#E426D5").end();
    
    color.on("click", function () {
        $("link[href*='theme']").attr('href', $(this).attr("data-value"));
    });
    
//Loading     
    $(window).on("load", function () {
        $(' .sk-circle').fadeOut(200, function () {
            $(this).parent().fadeOut(200, function () {
                $(this).remove();
            });
        });
    });
    
//Button Scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#scroll-top").show();
        } else {
            $("#scroll-top").hide();
        }
    });
    $("#scroll-top").click(function () {
        $('html body').animate({scrollTop : 0}, 1000);
    });
    
//Wow    
    new WOW().init();
});