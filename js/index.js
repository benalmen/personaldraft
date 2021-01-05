
// LANDSCAPE IMAGES functions

$("#aboutPhoto").click(function() {
    $("#aboutOverlay").first().fadeIn();
});
$("#aboutOverlay").click(function() {
    $("#aboutOverlay").fadeOut();
});

$("#portfolioPhoto").click(function() {
    $("#portfolioOverlay").first().fadeIn();
});
$("#portfolioOverlay").click(function() {
    $("#portfolioOverlay").fadeOut();
});

$("#contactPhoto").click(function() {
    $("#contactOverlay").first().fadeIn();
});
$("#contactOverlay").click(function() {
    $("#contactOverlay").fadeOut();
});

$(document).ready(function() {
    $('.seePhoto').hover(
        function() {
            $('div.blank').removeClass( "fold" ).addClass( "foldUp" )
        },
        function() {
            $('div.blank').removeClass( "foldUp" ).addClass( "fold" )
        }
    );
});


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
        $('i.arrow').removeClass( "arrowDown" ).addClass( "arrowUp" );
        $('i.arrow').click(function() {window.scrollBy(0, -5000);})
    }
    else {
        $('i.arrow').removeClass( "arrowUp" ). addClass( "arrowDown" )
        $('i.arrow').click(function() {window.scrollBy(0, 880);})
    }
});


$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 20 ) {
        $('i.arrow').removeClass( "arrowStart" );
    }
    if ( scroll <= 20 ) {
        $('i.arrow').addClass( "arrowStart" );
    }
});
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 400 ) {
        $('a.buttonName').removeClass( "buttonNameStart" );
    }
    if ( scroll <= 400 ) {
        $('a.buttonName').addClass( "buttonNameStart" );
    }
});
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 200 && scroll < 1000 ) {
        $('a.aboutButtonSwitch').addClass( "buttonAbout" );
    }
    else {
        $('a.aboutButtonSwitch').removeClass( "buttonAbout" );
    }
});
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 1000 && scroll < 1900 ) {
        $('a.portfolioButtonSwitch').addClass( "buttonPortfolio" );
    }
    else {
        $('a.portfolioButtonSwitch').removeClass( "buttonPortfolio" );
    }
});
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if ( scroll > 1900 && scroll < 3800 ) {
        $('a.contactButtonSwitch').addClass( "buttonContact" );
    }
    else {
        $('a.contactButtonSwitch').removeClass( "buttonContact" );
    }
});