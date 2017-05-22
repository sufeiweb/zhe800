/**
 * Created by sufei on 2017/3/15.
 */
$(function () {
    //手机客户端二维码
    $('.header-nav-mobile').hover(function () {
        $('.header-nav-mobile-view').css({display: "block"});
    }, function () {
        $('.header-nav-mobile-view').css({display: "none"});
    });
    //搜索ajax异域请求
    // http://status.tuanimg.com/zhe800-search/suggestion/searchJsonp?callback=search_sug&word=a&limit=10&offset=0&userSex=0
    //我不会啊/怎么办啊
    //nav 选择器
    $('.search-nav').children().click(function () {
        $(this).siblings().children().removeClass('search-nav-a');
        $(this).children().addClass('search-nav-a');
        // day-update-figures-product
        var $n=parseInt(Math.random()*3+1);
        chuangli1($n);
    });
    //签到人
    $('.search-img-div').hover(function () {
        $('.qiandaoren').css({display:"block"});
    },function () {
        $('.qiandaoren').css({display:"none"});
    });
//轮播
    $('.rotate').mylunbo();
    //列表子元素
    $('.product-list').children().hover(function () {
        $('.product-div').html('');
        $('.product-div').css({display: "block"});
        if ($(this).index() == 9 || $(this).index() == 8) {
            $('.product-div').css({display: "none"});
        }
        $('.product-div').mouseenter(function () {
            $('.product-div').css({display: "block"});
        });
        $('.product-div').mouseleave(function () {
            $('.product-div').css({display: "none"});
        });
        if($(this).index()<8){
            var $ulName = listdata[$(this).index()].name;
            var $liName = listdata[$(this).index()].genre;
            // console.log($ulName);
            // console.log($liName);
            //建立dl；
            for (var $i = 0; $i < $ulName.length; $i++) {
                $('.product-div').append('<dl><dt>' + $ulName[$i] + '</dt></dl>');
            }
            for (var $i = 0; $i < $liName.length; $i++) {
                for (var $j = 0; $j < $liName[$i].length; $j++) {
                    if ($i == 0) {
                        $('.product-div dl').eq(0).append('<dd><a href="javascript:">' + $liName[0][$j] + '</a></dd>')
                    } else {
                        $('.product-div dl').eq(1).append('<dd><a href="javascript:">' + $liName[1][$j] + '</a></dd>')
                    }
                }
            }
        }
    }, function () {
        $('.product-div').css({display: "none"});

    });
    //品牌热卖
    // console.log(listbestSelling[0].aName);
    for(var $i=0;$i<listbestSelling[0].aName.length;$i++){
        $('.tal-a').append('<li><a href="javascript:">'+listbestSelling[0].aName[$i]+'</a></li></li>');
    }
    for(var $i=0;$i<listbestSelling[0].imgSrc.length;$i++){
        $('.best-selling-imgs').append('<a href="javascript:"><figure><img src="'+listbestSelling[0].imgSrc[$i]+'"><figcaption>3折优惠</figcaption></figure></a>');
    }
    $('.best-selling-imgs').children().hover(function () {
        $(this).animate({opacity: .6})
    },function () {
        $(this).animate({opacity: 1})
    });
    for(var $i=0;$i<listbestSelling[0].linkSrc.length;$i++){
        $('.best-selling-links').append('<a href="javascript:"><img src="'+listbestSelling[0].linkSrc[$i]+'"></a>')
    }
    $('.best-selling-links').children().hover(function () {
        $(this).animate({opacity: .5});
    },function () {
        $(this).animate({opacity: 1});
    });
    // 限量抢购
    for(var $i=0;$i<listhrefGoods[0].aName.length;$i++){
        $('.tal-time').append('<li><a href="javascript:">'+listhrefGoods[0].aName[$i]+'</a></li></li>');
    }
        //lunbo shikou轮播视口
    console.log(listhrefGoods[0].imgSrc)
    for(var $i=0;$i<listhrefGoods[0].imgSrc.length;$i++){
            $('.href-goods-lunbo-view').append('<div class="href-goods-lunbo-view-div"></div>');
        for(var $j=0;$j<listhrefGoods[0].imgSrc[$i].length;$j++){
            $('.href-goods-lunbo-view-div').eq($i).append('<a href="javascript:"><figure><img src="'+listhrefGoods[0].imgSrc[$i][$j].Src+
                '"><figcaption><p>'+listhrefGoods[0].imgSrc[$i][$j].Content+
                '</p><p>'+listhrefGoods[0].imgSrc[$i][$j].Price+
                '</p></figcaption></figure></a>')
        }
    }
    var $oldViewdiv=0;
    $('.href-goods-lunbo-btn').children().click(function () {
        switch ($(this).index()){
            case 0:{
                $oldViewdiv--;
            }break;
            case 1:{
                $oldViewdiv++;
            }break;
        }
        if($oldViewdiv <0){
            $oldViewdiv =$('.href-goods-lunbo-view-div').length-1;
        }else if($oldViewdiv>=$('.href-goods-lunbo-view-div').length){
            $oldViewdiv=0;
        }
        $('.href-goods-lunbo-view-div').eq($oldViewdiv).animate({opacity:1}).siblings().animate({opacity:0});
    });

    //热销抢购
    $('.tal-time li').eq(5).children().addClass("tal-time-bgcolor");
    for(var $i=0;$i<listhotRecommend[0].imgSrc.length;$i++){
        $('.hot-recommend-imgs').append('<a href="javascript:"><img src="'+listhotRecommend[0].imgSrc[$i]+'"></a>');
    }
    $('.hot-recommend-imgs').children().hover(function () {
        $(this).animate({opacity: .6});
    },function () {
        $(this).animate({opacity: 1});
    });
// 今日更新
    $('.day-update-date').append('<a href="javascript:">'+listdayUpdate[0].updateNum+'</a>')
    $('.tal-date-ul1 li').click(function () {
        $(this).siblings().children().removeClass('tal-date-color');
       $(this).children().addClass('tal-date-color');
        var $n1=parseInt(Math.random()*3+1);
        chuangli1($n1);
    });
    $('.paixu').click(function () {
        $(this).parent().siblings().children().removeClass('oChecked');
        $(this).addClass('oChecked');
        var $n5=parseInt(Math.random()*3+1);
        chuangli1($n5);
    });
    // day-update-figures-hc
    for(var $i=0;$i<listdayUpdate[0].hC.length;$i++){
        $('.day-update-figures-hc').append('<figure><a href="javascript:"><img src="'+listdayUpdate[0].hC[$i].imgSrc +'"></a><figcaption><p><a href="javascript:">'+listdayUpdate[0].hC[$i].mJ +'</a></p><p><a href="javascript:">'+listdayUpdate[0].hC[$i].aDr+'</a><a href="javascript:"><img src="'+listdayUpdate[0].lookImg+'"></a></p></figcaption></figure>')
    }
    chuangli();
    // day-update-figures-product
    // for(var $i=0;$i<listdayUpdateFigures.length;$i++){
    //     $('.day-update-figures-product').append('<figure><a href="javascript:"><img src="'+listdayUpdateFigures[$i].imgSrc+
    //         '"><span class="find">找相似&gt;</span></a><figcaption><p><a href="javascript:">'+listdayUpdateFigures[$i].oText+
    //         '</a><span>'+listdayUpdateFigures[$i].oDay+
    //         '</span></p><p><span>'+listdayUpdateFigures[$i].price+
    //         '</span><span>'+listdayUpdateFigures[$i].oldPrice+
    //         '</span><a href="javascript:">'+listdayUpdateFigures[$i].newProduct+
    //         '</a></p></figcaption></figure>');
    // }
    // //当我鼠标移动到这个figure时，若他的index能被3（或者一进网页我就随机一个数字，也可以）或者5整除，那么他就包邮什么的。
    // var $p='<p class="lucky"><span>包邮</span>|<span>返积分</span>|<a href="javascript:" >退货补贴优惠券</a><a href="javascript:">收藏</a><a href="javascript:">[详情]</a></p>';
    // $('.day-update-figures-product figure').hover(function () {
    //     if($(this).index()%7==0 || $(this).index()%5==0){
    //         $(this).css({
    //            marginBottom:0,
    //             paddingBottom:0
    //         });
    //         $(this).find('.find').css({display:"block"});
    //         $(this).find('figcaption').append($p);
    //     }
    // },function () {
    //     $(this).css({
    //         marginBottom:20,
    //         paddingBottom:5
    //     });
    //     $(this).find('.find').css({display:"none"});
    //     $('.lucky').remove();
    // });

    //数字/下一页选项卡
    var $talbtnIndex=0;
    var $talbtnLength=$('.tal-btn').length;
    $('.tal-btn').click(function () {
       $(this).addClass('tal-box-bg').siblings().removeClass('tal-box-bg');
       $talbtnIndex=$(this).index();
        var $n2=parseInt(Math.random()*3+1);
        chuangli1($n2);
    });
    $('.next-ye').click(function () {
        if($talbtnIndex<$talbtnLength){
            $('.tal-btn').eq(++$talbtnIndex).addClass('tal-box-bg').siblings().removeClass('tal-box-bg');
            var $n3=parseInt(Math.random()*3+1);
            chuangli1($n3);
        }
        else {
            $talbtnIndex=0;
            $('.tal-btn').eq($talbtnIndex).addClass('tal-box-bg').siblings().removeClass('tal-box-bg');}
    });
    // 尾部链接
    var $dd=[];
    for(var $i=0;$i<footerlinks.length;$i++) {
        var $ddlist=[];
        for (var $j = 0; $j < footerlinks[$i].linkDd.length; $j++) {
            $ddlist.push('<dd><a href="javascript:">'+footerlinks[$i].linkDd[$j]+'</a></dd>') ;
        }
        $dd.push($ddlist);
    }
    for(var $i=0;$i<footerlinks.length;$i++){
        $('.footer-link-box').append('<dl><dt>'+footerlinks[$i].linkDt+'</dt>'+$dd[$i].join('')+'</dl>');
    }
    // link-move
    var $top=0;
    setInterval(function () {
        $top+=15;
        if($top<=45){
            $('.link-move').animate({top:-$top})
        }else{
           $top=0;
            $('.link-move').animate({top:0});
        }
    },2000);

    //侧边栏：
    var $Hight=$(document).height();
    $('.sidebar').css({height:$Hight});
    // 购物车
    $('.foodsCar').hover(function () {
        $(this).css({background:"#c7000b"});
        $('.foodsCar-num').css({color:"#c7000b",background:"#fff"})
    },function () {
        $(this).css({background:""});
        $('.foodsCar-num').css({color:"#fff",background:"#c7000b"})
    });
    // sidebar-center-chlid
    $('.sidebar-center-chlid').hover(function () {
        $('.sidebar-center-chlid a').hover(function () {
            $(this).parent().css({background:"#c7000b"});
            $(this).parent().find('p').css({display:"block"});
        });
    },function () {
        $(this).css({background:""});
        $(this).find('p').css({display:"none"});
    });

    // sidebar-footer-chlid
    $('.sidebar-footer-chlid').hover(function () {
        $('.sidebar-footer-chlid a').hover(function () {
            $(this).parent().css({background:"#c7000b"});
            $(this).parent().find('p').css({display:"block"});
        });
    },function () {
        $(this).css({background:""});
        $(this).find('p').css({display:"none"});
    });
    //滚动
    $(window).scroll(function () {
        if($(window).scrollTop()>150){
            $('.return-top').css({display:"block"});
        }else{
            $('.return-top').css({display:"none"});
        }
        if($(window).scrollTop()>500){
            $('.top-nav').css({display:"block"});
        }else{
            $('.top-nav').css({display:"none"});
        }
    });
    $('.return-top').click(function () {
        $('body').animate({scrollTop:0},1000);
        return false;
    });



    function  chuangli() {
        $('.day-update-figures-product').html('');
        for(var $i=0;$i<listdayUpdateFigures.length;$i++){
            $('.day-update-figures-product').append('<figure><a href="details.php"><img src="'+listdayUpdateFigures[$i].imgSrc+
                '"><span class="find">找相似&gt;</span></a><figcaption><p><a href="javascript:">'+listdayUpdateFigures[$i].oText+
                '</a><span>'+listdayUpdateFigures[$i].oDay+
                '</span></p><p><span>'+listdayUpdateFigures[$i].price+
                '</span><span>'+listdayUpdateFigures[$i].oldPrice+
                '</span><a href="javascript:">'+listdayUpdateFigures[$i].newProduct+
                '</a></p></figcaption></figure>');
        }
        //当我鼠标移动到这个figure时，若他的index能被3（或者一进网页我就随机一个数字，也可以）或者5整除，那么他就包邮什么的。
        var $p='<p class="lucky"><span>包邮</span>|<span>返积分</span>|<a href="javascript:" >退货补贴优惠券</a><a href="javascript:">收藏</a><a href="javascript:">[详情]</a></p>';
        $('.day-update-figures-product figure').hover(function () {
            if($(this).index()%7==0 || $(this).index()%5==0){
                $(this).css({
                    marginBottom:0,
                    paddingBottom:0
                });
                $(this).find('.find').css({display:"block"});
                $(this).find('figcaption').append($p);
            }
        },function () {
            $(this).css({
                marginBottom:20,
                paddingBottom:5
            });
            $(this).find('.find').css({display:"none"});
            $('.lucky').remove();
        });
    }
    function  chuangli1(num) {
        $('.day-update-figures-product').html('');
        switch (num){
            case 1:{for(var $i=0;$i<listdayUpdateFigures1.length;$i++){
                $('.day-update-figures-product').append('<figure><a href="details.php"><img src="'+listdayUpdateFigures1[$i].imgSrc+
                    '"><span class="find">找相似&gt;</span></a><figcaption><p><a href="javascript:">'+listdayUpdateFigures1[$i].oText+
                    '</a><span>'+listdayUpdateFigures1[$i].oDay+
                    '</span></p><p><span>'+listdayUpdateFigures1[$i].price+
                    '</span><span>'+listdayUpdateFigures1[$i].oldPrice+
                    '</span><a href="javascript:">'+listdayUpdateFigures1[$i].newProduct+
                    '</a></p></figcaption></figure>');
            }}break;
            case 2:{for(var $i=0;$i<listdayUpdateFigures2.length;$i++){
                $('.day-update-figures-product').append('<figure><a href="details.php"><img src="'+listdayUpdateFigures2[$i].imgSrc+
                    '"><span class="find">找相似&gt;</span></a><figcaption><p><a href="javascript:">'+listdayUpdateFigures2[$i].oText+
                    '</a><span>'+listdayUpdateFigures2[$i].oDay+
                    '</span></p><p><span>'+listdayUpdateFigures2[$i].price+
                    '</span><span>'+listdayUpdateFigures2[$i].oldPrice+
                    '</span><a href="javascript:">'+listdayUpdateFigures2[$i].newProduct+
                    '</a></p></figcaption></figure>');
            }}break;
            case 3:{for(var $i=0;$i<listdayUpdateFigures3.length;$i++){
                $('.day-update-figures-product').append('<figure><a href="details.php"><img src="'+listdayUpdateFigures3[$i].imgSrc+
                    '"><span class="find">找相似&gt;</span></a><figcaption><p><a href="javascript:">'+listdayUpdateFigures3[$i].oText+
                    '</a><span>'+listdayUpdateFigures3[$i].oDay+
                    '</span></p><p><span>'+listdayUpdateFigures3[$i].price+
                    '</span><span>'+listdayUpdateFigures3[$i].oldPrice+
                    '</span><a href="javascript:">'+listdayUpdateFigures3[$i].newProduct+
                    '</a></p></figcaption></figure>');
            }}break;
        }

        //当我鼠标移动到这个figure时，若他的index能被3（或者一进网页我就随机一个数字，也可以）或者5整除，那么他就包邮什么的。
        var $p='<p class="lucky"><span>包邮</span>|<span>返积分</span>|<a href="javascript:" >退货补贴优惠券</a><a href="javascript:">收藏</a><a href="javascript:">[详情]</a></p>';
        $('.day-update-figures-product figure').hover(function () {
            if($(this).index()%7==0 || $(this).index()%5==0){
                $(this).css({
                    marginBottom:0,
                    paddingBottom:0
                });
                $(this).find('.find').css({display:"block"});
                $(this).find('figcaption').append($p);
            }
        },function () {
            $(this).css({
                marginBottom:20,
                paddingBottom:5
            });
            $(this).find('.find').css({display:"none"});
            $('.lucky').remove();
        });
    }
    //从购物车栏调回商品数
    if($.cookie('productNum')!=null){
        $('.product-num').html($.cookie('productNum'));
    }
});