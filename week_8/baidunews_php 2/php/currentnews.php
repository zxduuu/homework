<?php
header('Content-type:application/json; charset=utf-8');
require_once('db.php');

if ($link) {
    $newsid = $_GET['newsid'];

    mysqli_query($link, 'SET NAMES uft8');
    $sql = "SELECT * FROM news WHERE id = '{$newsid}'";

    $result = mysqli_query($link, $sql);

    $senddata = array();

    while ($row = mysqli_fetch_assoc($result)) {

        $newsRowData = array(
            'id' => $row['id'],
            'newstype' => $row['newstype'],
            'newstitle' => $row['newstitle'],
            'newsimg' => $row['newsimg'],
            'newstime' => $row['newstime'],
            'newssrc' => $row['newssrc'],
        );
        array_push($senddata, $newsRowData);


//        array_push($senddata, array(        //与上面那一段是一样的
//            'id' => $row['id'],
//            'newstype' => $row['newstype'],
//            'newstitle' => $row['newstitle'],
//            'newsimg' => $row['newsimg'],
//            'newstime' => $row['newstime'],
//            'newssrc' => $row['newssrc'],
//        ));
    }
    echo json_encode($senddata);

}

mysqli_close($link);
?>