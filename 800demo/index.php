<?php
session_start();
$username= isset($_SESSION['username'])?$_SESSION['username']:"";
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>折800首页</title>
        <link rel="stylesheet" type="text/css" href="iconfont/iconfont.css">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <script src="js/jquery-1.11.3.js"></script>
        <script src="js/cookie.js"></script>
        <script src="js/autoComplete.js"></script>
        <script src="js/mylunbo.js"></script>
        <script src="js/listdata.js"></script>
        <script src="js/index.js"></script>
    </head>
    <body>
        <!--悬浮顶部导航栏-->
        <div class="top-nav">
            <div class="top-nav-chlid">
                <div class="min fenbu">
                    <div class="min top-nav-a">
                        <a href="javascript:">首页</a>
                        <a href="javascript:">品牌团</a>
                        <a href="javascript:">优品汇</a>
                        <a href="javascript:">淘宝精选</a>
                        <a href="javascript:">9块9包邮</a>
                        <a href="javascript:">20元封顶</a>
                        <a href="javascript:">精选预告</a>
                        <a href="javascript:">特卖商城</a>
                        <a href="javascript:">今日上新</a>
                        <a href="javascript:">即将下架</a>
                        <a href="javascript:">每日10件</a>
                        <a href="javascript:">排行榜</a>
                    </div>
                    <p class="so-so">
                        <input type="text" placeholder="搜全站" class="so-so-txt">
                        <button class="so-so-btn">搜索</button>
                    </p>
                </div>
            </div>
            <div class="top-nav-chlid">
                <div class="min top-nav-a">
                    <a href="javascript:">全部</a>
                    <a href="javascript:">女装</a>
                    <a href="javascript:">鞋包</a>
                    <a href="javascript:">居家</a>
                    <a href="javascript:">母婴儿童</a>
                    <a href="javascript:">美食</a>
                    <a href="javascript:">男装</a>
                    <a href="javascript:">内衣</a>
                    <a href="javascript:">数码家电</a>
                    <a href="javascript:">配饰</a>
                    <a href="javascript:">美妆</a>
                    <a href="javascript:">家纺</a>
                    <a href="javascript:">运动</a>
                    <a href="javascript:">中老年</a>
                </div>
            </div>
        </div>
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
            <!--轮播图-->
            <div class="min rotate-main">
                <div class="rotate">
                    <div class="rotate-box">
                        <ul class="rotate-view">
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo1.jpg" /><span></span></a></li>
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo2.jpg" /><span></span></a></li>
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo3.jpg" /><span></span></a></li>
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo4.jpg" /><span></span></a></li>
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo5.jpg" /><span></span></a></li>
                            <li class="rotate-view-child"><a href="javascript:"><img src="images/lunbo/lunbo6.jpg" /><span></span></a></li>
                        </ul>
                        <div class="rotate-view-right">
                            <p><a href="javascript:" class="a-size"></a><a href="javascript:">签到挣积分</a></p>
                            <p><a href="javascript:" class="a-size"></a><a href="javascript:">评价的积分</a></p>
                            <p><a href="javascript:" class="a-size"><img src="images/chojiang.png"><span>0元抽奖</span></a></p>
                        </div>
                    </div>
                    <div class="rotate-btn">
                        <a href="javascript:" class="rotate-btn-left"><i class="iconfont">&#xe660;</i></a>
                        <a href="javascript:" class="rotate-btn-right"><i class="iconfont">&#xe65f;</i></a>
                    </div>
                    <p class="rotate-a">
                        <a href="javascript:" class="rotate-a-child ared"></a>
                        <a href="javascript:" class="rotate-a-child"></a>
                        <a href="javascript:" class="rotate-a-child"></a>
                        <a href="javascript:" class="rotate-a-child"></a>
                        <a href="javascript:" class="rotate-a-child"></a>
                        <a href="javascript:" class="rotate-a-child"></a>
                    </p>
                </div>
                <!--列表-->
                <div class="product-box">
                    <ul class="product-list">
                        <li><a href="javascript:">女装</a><span>、</span><a href="javascript:">内衣</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">男装</a><span>、</span><a href="javascript:">美食</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">母婴儿童</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">家纺</a><span>、</span><a href="javascript:">居家</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">鞋品箱包</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">数码家电</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">美妆</a><span>、</span><a href="javascript:">配饰</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">运动</a><span>、</span><a href="javascript:">中老年</a><i class="iconfont">&#xe65f;</i></li>
                        <li><a href="javascript:">今日上新</a><span>|</span><a href="javascript:">最后抢</a><span>|</span><a href="javascript:">排行榜</a></li>
                        <li><a href="javascript:">每日十件</a><span>|</span><a href="javascript:">值得买</a><span>|</span><a href="javascript:">限量抢</a></li>
                    </ul>
                    <div class="product-div">

                    </div>
                </div>
            </div>
            <!--品牌热卖-->
            <div class="min best-selling">
                <div class="tal">
                    <div class="tal-content">
                        <p>品牌热卖</p>
                        <p>今日在线品牌 932 个</p>
                    </div>
                    <ul class="tal-a"></ul>
                </div>
                <div class="best-selling-imgs"></div>
                <div class="best-selling-links"></div>
            </div>
            <!--限量抢购-->
            <div class="min href-goods">
                <div class="tal">
                    <div class="tal-content"><p>限量抢购</p></div>
                    <ul class="tal-time"></ul>
                </div>
                <!--//轮播-->
                <div class="href-goods-lunbo">
                    <div class="href-goods-lunbo-view">

                    </div>
                    <div class="href-goods-lunbo-btn">
                        <a href="javascript:" class="href-goods-lunbo-btn-left"><i class="iconfont">&#xe660;</i></a>
                        <a href="javascript:" class="href-goods-lunbo-btn-right"><i class="iconfont">&#xe65f;</i></a>
                    </div>
                </div>
            </div>
            <!--热销推荐-->
            <div class="min hot-recommend ">
                <div class="tal">
                    <div class="tal-content">
                        <p>热销推荐</p>
                        <p><a href="javascript:">即将下架</a>|<a href="javascript:">人气爆款</a>|<a href="javascript:">每日更新</a></p>
                    </div>
                </div>
                <div class="hot-recommend-imgs"></div>
            </div>
            <!--今日已更新15177款-->
            <div class="min day-update">
                <div class="tal">
                    <div class="tal-content">
                        <p><a href="javascript:">今日已更新</a></p>
                        <p class="day-update-date"></p>
                    </div>
                    <div class="tal-date">
                        <ul class="tal-date-ul1">
                            <li><a href="javascript:" class="tal-date-color">默认</a></li>|
                            <li><a href="javascript:">男</a></li>|
                            <li><a href="javascript:">女</a></li>|
                            <li><a href="javascript:">辣妈</a></li>
                        </ul>
                        <ul class="tal-date-ul2">
                            <li><a class="tal-date-color">排序</a></li>
                            <li><a href="javascript:" class="paixu tal-date-color">最新</a></li>
                            <li><a href="javascript:" class="paixu tal-date-color oChecked">最热</a></li>
                        </ul>
                    </div>
                </div>
                <div class="day-update-figures">
                    <div class="day-update-figures-hc"></div>
                    <div class="day-update-figures-product"></div>
                </div>
            </div>
            <!--//选项卡-->
            <div class="min tal-box">
                <a href="javascript:" class="tal-btn tal-box-bg">1</a>
                <a href="javascript:" class="tal-btn">2</a>
                <a href="javascript:" class="tal-btn">3</a>
                <a>...</a>
                <a href="javascript:" class="next-ye">下一页</a>
            </div>
            <!--热销推荐-->
            <div class="min hot-recommend ">
                <div class="hot-recommend-imgs"></div>
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