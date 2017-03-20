<?php

header('Content-type:application/json; charset=utf-8');
require_once('db.php');

if($link){
    //插入新闻

    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];

    //设置查询语句
    $sql = "INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES ('{$newstitle}','{$newstype}','{$newsimg}','{$newstime}','{$newssrc}')";
//    echo $sql;
    mysqli_query($link,'SET NAMES uft8');
    $result = mysqli_query($link, $sql);

    if (!$result) {
        echo json_encode(array('success' => 'fail', 'msg' => mysqli_error($link)));
    } else {
        echo json_encode(array('success' => 'ok'));
    }
}