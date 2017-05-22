$(function () {
    for(var $i=0;$i<detaols[0].imgSrc.length;$i++){
        $('.details-left-btn').append('<a href="javascript:"><img src="'+detaols[0].imgSrc[$i]+'"></a>');
    }
    $('.details-left-view').html('<img src="'+detaols[0].Image[1]+'">');
    $('.details-left-btn a').hover(function(){
        $('.details-left-view').html('');
        $('.details-left-view').html('<img src="'+detaols[0].Image[$(this).index()]+'">');
    });


    $('.details-center-title').html(detaols[0].Title);
    $('.newPrice').html("￥"+detaols[0].price.newPrice);
    $('.oldPrice').html(detaols[0].price.oldPrice);
    $('.jifen').html(detaols[0].jifen);
    for(var $i=0;$i<detaols[0].youhui.length;$i++){
        $('.youhui').append('<span>'+detaols[0].youhui[$i]+ '</span>');
    }
    $('.yunfei').html(detaols[0].yunfei);
    $('.zhe').html(detaols[0].fuwu.zhe);
    $('.o24').html(detaols[0].fuwu.o24);
    $('.color').append('<img src="'+detaols[0].color+'">');
    $('.chima').html(detaols[0].chima);
    $('.shuliang-num').html(detaols[0].shuliang);
    $('.details-center-tuiBox-btn1').html(detaols[0].tuihun.day);
    $('.details-center-tuiBox-btn2').html(detaols[0].tuihun.tuihuobutie);
    $('.details-center-tuiBox-btn3').html(detaols[0].tuihun.bao);
    $('.details-center-tuiBox-btn4').html(detaols[0].tuihun.youhuiquan);

    $('.dianpu-name').html(dianpu[0].name);
    for(var $i=0;$i<dianpu[0].xinyu;$i++){
        $('.xinyu').append('<span></span>');
    }
    $('.miaoshu').html(dianpu[0].miaoshu);
    $('.fuwu1').html(dianpu[0].fuwu);
    $('.wuliu').html(dianpu[0].fahuo);

    console.log($('.shuliang-bianhua').html());
    var $pNum=1;
    $('.jian').click(function () {
        if($pNum <=1){
           $pNum=1;
        }else {
            $pNum=$pNum-1;
        }
        $('.shuliang-bianhua').html($pNum);
    });
    $('.jia').click(function () {
        $pNum++;
        $('.shuliang-bianhua').html($pNum);
    });


    // 添加购物车
    $('.details-center-btnBox-btn2').click(function () {
        // 先创建一个对象把数据存进去
        var object={
            title:detaols[0].Title,
            price:detaols[0].price.newPrice,
            imgs:detaols[0].color,
            num:$pNum
        };
        //创建一个cookie对象，存放加入购物车的数据。
         $.cookie("proDuct",JSON.stringify(object));
         $('.product-num').html(Number($('.product-num').html())+object.num);
    });

    //从购物车栏调回商品数
    if($.cookie('productNum')!=null){
        $('.product-num').html($.cookie('productNum'));
    }

});