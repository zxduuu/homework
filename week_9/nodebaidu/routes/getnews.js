var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* 在主页获取新闻时的请求 */
router.get('/', function (req, res, next) {
    // res.render('baidunews', { title: 'Express' });    //render渲染模板   send直接返回字符串
    var newstype = req.query.newstype;     //req是请求  从网页请求到的
    var connection = mysql.createConnection({
        host: 'localhost',
        port: 8889,
        user: 'root',
        password: '123456',
        database: 'baidunews'              
    });

    connection.connect();
    // var sql = "SELECT * FROM news WHERE newstype = '"+ req.query.newstype+"'";
    // console.log(sql);
    connection.query("SELECT * FROM news WHERE newstype = ?", [newstype],function (err, rows, fields) {
                  //  sql                                     查询的内容    回调函数 (错误返回信息  ?   集合)
        // if (err) throw err;
        //
        // var result = [];
        // for(var i = 0; i < rows.length; i++){
        //     var data={};
        //     data.newstype = rows[i].newstype;
        //     data.newstitle = rows[i].newstitle;
        //     data.newsimg = rows[i].newsimg;
        //     data.newstime = rows[i].newstime;
        //     data.newssrc = rows[i].newssrc;
        //     result.push(data)
        // }
        //
        // console.log(result);

        console.log(rows);
        res.jsonp(rows);   //返回数据  到网络上
        // return res.jsonp(rows);   //返回数据  到网络上
        // return res.jsonp(result);   //返回数据  到网络上
    });
});

module.exports = router;
/**
 * Created by tutu on 17/1/8.
 */
