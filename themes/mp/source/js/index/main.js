// --------------post Title
// 01 card
var indexPostTitleH5Hight01 = $('.indexPostTitle01').height();
$('.indexPostTitle01').css('line-height', indexPostTitleH5Hight01 + "px");
$(window).resize(function() {
    var indexPostTitleH5Hight01 = $('.indexPostTitle01').height();
    $('.indexPostTitle01').css('line-height', indexPostTitleH5Hight01 + "px");
});
// 01 tags

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

// 02 card
var indexPostTitleH5Hight02 = $('.indexPostTitle02').height();
$('.indexPostTitle02').css('line-height', indexPostTitleH5Hight02 + "px");
$(window).resize(function() {
    var indexPostTitleH5Hight02 = $('.indexPostTitle02').height();
    $('.indexPostTitle02').css('line-height', indexPostTitleH5Hight02 + "px");
});
// 02 tags
// 函数：判断标签长度和父类内部宽度大小做出相应显示操作
function showTags02(defaultClassName, parentsClassWidth, dotClass, dotWidth) {
    // 定义变量（分类、分类中的文章、文章中的标签）、临时变量
    var categoryPostTagsI = 0,
        postTagsI = 0,
        tagsI = 0,
        count = 0.0;
    // 一层循环：外部文章分类 根据分类变量自增判断class是否有长度 并设置分类文章和文章中的标签为‘0’(重新初始化)
    while (true) {
        postTagsI = 0;
        tagsI = 0;

        if ($('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth() == null) {
            break;
        }
        // 二层循环：在分类的基础上判断分类中的所有文章 自增情况下判断class是否有长度 并设值文章中的标签为‘0’（初始化）
        while (true) {
            tagsI = 0;
            if ($('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth() == null) {
                break;
            }
            // 三层循环：在分类的基础上和分类文章基础上循环标签 判断class是否有长度 设值count为‘0’（初始化）
            // 如果有进行计算并判断（count）与夫容器内部宽度大小
            // 大于：减去当前一个长度 并把tagsI移动到上一个并加点class的宽度
            //      循环：判断加入点后总长度是否大于父标签内部宽度大小
            //          大于：减去当前长度 并将tagsI移动到上一个
            //          小于：循环执行将tags后边的标签设置为隐藏 并将点显示
            count = 0.0;
            while (true) {
                if ($('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth() == null) {
                    break;
                } else {
                    count += $('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth(true);
                    if (count >= parentsClassWidth) {
                        count -= $('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth(true);
                        tagsI--;
                        count += dotWidth;
                        while (true) {
                            if (count >= parentsClassWidth) {
                                count -= $('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth(true);
                                tagsI--;
                            } else {
                                while (true) {
                                    if ($('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).outerWidth() == null) {
                                        break;
                                    }
                                    $('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).css("display", 'none');
                                    tagsI++;
                                }
                                $('.' + dotClass).css("display", 'inline-block');
                                break;
                            }
                        }
                    } else {
                        $('.' + defaultClassName + categoryPostTagsI + postTagsI + tagsI).css("display", 'inline-block');
                    }
                }
                tagsI++;
            }
            postTagsI++;
        }
        categoryPostTagsI++;
    }
}
showTags02("indexPostTags02", $('.indexCard02').width() - 20, "indexPostTags02dot", $('.indexPostTags02dot').outerWidth(true));
$(window).resize(function() {
    showTags02("indexPostTags02", $('.indexCard02').width() - 20, "indexPostTags02dot", $('.indexPostTags02dot').outerWidth(true));
});


// ----------------post Chip
$('.indexPostChip').css("height", "auto");
$('.indexPostChip').css("line-height", "normal");