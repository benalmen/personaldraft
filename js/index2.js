
// LANDSCAPE IMAGES

$("#revealAbout").click(function() {
    $("#aboutGone").addClass("coverButton");
    $("#about > .cardBG > .card").css("opacity", "0");
});
$("#aboutGone").click(function() {
    $("#aboutGone").removeClass("coverButton");
    $("#about > .cardBG > .card").css("opacity", "1");
});

$("#revealPortfolio").click(function() {
    $("#portfolioGone").addClass("coverButton");
    $("#portfolio > .cardBG > .card").css("opacity", "0");
});
$("#portfolioGone").click(function() {
    $("#portfolioGone").removeClass("coverButton");
    $("#portfolio > .cardBG > .card").css("opacity", "1");
});

$("#revealContact").click(function() {
    $("#contactGone").addClass("coverButton");
    $("#contact > .cardBG > .card").css("opacity", "0");
});
$("#contactGone").click(function() {
    $("#contactGone").removeClass("coverButton");
    $("#contact > .cardBG > .card").css("opacity", "1");
});

$(".revealButton").hover(
    function() {
        $(".card").css("clip-path", "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)");
    },
    function () {
    $(".card").css("clip-path", "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)");
    }
);


// JOB TITLE

$(document).ready(function(){
    if ($(window).width() < 700){
        $("h3.job").text("UX Designer");
    }
    else {
        $("h3.job").text("User Experience Designer");
    }
});
$(window).resize(function() {
    if ($(window).width() < 700){
        $("h3.job").text("UX Designer");
        $("h1.name").css('text-align', 'center');
    }
    else {
        $("h3.job").text("User Experience Designer");
        $("h1.name").css('text-align', 'right');
    }
});

// SCROLL ARROW

$('.arrow').click(function(e) {

    var scrollpos = $(window).scrollTop();
    var about = $('#about').offset().top - 45;
    var portfolio = $('#portfolio').offset().top;
    var contact = $('#contact').offset().top;

    if(scrollpos < about) {
        $('html, body').animate({scrollTop: about + 45}, 200, 'swing');
    }
    else if(scrollpos >= about - 45 && scrollpos < portfolio) {
        $('html, body').animate({scrollTop: portfolio}, 200, 'swing');
    }
    else if(scrollpos >= portfolio && scrollpos < contact) {
        $('html, body').animate({scrollTop: contact}, 200, 'swing');
    }
    else if(scrollpos >= contact) {
        $('html, body').animate({scrollTop: 0}, 400, 'linear');
    }
});

$(window).scroll(function () {

    var scrollpos = $(window).scrollTop();
    var about = $('#about').offset().top - 45;
    var portfolio = $('#portfolio').offset().top - 45;
    var contact = $('#contact').offset().top - 45;

    if (scrollpos >= about) {
        $('#about > .cardBG').css({"position": "fixed"});
    }
    if (scrollpos < about) {
        $('#about > .cardBG').css({"position": "relative"});
    }
    if (scrollpos >= portfolio) {
        $('#portfolio > .cardBG').css({"position": "fixed"});
    }
    if (scrollpos < portfolio) {
        $('#portfolio > .cardBG').css({"position": "relative"});
    }    
    if (scrollpos >= contact) {
        $('#contact > .cardBG').css({"position": "fixed"});
    }
    if (scrollpos < contact) {
        $('#contact > .cardBG').css({"position": "relative"});
    }

    if (scrollpos >= contact - 45) {
        $('.arrow').removeClass( "arrowDown" ).addClass( "arrowUp" );
        $('.arrow').click(function() {window.scrollTo(0, 0)});
    }

    if (scrollpos <= contact - 45) {
        $('.arrow').removeClass( "arrowUp" ).addClass( "arrowDown" );
    }
    if (scrollpos > 20 ) {
        $('.arrow').removeClass( "arrowStart" );
    }
    if (scrollpos <= 20 ) {
        $('.arrow').addClass( "arrowStart" );
    }
});


// NAVIGATION

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll <= 0 ) {
        $('nav').css( "top", "-40px" );
        $('#navName').css( "left", "-250px" );
    }
    else {
        $('nav').css( "top", "0" );
        $('#navName').css( "left", "5px" );
    }
});

$(document).ready(function() {
    $('.navHoverCheck, nav').hover(
        function() {
            $('nav').css( "top", "0" );
            $('#navName').css( "left", "5px" );
        },
        function() {
            if ($(window).scrollTop() == 0) {
                $('nav').css( "top", "-40px" );
                $('#navName').css( "left", "-250px" );
            }
            else {
                $('nav').css( "top", "0" );
                $('#navName').css( "left", "5px" );
            }
        }
    );
});

$(document).ready(function() {

    var about = $('#about').offset().top;
    var portfolio = $('#portfolio').offset().top;
    var contact = $('#contact').offset().top;

    $('#navName').click(function() {
        $('html, body').animate({scrollTop: 0}, 200, 'swing')
    });
    $('.buttonAbout').click(function() {
        $('html, body').animate({scrollTop: about + 45}, 200, 'swing');
    });
    $('.buttonPortfolio').click(function() {
        $('html, body').animate({scrollTop: portfolio}, 200, 'swing');
    });
    $('.buttonContact').click(function() {
        $('html, body').animate({scrollTop: contact}, 200, 'swing');
    });

});