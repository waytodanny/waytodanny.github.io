$(document).ready(function () {
    $(".btn-menu").click(function () {
        $("#toggle-menu").animate({
            'width': 'toggle'
        });
    });
});

$(document).ready(function () {
    $('.toggle-menu-i').click(function () {
        /*if($(this).hasClass('invinsible')){ 
            $(this).removeClass('invinsible'); 
        } 
        else{ 
            $(this).addClass('invinsible'); 
        }*/
        $(this).next().slideToggle();
    });
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
});

/*Scroll to Top*/
$('#btn-to-top').on("click",function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
        
    });
});