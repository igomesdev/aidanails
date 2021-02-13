$(document).ready(function () {

    /* Sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '70px'
    });

    /* Scroll to buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Mobile nav */

    $(".cross").hide();

    $(".hamburger").click(function () {
        $(".js--menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
        });
    });

    $(".cross").click(function () {
        $(".js--menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });
});