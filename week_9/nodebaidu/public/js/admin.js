/**
 * Created by tutu on 16/12/20.
 */
//打开页面的时候  发送请求,刷新新闻列表

$(document).ready(function () {
    var $newsTable = $('#newstable tbody')
    refreshNews();

    //添加新闻

    $('#btnsubmit').click(function (e) {
        e.preventDefault();

        //输入判断
        if ($('#newstitle').val()==='' || $('#newsimg').val()==='' || $('#newstime').val()==='' || $('#newstype').val()==='') {
            if ($('#newstitle').val() === '') {
                $('#newstitle').parent().addClass('has-error'); //'has-error' 变成红色外框
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newsimg').val() === '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            }
            //提交添加
            $.ajax({
                // url: '/',
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    console.log(data);
                    refreshNews();
                }
            })
        }
    });


    // //给删除按钮绑定事件 因为是动态生成的   无法直接绑定事件
    // $('button').click(function () {
    //     console.log('click');
    // })
    // //删除新闻的功能
    // var deleteId = null;
    //
    // $('button').click(function () {
    //
    // })


    //删除新闻的功能   事件委托的方式
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function (e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
        console.log('111');
        console.log(deleteId);
        console.log($(this).parent());
        console.log($(this).parent().prevAll());
        console.log($(this).parent().prevAll().eq(3));
        console.log('111');

    });
    $('#deleteModal #confirmDelete').click(function (e) {
        if (deleteId) {      //不用(!deleteId) 因为点击之后会设置值 有值就为真  不需要再否了!
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: {newsid: deleteId},
                success: function (data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');   //隐藏模太框
                    refreshNews();
                }
            });
        }
    })


    //修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function (e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        console.log('222');
        console.log(updateId);
        console.log($(this).parent());
        console.log($(this).parent().prevAll());
        console.log('222');

        $.ajax({
            url: '/admin/currentnews',
            type: 'get',
            datatype: 'json',
            data: {newsid: updateId},
            success: function (data) {
                // console.log('1');
                console.log(data);
                // console.log('1');
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        });
    });
    $('#updateModal #confirmUpdate').click(function (e) {
        // if (updateId) {

            $.ajax({
                url: '/admin/update',
                type: 'post',
                data: {
                    newstitle: $('#unewstitle').val(),
                    newstype: $('#unewstype').val(),
                    newsimg: $('#unewsimg').val(),
                    newssrc: $('#unewssrc').val(),
                    id: updateId,
                    newstime: $('#unewstime').val()
                },
                success: function (data) {
                    // console.log('1');
                    // console.log(data);
                    $('#updateModal').modal('hide');
                    refreshNews();
                }
            });
        // }
    });

    function refreshNews() {
        $newsTable.empty();
        //empty table

        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            success: function (data) {
                data.forEach(function (item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    // var $tdimg = $('<td>').html(item.newsimg);
                    // var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');   //动态添加的修改 删除 按钮
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                    console.log($tRow);
                    // console.log('1');
                })

                console.log(data);

            }

        })

    }
})

