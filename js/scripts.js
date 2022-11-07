$(document).ready(function() {
// Display corresponding contact info on click
$(".contact-logo__img1").click(function() {
    $(".contact-box__text2").removeClass('open');
    $(".contact-box__text3").removeClass('open');
    $(".contact-box__text1").toggleClass('open');}
);
$(".contact-logo__img2").click(function() {
    $(".contact-box__text1").removeClass('open');
    $(".contact-box__text3").removeClass('open');
    $(".contact-box__text2").toggleClass('open');}
);
$(".contact-logo__img3").click(function() {
    $(".contact-box__text1").removeClass('open');
    $(".contact-box__text2").removeClass('open');
    $(".contact-box__text3").toggleClass('open');}
);
// Rotate intro text
$(function () {
    count= 0;
    phraseArray = [" runner.", " bird lover.", " cyclist.", " hiker.", " brewery enjoyer.", " problem solver.", " gamer."];
    setInterval(function () {
        count++;
        $('.intro-text__word').fadeOut(500, function () {
            $(this).text(phraseArray[count % phraseArray.length]).fadeIn(500);
        });
    }, 3000);
});
//Opens/Closes mobile menu
$(".menu-btn").click(function() {
    $(".nav-menu").toggleClass('open')
});
//Sets menu to closed if screen size is resized to desktop
$(window).on('resize' , function(){
    if($(window).width() > 992) {
        $(".nav-menu").removeClass('open');
    }
});
});