<?php
header('Content-type:application/json; charset=utf-8');
require_once ('db.php');

if($link){
    $newsid = $_POST['newsid'];

    mysqli_query($link,'SET NAMES uft8');
    $sql = "DELETE FROM news WHERE id = '{$newsid}'";
    mysqli_query($link,$sql);

//    echo json_encode(array('delete' => 'ok'));

    $result =  mysqli_query($link,$sql);


    if (!$result) {
        echo json_encode(array('success' => 'fail', 'msg' => mysqli_error($link)));
    } else {
        echo json_encode(array('success' => 'ok'));
    }
}

mysqli_close($link);

?>