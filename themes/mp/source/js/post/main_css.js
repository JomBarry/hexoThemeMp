// --------------------设置 lightgallery-------------
// var ss = $("p>img").prop('src');
// var ss = $("p>img")[0].src;
// console.log(ss);

// $("p>img").wrap('<div id="lightgallery"><a href="' + ss + '"></a></div>');
$("p>img").each(item => {
    console.log($("p>img")[item]);
    var imgAlt = $("p>img")[item].alt;
    console.log(imgAlt);


    $("p>img").eq(item).attr('data-caption', imgAlt);
    $("p>img").eq(item).attr('class', 'materialboxed');

})