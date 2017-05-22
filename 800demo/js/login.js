/**
 * Created by sufei on 2017/3/15.
 */
$(function () {
   //选项卡
    $('.btn-tab').children().click(function () {
        console.log($(this).index());
        var $tem1=$(this).index();
        $('.btn-view div').css({display:"none"});
        $('.btn-view div').eq($tem1).css({display:"block"});
    });
    //滑动验证；
    $('.move').mousedown(function (event1) {
        var $evt1=event1||window.event;
        var $iOffsetL = $evt1.clientX-this.offsetLeft;
        console.log($iOffsetL);
        $(document).bind('mousemove',function (event2) {
            var $evt2=event2 || window.event;
            var $iPosX = $evt2.clientX - $iOffsetL;
            var $widths=$('.aside-move').width()-38;
            console.log($widths);
            if($iPosX >=0 && $iPosX <$widths){

                $('.aside-move-color').css({
                    height:40,
                    width:$iPosX,
                    background:'#7ac23c',
                    position:"absolute",
                    opacity: .5
                });
                $('.move').css({left:$iPosX});

            }

            if($iPosX >= $widths){
                $('.aside-move-color').css({opacity: 1,color:"#fff"}).html("验证通过");

                $("#login").click(function(){//alert(11);
        $.ajax({
                url:'login.php',
                type:'post',
                data:{"username":$('#user').val(),"password":$('#pwd').val()},
                dataType:'text',
                success:function(data){
                    $("#warm").html(data);
                    if(data==='登录成功'){
                        location.href="index.php";
                    }
                }
            });
    });
            }else {
                $('.aside-move-color').html("");
            }

        });
        $(document).bind('mouseup',function () {
            $(document).unbind('mousemove');
        });
        return false;

    });
    
    //更多按钮
    $('.login-open-seen').click(function () {
        $('.login-seen').toggle();
    });
});