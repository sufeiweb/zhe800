<?php
session_start();
header('content-type:text/html;charset=utf-8');
$username = isset($_POST['username']) ? $_POST['username'] : "";
$password = isset($_POST['password']) ? $_POST['password'] : "";
if (empty($username) || empty($password)) {
    echo '存在数据为空，请重新输入';
} else {
    $rule1 = '/^1[34578]\d{9}$/';
    $rule2 = '/^[\w!@#]{6,16}$/';
    $preg1 = preg_match($rule1, $username);
    $preg2 = preg_match($rule2, $password);
    if ($preg1 == 0 || $preg2 == 0) {
        echo '用户名或密码格式不正确';
    } else {
        $password = md5($password);
        $conn = @mysql_connect('localhost', 'root', '');
        mysql_select_db('sf', $conn); //自己可以改数据库名
        mysql_query("set names utf8", $conn);
        mysql_query("set character_set_client=binary", $conn);
        $sql = "SELECT * FROM user WHERE username='$username'";
        $res = mysql_query($sql);
        $arr = mysql_fetch_assoc($res);
        if ($username == $arr['username'] && $password == $arr['password']) {
            $_SESSION['username']=$username;
            echo '登录成功';
        } else {
            echo '用户名与密码不匹配';
        }
    }
}