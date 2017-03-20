/**
 * Created by tutu on 16/10/29.
 */

$(document).ready(function () {
    // $('#adclose_box').click(function () {
    //         $('.t_banner').slideUp();
    //     }
    // );
    //     ad 新版已无

    // 导航字体变色 内容弹出
    $('.header_nav').children('li').hover(function () {
        $(this).css('color', '#35b558');
        $(this).css('color', '#35b558');
        $(this).children('div').css('display', 'block')
    }, function () {
        $(this).css('color', '#333');
        $(this).children('div').css('display', 'none')
    });


    // search符号 展开 关闭
    $("#search_btn").click(function () {
        $("#searchbox").addClass("scale");
    });
    $("#close_btn").click(function () {
        $("#searchbox").removeClass("scale");
    });

    // app 二维码展示
    $('#app_btn').hover(function () {
        $(this).children('div').css('display', 'block');
    }, function () {
        $(this).children('div').css('display', 'none');
    });

    // 登录内容展示
    $('#login_btn').hover(function () {
        $(this).children('dl').css('display', 'block');
    }, function () {
        $(this).children('dl').css('display', 'none');
    });

    // play button展现
    $('.lessonplay').hover(function () {
        $(this).css('opacity', '100');
    }, function () {
        $(this).css('opacity', '0');
    });

    // 课程内容介绍展示
    $('.lesson_card').hover(function () {
        $(this).children('.lessoncard_brief').css('height', '175px');
        $(this).find('.lesson_brief').css('display', 'block');
        $(this).find('.diffi').css('display', 'block');
        $(this).find('.lessoners').css('display', 'block');
    }, function () {
        $(this).children('.lessoncard_brief').css('height', '88px');
        $(this).find('.lesson_brief').css('display', 'none');
        $(this).find('.diffi').css('display', 'none');
        $(this).find('.lessoners').css('display', 'none');
    });

    // 课程库课程目录展示
    $('.category_aside_2').children('li').hover(function () {
        $(this).find('.look_up').css('display', 'inline-block');
        $(this).children('a:first').css('color', '#35b558');
    }, function () {
        $(this).find('.look_up').css('display', 'none');
        $(this).children('a:first').css('color', ' #333');
    });

    // 课程分类展示
    $('.lesson_sort').children('dl').hover(function () {
        $(this).children('dd').css('display', 'block');
    }, function () {
        $(this).children('dd').css('display', 'none');
    });

    // 课程库课程目录展示
    $('.category_aside_1').children('li').hover(function () {
        $(this).find('.list_show').css('display', 'block');
        $(this).find('div').children('a').css({'font-size': '13px', 'font-weight': '500', 'color': '#35b558'})
    }, function () {
        $(this).find('.list_show').css('display', 'none');
        $(this).find('div').children('a').css({'font-size': '12px', 'font-weight': 'normal', 'color': '#666'})
    });

    // 返回顶部按钮
    showScroll();
    function showScroll() {
        $(window).scroll(function () {
            var scrollValue = $(window).scrollTop();
            scrollValue > 300 ? $('.top').fadeIn() : $('.top').fadeOut();
        });
        $('.top').click(function () {
            $('html,body').animate({scrollTop: 0}, 200);
        });
    }

});