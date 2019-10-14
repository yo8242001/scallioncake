

$(document).ready(function () {
    $("#backtotop").hide(); 

    $("#backtotop").click(function (e) { 
        
        $("html, body").animate({scrollTop: 0}, 1000);
        
    });
});

$(window).scroll(function () { 

    if ($(window).scrollTop() > 600) {
        $("#backtotop").fadeIn(500);
    } else {
        $("#backtotop").fadeOut(1000);    
    }
    
});



