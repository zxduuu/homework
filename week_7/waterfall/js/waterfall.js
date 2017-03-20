// /**
//  * Created by tutu on 16/8/23.
//  */


$(document).ready(function () {
    $(window).on('load', function () {
        imgLocation();
   
    });
});


function imgLocation() {
    var box = $('.box');
    var boxWidth = box.eq(0).width();       //确定盒子宽度
    var num = Math.floor($(window).width()/boxWidth);   //一排摆放多少个盒子
    var boxArr = [];             //定义一个数组,用来承载储存列中的所有盒子的高度
    box.each(function (index, value) {          //index确定位置   value获取元素对象
        // console.log('a');
        // console.log(index + '--' + value);
        var boxHeight = box.eq(index).height();    //获取到盒子高度
        if (index < num) {
            boxArr[index] = boxHeight;
            // boxArr = boxHeight;
            console.log(boxHeight);
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);
            // console.log(minboxHeight);
            // console.log(value);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            // console.log(minboxIndex);
            //获取jquery对象
            $(value).css({
                'position': 'absolute',
                'top': minboxHeight,
                'left': box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex] += box.eq(index).height();
        }

    });
}