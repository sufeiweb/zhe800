<?php
session_start();
$username= isset($_SESSION['username'])?$_SESSION['username']:"";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>购物车</title>
    <link rel="stylesheet" type="text/css" href="css/foodscar.css">
    <link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <script src="js/jquery-1.11.3.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/foodscar.js"></script>
</head>
<body>
<!--header nav-->
<div class="header">
    <div class="max">
        <section>
            <p class="header-nav">
                <a href="javascript:">团800旗下网站</a>|
                <a href="javascript:" class="header-nav-mobile"><img src="images/mobile_icon.png">手机版<span class="header-nav-mobile-view"></span></a>|<?php if(empty($username)){
                        echo '<a href="javascript:">QQ登录</a>|
                <a href="login.html">登录</a>
                <a href="zhuce.html">免费注册</a>';}else{
                echo '<a href="logout.php">欢迎，'.$username.'  |  <span>注销</span></a>';
                }?>|
                <a href="javascript:">我的订单</a>|
                <a href="javascript:"><i class="iconfont">&#xe63f;</i>购物车<span class="product-num">4</span></a>|
                <a href="javascript:">帮助中心</a>|
                <a href="javascript:">卖家中心</a>
            </p>
        </section>
    </div>
</div>
<div class="logo-char">
    <div class="max">
        <div class="carImg">
            <img src="images/logo_zhe800.png">
            <img src="images/toolbar_kuan.jpg">
        </div>

    </div>
</div>
<div class="foodsCar-main">
    <div class="max">
        <table id="cartTable">
            <thead>
            <tr>
                <th><label><input class="check-all check" type="checkbox"/>&nbsp;全选</label></th>
                <th>商品</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody class="myTbody">
            <tr>
                <td class="checkbox"><input class="check-one check" type="checkbox"/></td>
                <td class="goods"><img src="images/foodsdemo/1.jpg" alt=""/><span>Casio/卡西欧 EX-TR350</span></td>
                <td class="price">5999.88</td>
                <td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td>
                <td class="subtotal">5999.88</td>
                <td class="operation"><span class="delete">删除</span></td>
            </tr>
            <tr>
                <td class="checkbox"><input class="check-one check" type="checkbox"/></td>
                <td class="goods"><img src="images/foodsdemo/2.jpg" alt=""/><span>Canon/佳能 PowerShot SX50 HS</span></td>
                <td class="price">3888.50</td>
                <td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td>
                <td class="subtotal">3888.50</td>
                <td class="operation"><span class="delete">删除</span></td>
            </tr>
            <tr>
                <td class="checkbox"><input class="check-one check" type="checkbox"/></td>
                <td class="goods"><img src="images/foodsdemo/3.jpg" alt=""/><span>Sony/索尼 DSC-WX300</span></td>
                <td class="price">1428.50</td>
                <td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td>
                <td class="subtotal">1428.50</td>
                <td class="operation"><span class="delete">删除</span></td>
            </tr>
            <tr>
                <td class="checkbox"><input class="check-one check" type="checkbox"/></td>
                <td class="goods"><img src="images/foodsdemo/4.jpg" alt=""/><span>Fujifilm/富士 instax mini 25</span></td>
                <td class="price">640.60</td>
                <td class="count"><span class="reduce"></span><input class="count-input" type="text" value="1"/><span class="add">+</span></td>
                <td class="subtotal">640.60</td>
                <td class="operation"><span class="delete">删除</span></td>
            </tr>
            </tbody>
        </table>
        <div class="foot" id="foot">
            <label class="fl select-all"><input type="checkbox" class="check-all check"/>&nbsp;全选</label>
            <a class="fl delete" id="deleteAll" href="javascript:;">删除</a>
            <div class="fr closing">结 算</div>
            <div class="fr total">合计：￥<span id="priceTotal">0.00</span></div>
            <div class="fr selected" id="selected">已选商品<span id="selectedTotal">0</span>件<span class="arrow up">︽</span><span class="arrow down">︾</span></div>
            <div class="selected-view">
                <div id="selectedViewList" class="clearfix">
                    <div><img src="images/foodsdemo/1.jpg"><span>取消选择</span></div>
                </div>
                <span class="arrow">◆<span>◆</span></span>
            </div>
        </div>
    </div>
</div>
<!--footer-->
<footer class="max">
    <p><a href="javascript:">京ICP证120075号 </a> 京ICP备10051110号-5 <a href="javascript:"> 京公网安备11010502025623 </a>营业执照110105013673175  食品流通许可证SP1101051510352397</p>
    <p>出版物经营许可证 新出发京零字第朝160018号  Copyright©2011-2015 版权所有 ZHE800.COM </p>
    <!--<p><img src="images/web_trust.png"><img src="images/cert.png"><img src="images/credit.png"></p>-->
    <p><a href="javascript:"></a><a href="javascript:"></a><a href="javascript:"></a></p>
</footer>
</body>
</html>