$(document).ready(function () {
    refreshNews('精选');     //默认开启精选


    $('nav a').click(function (e) {
        // e.preventDefalut();
        var type = $(this).text();
        refreshNews(type);
    })
});

function refreshNews(type){
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url:'./php/getnews.php',
        type:'get',
        datatype:'json',
        data:{newstype:type},
        success:function(data){
            data.forEach(function (item,index,array) {
                var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $newsImg = $('<div><div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src',item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $nwesTime = $('<span></span>').addClass('newstime').html(item.newstime).appendTo($p);
                var $nwesSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p);
            })

            console.log(data);


        }
    });
}