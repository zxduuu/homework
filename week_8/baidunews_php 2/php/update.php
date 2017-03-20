<?php //UPDATE 基本可以照搬insert的代码

header('Content-type:application/json; charset=utf-8');
require_once('db.php');

if ($link) {
    //插入新闻

    $newstitle = $_POST['newstitle'];
    $newstype = $_POST['newstype'];
    $newsimg = $_POST['newsimg'];
    $newstime = $_POST['newstime'];
    $newssrc = $_POST['newssrc'];
    $newsid = $_POST['id'];

//    print_r($_POST);   //后台有没有取到前端传递的参数
//    echo '1';
//    var_dump($_POST);  //可以看到各字段的类型
//    echo '2';

    //设置查询语句
    $sql = "UPDATE news SET newstitle='{$newstitle}',newstype='{$newstype}',newsimg='{$newsimg}',newstime='{$newstime}',
             newssrc='{$newssrc}' WHERE id={$newsid}";
//    echo $sql;
    mysqli_query($link, 'SET NAMES uft8');
    $result = mysqli_query($link, $sql);
//    var_dump($result);
//    echo mysqli_error($link);

    if (!$result) {
        echo json_encode(array('success' => 'fail'));
    } else {
        echo json_encode(array('success' => 'ok'));
    }
}

mysqli_close($link);

?>
