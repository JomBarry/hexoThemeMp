window.onscroll = function() {
    var d = document,
        doc = d.documentElement;
    var top = doc.scrollTop || window.pageYOffset || d.body.scrollTop, //页面滚动距离
        eleHet = $('.fullscreen').outerHeight(true) + $('.contentContent').outerHeight(true) - $('.fullscreen').outerHeight(true) * 0.05, //元素高度
        wid = doc.clientWidth || d.body.clientWidth; // 可视区宽
    het = doc.clientHeight || d.body.clientHeight; // 可视区高

    var scroll = (top) * (wid / (eleHet - het)); //平均滚动距离 赋值数据（计算宽和在高上的百分比*移动的距离）

    scroll = scroll >= eleHet * (wid / eleHet) ? eleHet * (wid / eleHet) : scroll; //溢出重置
    d.getElementsByClassName('progressBar')[0].style.width = scroll + "px";
}