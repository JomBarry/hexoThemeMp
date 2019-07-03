// Phone materialize
$(".button-collapse").sideNav();
// $('.collapsible').collapsible();
$('.button-collapse').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});

// sreach materialize
$(document).ready(function() {
    $('.modal').modal();
});

window.onscroll = function() {
    $(".changeColor").css("background", "blue !important");
}