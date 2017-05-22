<?php
session_start();
$username= isset($_SESSION['username'])?$_SESSION['username']:"";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>商品详情</title>
    <link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/details.css">
    <script src="js/jquery-1.11.3.js"></script>
    <script src="js/cookie.js"></script>
    <script src="js/autoComplete.js"></script>
    <script src="js/mylunbo.js"></script>
    <script src="js/listdata.js"></script>
    <script src="js/index.js"></script>
    <script src="js/detailsdata.js"></script>
    <script src="js/details.js"></script>

</head>
<body>
    <!--header nav-->
    <div class="header">
    <div class="min">
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
                <a href="foodscar.php"><i class="iconfont">&#xe63f;</i>购物车<span class="product-num">4</span></a>|
                <a href="javascript:">帮助中心</a>|
                <a href="javascript:">卖家中心</a>
            </p>
        </section>
    </div>
</div>
    <!--search-->
    <div class="search-box">
    <div class="min">
        <section class="search">
            <a href="javascript:"><img src="images/logo_zhe800.png"></a>
            <div>
                <form>
                    <div class="search-auto">
                        <input id="search-txt" type="text" placeholder="拖鞋">
                        <div id="auto"></div>
                    </div>
                    <input class="search-btn" type="button" value="搜索">
                </form>
            </div>
            <a href="javascript:"><img src="images/toolbar_kuan.jpg"></a>
        </section>
        <section class="search-nav-box">
            <ul class="search-nav">
                <li><a href="javascript:" class="search-nav-a">首页</a></li>
                <li><a href="javascript:">品牌团</a></li>
                <li><a href="javascript:">优品汇</a></li>
                <li><a href="javascript:">淘宝精选</a></li>
                <li><a href="javascript:">9块9包邮</a></li>
                <li><a href="javascript:">精选预告</a></li>
                <li><a href="javascript:">特卖商城</a></li>
                <li><a href="javascript:">积分商城</a></li>
            </ul>
            <div class="search-img">
                <div class="search-img-div"><img src="images/qiandao.gif" class="search-img-qiandao"><a href="javascript:" class="qiandaoren"><img src="images/qiandaoren.jpg"  ></a></div>
                <p class="search-img-p"><img src="images/toolbar_xiena.png"><img src="images/r_img_xiena.png"></p>
            </div>
        </section>
    </div>

</div>
    <div class="body-color">
        <div class="min details-box-header">
            <a href="javascript:">特卖商城</a> &gt;
        </div>
        <div class="min details-box">
            <section class="details-left">
                <div class="details-left-view"></div>
                <div class="details-left-btn"></div>
            </section>
            <section class="details-center">
                <p class="details-center-title"></p>
                <div class="details-center-priceBox">
                    <p><span class="newPrice"></span><del class="oldPrice"></del> </p>
                    <p class="details-center-priceBox-p"><span>积分</span><span class="jifen"></span></p>
                    <div class="details-center-priceBox-div"><span>优惠</span><p class="youhui"></p> </div>
                </div>
                <div class="details-center-fuwuBox">
                    <p><span>运费</span><span class="yunfei"></span></p>
                    <div class="fuwu-main"><span>服务</span><p class="fuwu">
                        <span class="zhe"></span>
                        <span class="o24"></span>
                    </p>
                    </div>
                    <p class="color"><span>颜色</span></p>
                    <p><span>尺码</span><span class="chima"></span></p>
                    <div class="shuliang">数量
                        <p><button class="jian">-</button><span class="shuliang-bianhua">1</span><button class="jia">+</button></p>
                        <p class="shuliang-num"></p>
                    </div>
                </div>
                <div class="details-center-btnBox">
                    <a href="javascript:" class="details-center-btnBox-btn1">立即购买</a>
                    <a href="javascript:" class="details-center-btnBox-btn2">加入购物车</a>
                </div>
                <div class="details-center-tuiBox">
                    <a href="javascript:" class="details-center-tuiBox-btn1"></a>
                    <a href="javascript:" class="details-center-tuiBox-btn2"></a>
                    <a href="javascript:" class="details-center-tuiBox-btn3"></a>
                    <a href="javascript:" class="details-center-tuiBox-btn4"></a>
                </div>
            </section>
            <section class="details-right">
                    <div class="dianpu-box">
                        <h5 class="dianpu-name"></h5>
                        <div class="xin-box">
                            <p >信誉<a href="javascript:"class="xinyu"></a></p>
                            <p class="zizhi">资质<a href="javascript:"><span></span><span></span><span></span></a></p>
                        </div>
                        <div class="shuoming">
                            <p class="shuoming-left"><span>描述</span><a href="javascript:" class="miaoshu"></a></p>
                            <p class="shuoming-left"><span>服务</span><a href="javascript:" class="fuwu1"></a></p>
                            <p class="shuoming-left"><span>物流</span><a href="javascript:" class="wuliu"></a></p>
                        </div>
                        <p class="dianpu-btn">
                            <a href="javascript:">进入店铺</a>
                            <a href="javascript:">收藏店铺</a>
                        </p>
                    </div>
            </section>
        </div>
</div>
<div class="footer-color">
    <!--尾部链接-->
    <div class="min footer-link-box"></div>
    <div class="min download-app">
        <figure>
            <img src="images/foot_erweima.png">
            <figcaption>
                <p>扫描下载折800</p>
                <p>把折扣握在手心</p>
                <p>把潮流带在身边</p>
            </figcaption>
        </figure>
    </div>
    <div class="line"></div>
    <!--footer-->
    <footer class="min">
        <div>友情链接：<p><span class="link-move"><a href="javascript:">卡宝宝信用卡</a>
            <a href="javascript:">券妈妈优惠券</a>
            <a href="javascript:">梦芭莎网上购物</a>
            <a href="javascript:">手游交易平台</a>
            <a href="javascript:">千图网</a>
            <a href="javascript:">童鞋会</a>
            <a href="javascript:">火车票</a>
            <a href="javascript:">中商情报网</a>
            <a href="javascript:">法律咨询</a>
            <a href="javascript:">深圳地图</a>
            <a href="javascript:">P2P网贷导航</a>
            <a href="javascript:">名鞋库</a><a href="javascript:">万表网</a>
            <a href="javascript:">叮当音乐网</a>
            <a href="javascript:">114票务网</a>
            <a href="javascript:">儿歌视频大全</a>
            <a href="javascript:">亲宝网</a>
            <a href="javascript:">拍鞋网</a>
            <a href="javascript:">中国丽人网</a>
            <a href="javascript:">慧聪网</a>
            <a href="javascript:">亿邦动力网</a>
            <a href="javascript:">大豆网</a>
            <a href="javascript:">时尚品牌网</a>
            <a href="javascript:">家具网</a>
            <a href="javascript:">移动版</a>
            <a href="javascript:">摇篮网</a></span></p>
            <a>更多&gt;&gt;</a></div>
        <p><a href="javascript:">京ICP证120075号 </a> 京ICP备10051110号-5 <a href="javascript:"> 京公网安备11010502025623 </a>营业执照110105013673175  食品流通许可证SP1101051510352397</p>
        <p>出版物经营许可证 新出发京零字第朝160018号  Copyright©2011-2015 版权所有 ZHE800.COM </p>
        <!--<p><img src="images/web_trust.png"><img src="images/cert.png"><img src="images/credit.png"></p>-->
        <p><a href="javascript:"></a><a href="javascript:"></a><a href="javascript:"></a></p>
    </footer>
</div>

<!--侧边栏-->
<div class="sidebar">
    <!--购物车-->
    <div>
        <a href="foodscar.php" class="foodsCar">
            <i class="iconfont">&#xe63f;</i>
            <p>购物车</p>
            <p class="foodsCar-num product-num">4</p>
        </a>
    </div>
    <div class="sidebar-center">
        <div class="sidebar-center-chlid"><p><a href="javascript:">我的订单</a></p><a href="javascript:"></a></div>
        <div class="sidebar-center-chlid"><p><a href="javascript:">我的优惠券</a></p><a href="javascript:"></a></div>
        <div class="sidebar-center-chlid"><p><a href="javascript:">我的收藏</a></p><a href="javascript:"></a></div>
        <div class="sidebar-center-chlid"><p><a href="javascript:">卖家消息</a></p><a href="javascript:"></a></div>
    </div>
    <div class="sidebar-footer">
        <div class="sidebar-footer-chlid"><p><a href="javascript:">想领钱，先签到</a></p><a href="javascript:" class="qian"></a></div>
        <div class="sidebar-footer-chlid"><p><img src="images/side_two-dimension.png"></p><a href="javascript:"></a></div>
        <div class="sidebar-footer-chlid"><p><a href="javascript:">常见问题</a></p><a href="javascript:"></a></div>
        <div class="sidebar-footer-chlid"><p><a href="javascript:">意见反馈</a></p><a href="javascript:"></a></div>
    </div>
    <a href="javascript:" class="return-top"></a>
</div>
</body>
</html>