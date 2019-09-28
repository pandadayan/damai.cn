<?php
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Method:POST,GET');

include "conn.php";

if(isset($_GET['pid'])){//目标商品id通过ajax发送过来
    $id=$_GET['pid']; 
    $sql = "select * from product where sid='$id'";

    $res = $mysqli->query($sql);

    $row = $res->fetch_assoc();

    $json = json_encode($row);

    echo $json;
    
    $mysqli->close();
};
// $sql = "select * from product where sid='1'";

//     $res = $mysqli->query($sql);

//     $row = $res->fetch_assoc();

//     $json = json_encode($row);

//     echo $json;
    
//     $mysqli->close();

?>