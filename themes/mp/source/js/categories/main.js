// card
var indexPostTitleH5Hight01 = $(".indexPostTitle").height();
$(".indexPostTitle").css("line-height", indexPostTitleH5Hight01 + "px");
$(window).resize(function() {
    var indexPostTitleH5Hight01 = $(".indexPostTitle").height();
    $(".indexPostTitle").css("line-height", indexPostTitleH5Hight01 + "px");
});
// tags
function showTags01(defaultClassName, parentsClassWidth, dotClass, dotWidth) {
    var postTagsI = 0,
        tagsI = 0,
        count = 0.0;

    while (true) {
        tagsI = 0;
        if ($('.' + defaultClassName + postTagsI + tagsI).outerWidth() == null) {
            break;
        }
        count = 0.0;
        while (true) {
            if ($('.' + defaultClassName + postTagsI + tagsI).outerWidth() == null) {
                break;
            } else {
                count += $('.' + defaultClassName + postTagsI + tagsI).outerWidth(true);
                if (count >= parentsClassWidth) {
                    count -= $('.' + defaultClassName + postTagsI + tagsI).outerWidth(true);
                    tagsI--;
                    count += dotWidth;
                    while (true) {
                        if (count >= parentsClassWidth) {
                            count -= $('.' + defaultClassName + postTagsI + tagsI).outerWidth(true);
                            tagsI--;
                        } else {
                            while (true) {
                                if ($('.' + defaultClassName + postTagsI + tagsI).outerWidth() == null) {
                                    break;
                                }
                                $('.' + defaultClassName + postTagsI + tagsI).css("display", 'none');
                                tagsI++;
                            }
                            $('.' + dotClass).css("display", 'inline-block');
                            break;
                        }
                    }
                } else {
                    $('.' + defaultClassName + postTagsI + tagsI).css("display", 'inline-block');
                }
            }
            tagsI++;
        }
        postTagsI++;
    }
}
showTags01("indexPostTags01", $('.indexCard01').width() - 20, "indexPostTags01dot", $('.indexPostTags01dot').outerWidth(true));
$(window).resize(function() {
    showTags01("indexPostTags01", $('.indexCard01').width() - 20, "indexPostTags01dot", $('.indexPostTags01dot').outerWidth(true));
});


// ----------------post Chip
$('.indexPostChip').css("height", "auto");
$('.indexPostChip').css("line-height", "normal");


$(document).ready(function() {
    $('.slider').slider({
        full_width: true,
        interval: 10000, // 轮播间隔
        transition: 1000, // 效果转换时长
        height: 200, // 轮播高度
        indicators: false // 是否显示小圆点
    });
});