$(document).ready(function() {

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

var mobileText = "Mobile";
var desktopText = "Desktop";
$(".preview-desktop").hide();
$("label.switch input[type=checkbox]").change(function() {
    $(".previewtext").text(this.checked?mobileText:desktopText);
    
    if($(this).is(":checked")) {
        $(".preview-mobile").show();
        $(".preview-desktop").hide();
    } else {
        $(".preview-mobile").hide();
        $(".preview-desktop").show();
    };

    });
});


