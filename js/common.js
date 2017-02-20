/*Toggle nav menu*/
$(document).ready(function () {
    $(".btn-menu").click(function () {
        $("#toggle-menu").animate({
            'width': 'toggle'
        });
    });
});

/*Change header background*/
$(window).on("load", function () {
    var images = ['../img/header-1-min.jpg', '../img/header-2-min.jpg', '../img/header-3-min.jpg'],
        i = 1,
        imageHead = $('#header');
    setInterval(function () {
        imageHead.css({
            'background-image': 'url(' + images[i] + ')',
            'transition': '0.5s linear',
            'background-size': 'cover'
        });
        i++;
        if (i == images.length) {
            i = 0;
        }
    }, 5000);
});

/*Mobile nav sublist*/
$(document).ready(function () {
    $('.toggle-menu-i').click(function () {
        if ($(this).hasClass('trans')) {
            $(this).removeClass('trans');
        } else {
            $(this).addClass('trans');
        }
        $(this).next().slideToggle();
    });
});

/*progress bar anim*/
$(document).ready(function () {
    var barY = $("#progress").offset();
    $(window).scroll(function () {
        if ($(this).scrollTop() + $(window).height() > barY.top + 150) {
            $(".progress-bar").animate({
                width: "show"
            }, 1500);
        }
    })
});

/*Numbers anim*/
$(document).ready(function () {

    var show = true;
    var numY = $("#counter").offset();
    $(window).scroll(function () {
        if (!show) return false;
        if ($(this).scrollTop() + $(window).height() > numY.top + 160) {

            $(".counter-number").spincrement({
                from: 0,
                to: $(".counter-number").attr('data-num'),
                decimalPlaces: 0, // Разделитель десятичной части числа
                thousandSeparator: "", // Разделитель тыcячных
                duration: 1500 // Продолжительность анимации в 
            });
            show = false;
        }
    })
});

/*Show Scroll Button*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $("#btn-to-top").addClass("btn-scroll-display");
        } else {
            $("#btn-to-top").removeClass("btn-scroll-display");
        }
    });
    $(window).resize(function () {
        if ($(this).width() <= 340) {
            $("#btn-to-top").hide();
        } else {
            $("#btn-to-top").show();
        }
    });
});

/*Scroll to Top*/
$('#btn-to-top').on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 'slow', function () {

    });
});