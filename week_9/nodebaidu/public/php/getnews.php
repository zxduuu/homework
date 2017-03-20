<?php
/**
 * Created by IntelliJ IDEA.
 * User: tutu
 * Date: 16/12/19
 * Time: 17:36
 */

//header('Content-type: text/html;charset=utf-8');

header('Content-type:application/json; charset=utf-8');
require_once('db.php');

//var_dump($link);
//echo '1';
//print_r($_GET);   //后台有没有取到前端传递的参数
//echo '2';

if ($link) {
    //echo json_encode(array('连接信息' => 'fail'));
    //执行成功的过程

    if ($_GET['newstype']) {
        $newstype = $_GET['newstype'];
        $sql = "SELECT * FROM news WHERE newstype='{$newstype}'";

        mysqli_query($link, 'SET NAMES uft8');
        $result = mysqli_query($link, $sql);

        $senddata = array();

        while ($row = mysqli_fetch_assoc($result)) {
//        print_r($row);
            $newsRowData = array(
                'id' => $row['id'],
                'newstype' => $row['newstype'],
                'newstitle' => $row['newstitle'],
                'newsimg' => $row['newsimg'],
                'newstime' => $row['newstime'],
                'newssrc' => $row['newssrc'],
            );
            array_push($senddata, $newsRowData);
        }
//    print_r($senddata);
        echo json_encode($senddata);
    } else {
        $sql = "SELECT * FROM news";

        mysqli_query($link, 'SET NAMES uft8');
        $result = mysqli_query($link, $sql);

        $senddata = array();

        while ($row = mysqli_fetch_assoc($result)) {
//        print_r($row);
            $newsRowData = array(
                'id' => $row['id'],
                'newstype' => $row['newstype'],
                'newstitle' => $row['newstitle'],
                'newsimg' => $row['newsimg'],
                'newstime' => $row['newstime'],
                'newssrc' => $row['newssrc'],
            );
            array_push($senddata, $newsRowData);

        }
        echo json_encode($senddata);
    }
} else {
    echo json_encode(array('success' => 'none'));
}
mysqli_close($link);

//[{newstype:,newstitle:},{},{}]
//
//$arr = array(
//    'newstype' => '百家',
//    'newsimg' => 'img/11.jpg',
//    'newstime' => '2016-12',
//    'newstitle' => '测试动态获取的新闻标题'
//);

//echo json_encode($arr);
?>