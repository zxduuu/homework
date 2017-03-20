$(function () {
    $(' #sp1').on('click', function (e) {
        $('.content').addClass('hide');
        $('#con1').removeClass('hide');
        e.stopPropagation(); //            阻止冒泡
    });
    $('#sp2').on('click', function (e) {
        $('.content').addClass('hide');
        $('#con2').removeClass('hide');
        e.stopPropagation();
    });
    $('#sp3').on('click', function (e) {
        $('.content').addClass('hide');
        $('#con3').removeClass('hide');
        e.stopPropagation();
    });
    $('#sp4').on('click', function (e) {
        $('.content').addClass('hide');
        $('#con4').removeClass('hide');
        e.stopPropagation();
    });
});

// $(function () {
//     $('.nav ul li ul li #sp2').on('click', function (e) {
//         $('.con2').toggleClass('hide');
//         e.stopPropagation(); //            阻止冒泡
//     })
//     $('.nav ul li ul li #sp1').on('click', function (e) {
//         // var _this = $(this);
//         // $('.select > p').text(_this.attr('data-value')); // $(this) 代表当前单击的结点
//         //
//         // _this.addClass('selected').siblings().removeClass('selected');
//         $('.nav ul li ul li #con2').toggleClass('hide');
//         e.stopPropagation();
//     });
//     // $(document).on('click', function () {
//     //     $('.select').removeClass('open');
//     // });
// });