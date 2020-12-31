
// LANDSCAPE IMAGES functions

$("#aboutPhoto").click(function() {
    $("#aboutOverlay").first().fadeIn();
});
$("#aboutOverlay").click(function() {
    $("#aboutOverlay").fadeOut();
});

$("#previewPhoto").click(function() {
    $("#previewOverlay").first().fadeIn();
});
$("#previewOverlay").click(function() {
    $("#previewOverlay").fadeOut();
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
        $("h3.job").text("UX Designer").css('text-align', 'center');
        $("h1.name").css('text-align', 'center');
    }
    else {
        $("h3.job").text("User Experience Designer").css('text-align', 'left');
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