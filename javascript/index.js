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

// for sticky navbar
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}