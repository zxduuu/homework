// js采用了单例模式
// 好处:
// 1、控制资源的使用，通过线程同步来控制资源的并发访问；
//
// 2、控制实例产生的数量，达到节约资源的目的;
//
// 3、作为通信媒介使用，也就是数据共享，它可以在不建立直接关联的条件下，让多个不相关的两个线程或者进程之间实现通信;
//
// 4.代码分享,方便管理;
//
// 5. 保护自己的属性和方法。


$(function () {
    var hf_btn = {
        init: function () {
            this.render();
            this.bind();
        },
        render: function () {
            this.settings = $('.hf_btn');
            this.setclose = $(document);
        },
        bind: function () {
            this.settings.click(this.event['setht_btnclick']);
            this.setclose.click(this.event['setclose_btnclick']);
        },
        event: {
            setht_btnclick: function (e) {
                $('#skin_change').slideDown('slow');   //慢慢向下滑动展开
                e.stopPropagation();                   //阻止事件
            },
            setclose_btnclick: function (e) {
                $('#skin_change').slideUp('slow');   //慢慢的隐藏
                e.stopPropagation();                   //阻止事件
            }
        }
    };


    // 下面是原代码:
    // $('.hf_btn').click(function (e) {
//     $('#skin_change').slideToggle('slow');   //慢慢向下滑动展开
//     e.stopPropagation();                   //阻止事件
// });

    // $(document).click(function () {
    //     $('#skin_change').slideUp('slow'); //慢慢的隐藏
    //     e.stopPropagation();                   //阻止事件
    // });


    var doc = {
        init: function () {
            this.render();
            this.bind();
        },
        render: function () {
            this.settings = $('#skin_change .skin_change_Img a');
            this.setreturn = $('#returnTop');
            this.setbri = $('.bri');
            this.setcontent = $('#realcontent');
            this.setcontents = $('#tablist li');
        },
        bind: function () {
            this.settings.click(this.event['set_xxx']);
            this.setreturn.click(this.event['set_back']);
            this.setbri.hover(this.event['set_sidebar'], this.event['set_sidebarout']);
            this.setcontent.load('recommend.html');            //加载第一个页面
            this.setcontents.each(this.event['set_content']);
        },
        event: {
            set_xxx: function () {
                var src = $(this).find('img').attr('src');
                $('body').css({
                    'background': 'url(' + src + ')',
                    'background-attachment': 'fixed',
                    'background-size': 'cover',
                    'color': '#000'
                });
                $('.logo').attr('src', 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png');
                $('.btn').css({'background-color': '#d6d6d6', 'color': '#000'});
                $('.mnav').css('color', '#fff');
                $('.lb').css('color', '#fff');
                $('em').css('color', '#fff');
                $('.treasure').css('color', '#fff');
                $('.hf_btn').css('color', '#fff');
                $('.saperater').css('color', '#fff');
                $('.jg').css('color', '#fff');
                $('.announcement').find('a').css('color', '#fff');
                $('.announcement').find('span').css('color', '#fff');
                $('header').css({'border': 'none', 'background-color': 'rgba(203,203,203,0.5)'})
            },
            set_back: function () {
                var speed = 200;//滑动的速度
                $('body,html').animate({scrollTop: 0}, speed);
                return false;
            },
            set_sidebar: function () {
                var ulNode = $(this).next('.sidebar');
                ulNode.slideDown('normal');        //数字,slow,normal,fast
                // $(this).next('.sidebar').slideDown('normal');
            },
            set_sidebarout: function () {
                var ulNode = $(this).next('.sidebar');
                ulNode.slideUp('normal');        //数字,slow,normal,fast          //unknown
            },
            set_content: function (index) {
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
            }
        }
    }


    // 下面是原代码:
// $('#skin_change .skin_change_Img a').click(function () {
//     var src = $(this).find('img').attr('src');
//     $('body').css({'background': 'url('+ src + ')','background-attachment':'fixed','background-size':'cover','color':'#000'});
//     $('.logo').attr('src','https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png');
//     $('.btn').css({'background-color':'#d6d6d6','color':'#000'});
//     $('.mnav').css('color','#fff');
//     $('.lb').css('color','#fff');
//     $('em').css('color','#fff');
//     $('.treasure').css('color','#fff');
//     $('.hf_btn').css('color','#fff');
//     $('.saperater').css('color','#fff');
//     $('.jg').css('color','#fff');
//     $('.announcement').find('a').css('color','#fff');
//     $('.announcement').find('span').css('color','#fff');
//     $('header').css({'border':'none','background-color':'rgba(203,203,203,0.5)'})
// });

    function init() {
        hf_btn.init();
        doc.init();
    }

    init();
});

// 下面是原代码:
// $(document).ready(function () {
    // $('.bri').hover(
    //     function () {
    //         var ulNode = $(this).next('.sidebar');
    //         ulNode.slideDown('normal');        //数字,slow,normal,fast
    //     // $(this).next('.sidebar').slideDown('normal');
    //     },
    //     function () {
    //         var ulNode = $(this).next('.sidebar');
    //         ulNode.slideUp('normal');        //数字,slow,normal,fast
    //     }
    // );
// // //
//     $('#realcontent').load('recommend.html');      //加载第一个页面
//     $('#tablist li').each(function (index) {
//         $(this).click(function () {
//             $('#tablist li.tabin').removeClass('tabin');  //切换页面样式
//             $(this).addClass('tabin');
//             if (index == 0) {
//                 $('#realcontent').load('my_concern.html');
//             } else if (index == 1) {
//                 $('#realcontent').load('recommend.html'); //加载第二个页面
//             } else if (index == 2) {
//                 $('#realcontent').load('navigation.html');
//             } else if (index == 3) {
//                 $('#realcontent').load('video.html');
//             }
//         })
//     })
// });

