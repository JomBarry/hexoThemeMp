// header nav
// $('.onScrollColor').addClass('transparent');
window.onscroll = function() {
    var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; //页面滚动距离
    // if (top == 0) {
    //     $('.onScrollColor').addClass('transparent');
    //     $('.onScrollColor').removeClass('purple darken-2');
    // } else {
    //     $('.onScrollColor').removeClass('transparent');
    //     $('.onScrollColor').addClass('purple darken-2');
    // }
}

// header phone set
$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});

// banner
$('.carousel.carousel-slider').carousel({ full_width: true });