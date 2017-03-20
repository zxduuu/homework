$('.hf_btn').click(function (e) {
    $('#skin_change').slideToggle('slow');   //慢慢向下滑动展开
    e.stopPropagation();                   //阻止事件
});

$('#skin_change .skin_change_Img a').click(function () {
    var src = $(this).find('img').attr('src');
    $('body').css({'background': 'url('+ src + ')','background-attachment':'fixed','background-size':'cover','color':'#000'});
    $('.logo').attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png');
    $('.btn').css({'background-color':'#d6d6d6','color':'#000'});
    $('.mnav').css('color','#fff');
    $('.lb').css('color','#fff');
    $('em').css('color','#fff');
    $('.treasure').css('color','#fff');
    $('.hf_btn').css('color','#fff');
    $('.saperater').css('color','#fff');
    $('.jg').css('color','#fff');
    $('.announcement').find('a').css('color','#fff');
    $('.announcement').find('span').css('color','#fff');
    $('header').css({'border':'none','background-color':'rgba(203,203,203,0.5)'})
});
//
$(document).click(function () {
    $('#skin_change').slideUp('slow'); //慢慢的隐藏
    e.stopPropagation();                   //阻止事件
});


$(document).ready(function () {
    $('#returnTop').click(function () {
        var speed=200;//滑动的速度
        $('body,html').animate({ scrollTop: 0 }, speed);
        return false;
    });

    $('.bri').hover(function () {
        var ulNode = $(this).next('.sidebar');
        ulNode.slideDown('normal');        //数字,slow,normal,fast
        // $(this).next('.sidebar').slideDown('normal');
    },function () {
        var ulNode = $(this).next('.sidebar');
        ulNode.slideUp('normal');        //数字,slow,normal,fast
    });

    $('#realcontent').load('./recommend.html');      //加载第一个页面
    $('#tablist li').each(function (index) {
        $(this).click(function () {
            $('#tablist li.tabin').removeClass('tabin');  //切换页面样式
            $(this).addClass('tabin');
            if (index == 0) {
                $('#realcontent').load('my_concern.html');
            } else if (index == 1) {
                $('#realcontent').load('recommend.html'); //加载第二个页面
            } else if (index == 2) {
                $('#realcontent').load('navigation.html');
            } else if (index == 3) {
                $('#realcontent').load('video.html');
            }
        })
    })
});
