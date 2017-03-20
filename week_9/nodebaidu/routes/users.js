var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: '123456',
    database: 'baidunews'
});   //建立数据库链接   链接池

/* GET users listing. */

//获取所有新闻列表
router.get('/getnews', function (req, res, next) {
    connection.query('SELECT*FROM news', function (err, rows) {
        res.json(rows);
    })
});

//确认更新
router.post('/update', function (req, res) {      //router.post  接受post的请求
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    // connection.query("UPDATE news SET newstitle=?,newstype=?,newsimg=?,newstime=?, newssrc=? WHERE id=?",
    connection.query("UPDATE news SET 'newstitle'=?,'newstype'=?,'newsimg'=?,'newstime'=?, 'newssrc'=? WHERE 'id'=?",
        [newstitle, newstype, newsimg, newstime, newssrc, newsid], function (err, rows) {
            console.log(rows.changedRows);
            res.jsonp(rows);          //自己添加的这一行
        })
});

//模态框取值
//
router.get('/currentnews', function (req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT*FROM news WHERE id = ?', [newsid], function (err, rows) {
        res.json(rows);
    })
});

//delete
//
router.post('/delete', function (req, res) {
    var newsid = req.body.newsid;
    connection.query("DELETE FROM news WHERE id = ?", [newsid], function (err, result) {
        console.log(result.affectedRows)
        res.json(result);

    })
});

//insert
router.post('/insert', function (req, res) {
    var newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    console.log('111');
    connection.query("INSERT INTO news ('newstitle','newstype','newsimg','newstime','newssrc') VALUES ('?','?','?','?','?')",
    // connection.query("INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES (?,?,?,?,?)",
        [newstitle, newstype, newsimg, newstime, newssrc], function (err, result) {
            // if (!err) {
            //     console.log(result.insertId);
            // }
            if (err) {
                console.log(err);
            }
        res.json(result);    //这句必须要   insert之后才能返回正确值
    })
});

module.exports = router;   //把整个js 当成一个模块导出   提供给外部使用
