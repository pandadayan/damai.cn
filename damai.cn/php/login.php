
<?php
    include("./conn.php");

    // 接收用户数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    $sql = "select * from user where u_name='$username' and u_pass='$password'";
    
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
       
        echo '1';
    }else{
        
        echo '0';
    }

    $mysqli->close();

?>





	
	
