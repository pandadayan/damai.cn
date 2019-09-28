<?php
header('Access-Control-Allow-Origin:*'); 
header('Access-Control-Allow-Method:POST,GET');
// include "conn.php";
// if(isset($_POST['name'])){
//     $name=$_POST['name']; 
//     $result=$conn->query("select * from user where tel='$name'");
//     if($result->fetch_assoc()){
//         echo '{"msg":true,"s":"用户名存在"}';
//     }else{
//         echo '{"msg":false,"s":"用户名可以使用"}';
//     }
// }

// if(isset($_POST['username'])){
//     $username=$_POST['username'];
//     $password=sha1($_POST['password']);
//     $conn->query("insert user values(null,'$username','$password',NOW())");
//     header('location:http://127.0.0.1:8080/1908/damai.com%20py/damai.cn/scr/html/index1.html');
   

    include('./conn.php');

    // 接收前端发送的数据

    
    
   
    // echo "$username , $password , $email , $phone";

    // 注册 业务逻辑
    // 1. 连接数据库 
    // 2. 接收前端数据
    // 3. 在数据库中查询用户名是否存在
    // 4. 用户名不存在 就插入数据   如果存在  提示失败

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $sql = "select * from user where u_name='$name'";  //查询语句

        $result = $mysqli->query($sql);  //执行sql语句
    
    if($result->fetch_assoc()){
        echo '{"msg":true,"s":"用户名存在"}';
    }else{
        echo '{"msg":false,"s":"用户名可以使用"}';
    }

}

if(isset($_POST['username'])){
        $username=$_POST['username'];
        $password=sha1($_POST['password']);
        $sql = "select * from user where u_name='$username'";  //查询语句

    $result = $mysqli->query($sql);  //执行sql语句

    if($result->num_rows > 0){
        echo '<script>alert("用户名已存在");</script>';
        echo '<script>location.href="http://127.0.0.1:8080/1908/damai.com%20py/damai.cn/scr/html/registor.html";</script>';
        $mysqli->close();
        die; //如果用户名存在 代码不再往下执行
    }

    $insSql = "insert into user(u_name,u_pass) values ('$username','$password')";//插入语句

    $res = $mysqli->query($insSql);//执行插入语句

    if($res){
        echo '<script>alert("注册成功")</script>';
        echo '<script>location.href="../scr/html/index1.html"</script>';
    }

}

    

    $mysqli->close();

?>
