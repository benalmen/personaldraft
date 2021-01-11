
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

// $(window).scroll(example);

// function example() {
//     var position = $(window).position();
//     console.log("Scroll from Top: " + position.top);
// };


var about = $('#about > .cardBG').offset().top - 45;
var portfolio = $('#portfolio > .cardBG').offset().top - 45;
var contact = $('#contact > .cardBG').offset().top -45;
var diff = $(window).height() - 180;

$(window).scroll(function () {

    var currentscroll = $(document).scrollTop();

    console.log("contact.top:" + contact);
    console.log("scroll position:" + currentscroll);

    if (currentscroll >= about) {
        $('#about > .cardBG').css("position", "fixed");
    }
    if (currentscroll < about) {
        $('#about > .cardBG').css("position", "relative");
    }
    
    if (currentscroll >= portfolio - diff) {
        $('#portfolio > .cardBG').css("position", "fixed");
    }
    if (currentscroll < portfolio - diff) {
        $('#portfolio > .cardBG').css("position", "relative");
    }    
    
    if (currentscroll >= contact - 2 * diff) {
        $('#contact > .cardBG').css("position", "fixed");
    }
    if (currentscroll < contact - 2 * diff) {
        $('#contact > .cardBG').css("position", "relative");
    }

    if (currentscroll < about) {
        $('.arrow').click(function() {
            window.scrollTo(0, about)
        });
    }
    if (currentscroll >= about && currentscroll < portfolio - diff) {
        $('.arrow').click(function() {
            window.scrollTo(0, portfolio - diff)
        });
    }
    if (currentscroll >= portfolio && currentscroll < contact - 2 * diff) {
        $('.arrow').click(function() {
            window.scrollTo(0, contact)
        });
    }
    if (currentscroll >= contact - 2 * diff) {
        $('.arrow').removeClass( "arrowDown" ).addClass( "arrowUp" );
        $('.arrow').click(function() {window.scrollTo(0, 0)});
    }
    if (currentscroll <= contact) {
        $('.arrow').removeClass( "arrowUp" ).addClass( "arrowDown" );
    }
    if ( currentscroll > 20 ) {
        $('.arrow').removeClass( "arrowStart" );
    }
    if ( currentscroll <= 20 ) {
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