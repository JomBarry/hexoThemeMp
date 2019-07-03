// 视差
$(document).ready(function() {
    $('.parallax').parallax();
});

// 轮播
// $('.carousel.carousel-slider').carousel({ full_width: true });
$(document).ready(function() {
    $('.slider').slider({
        full_width: true
    });
    $(".indicators").remove();
});

// 轮播下方
var sliderHeight = $('.fullscreen').outerHeight(true);
$('.contentContent').css("top", sliderHeight * 0.95 + "px");
$('#container').css("top", sliderHeight * 0.05 + "px");
$(window).resize(function() { //当浏览器大小变化时
    sliderHeight = $('.fullscreen').outerHeight(true); // 浏览器时下窗口的总高度 包括border padding margin
    $('.contentContent').css("top", sliderHeight * 0.95 + "px");
    $('#container').css("top", sliderHeight * 0.05 + "px");
});