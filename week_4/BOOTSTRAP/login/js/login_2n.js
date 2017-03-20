function bindEvent(x) {
    var spId = '#sp' + x;
    var conId = '#con' + x
    $(spId).on('click', function (e) {
        $('.content').addClass('hide');
        $(conId).removeClass('hide');
        e.stopPropagation(); //            阻止冒泡
    });
}

function initContent(x) {
    var conId = '#con' + x;
    $(conId).html("我是主要内容: " + x);
}

$(function () {
    for (var i = 1; i <= 18; i++) {
        initContent(i);
        bindEvent(i);
    }
});
