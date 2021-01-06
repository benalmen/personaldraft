
// LANDSCAPE IMAGES

$("#revealAbout").click(function() {
    $("#aboutGone").addClass("coverButton");
    $("#about > .card").css("opacity", "0");
});
$("#aboutGone").click(function() {
    $("#aboutGone").removeClass("coverButton");
    $("#about > .card").css("opacity", "1");
});

$("#revealPortfolio").click(function() {
    $("#portfolioGone").addClass("coverButton");
    $("#portfolio > .card").css("opacity", "0");
});
$("#portfolioGone").click(function() {
    $("#portfolioGone").removeClass("coverButton");
    $("#portfolio > .card").css("opacity", "1");
});

$("#revealContact").click(function() {
    $("#contactGone").addClass("coverButton");
    $("#contact > .card").css("opacity", "0");
});
$("#contactGone").click(function() {
    $("#contactGone").removeClass("coverButton");
    $("#contact > .card").css("opacity", "1");
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


$(document).ready(function() {
    $('.arrow').click(function() {
        window.scrollBy(0, 880);
    })
});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll > 2400) {
        $('.arrow').removeClass( "arrowDown" ).addClass( "arrowUp" );
        $('.arrow').click(function() {window.scrollBy(0, -5000);})
    }
    else {
        $('.arrow').removeClass( "arrowUp" ). addClass( "arrowDown" )
        $('.arrow').click(function() {window.scrollBy(0, 880);})
    }
});


$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 20 ) {
        $('.arrow').removeClass( "arrowStart" );
    }
    if ( scroll <= 20 ) {
        $('.arrow').addClass( "arrowStart" );
    }
});


// Nav Scroll Animations + Highlights

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
    )
});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 200 && scroll < 1000 ) {
        $('.buttonAbout').addClass( "buttonAboutScroll" );
    }
    else {
        $('.buttonAbout').removeClass( "buttonAboutScroll" );
    }
});

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 1000 && scroll < 1900 ) {
        $('.buttonPortfolio').addClass( "buttonPortfolioScroll" );
    }
    else {
        $('.buttonPortfolio').removeClass( "buttonPortfolioScroll" );
    }
});
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 1900 && scroll < 3800 ) {
        $('.buttonContact').addClass( "buttonContactScroll" );
    }
    else {
        $('.buttonContact').removeClass( "buttonContactScroll" );
    }
});