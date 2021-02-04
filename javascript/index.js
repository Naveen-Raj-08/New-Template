$(document).ready(function(){
    $("div#tab-1").click(function(){
        $('#tab-text').slideToggle('slow');
        $('#icon').toggleClass('rotate');
    })
})
$(document).ready(function(){
    $("div#tab-2").click(function(){
        $('#tab-text2').slideToggle('slow');
        $('#icon2').toggleClass('rotate');
    })
})
$(document).ready(function(){
    $("div#tab-3").click(function(){
        $('#tab-text3').slideToggle('slow');
        $('#icon3').toggleClass('rotate');
    })
})

var num = 100; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});

// Mobile menu
var icon = document.getElementById('mobile-icon');
var menu_item = document.getElementById("menu-item");
$(document).ready(function(){
    $(icon).click(function(){
        icon.classList.remove();
        $(icon).toggleClass("fa-times");
        $(menu_item).toggle('slow');
    })
})