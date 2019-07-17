// 给每一个li设置高度
var index = 1,
    maxHeight = 0;
// 获取最大值
while (true) {
    if ($('.index' + index + '>.item').outerHeight(true)) {
        if (maxHeight < $('.index' + index + '>.item').outerHeight(true)) {
            maxHeight = $('.index' + index + '>.item').outerHeight(true);
        }
    } else {
        break;
    }
    index++;
}
index = 1;
while (true) {
    if ($('.index' + index + '>.item').outerHeight(true)) {
        $('.index' + index).css('height', (maxHeight + 38) * 2 + 'px');
        if (index % 2) { // 奇数
            var bottomHeight = maxHeight - $('.index' + index + '>.item').outerHeight(true);
            $('.index' + index + '>.item').css('bottom', bottomHeight + 'px');
        } else {
            var topHeight = maxHeight - $('.index' + index + '>.item').outerHeight(true);
            $('.index' + index + '>.item').css('top', topHeight + 'px');
            console.log('.index' + index + '>.item' + " : " + topHeight);

        }

    } else {
        break;
    }
    index++;
}