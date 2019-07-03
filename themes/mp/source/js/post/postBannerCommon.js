$(document).ready(function() {
    $('.slider').slider({
        full_width: true,
        interval: 10000, // 轮播间隔
        transition: 1000, // 效果转换时长
        height: 200, // 轮播高度
        indicators: false // 是否显示小圆点
    });
});