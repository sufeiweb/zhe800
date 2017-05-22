/**
 * Created by sufei on 2017/3/14.
 */
$(function () {
    //更多按钮控制：
    $('.open-seen').click(function () {
        $('.seen').toggle();
    });
    //验证码控制：
    var $numStr='';
    $('.aside-yanzheng').focus(function () {
        $('.aside-yanzheng').next().css({display:"block"});
    });
    $('.aside-yanzheng').blur(function () {
        var $yanzheng=$('.aside-yanzheng').val();
        if($yanzheng != $numStr){
            $('.aside-yanzheng').next().html('输入的验证码错误');
            $('.aside-yanzheng').next().css({color:"red"});
            $('.aside-yanzheng').css({borderColor:"red"});
        }else if($yanzheng.length ==0){
            $('.aside-yanzheng').next().html('请输入验证码');
            $('.aside-yanzheng').next().css({color:"red"});
            $('.aside-yanzheng').css({borderColor:"red"});
        }else{
            $('.aside-yanzheng').css({borderColor:"#999"});
            $('.aside-yanzheng').next().css({display:"none"});
        }
    });
    //验证码的更换：
    $('.aside-yanzhengma').click(function () {
        $numStr='';
        for(var $i=0;$i<4;$i++){
            var $num=parseInt(Math.random()*10);
            $numStr += $num;
        }
        $(this).html($numStr);
    });
    //表单验证：
    // 手机号码
    $('.aside-tel').focus(function () {
        $(this).next().css({display:'block',color:"#999"}).html('为了您的账户安全，请填写常用手机号');
    });
    $('.aside-tel').blur(function () {
        var $resTel=/^1(3|4|5|7|8)\d{9}$/;
        var $tel=$('.aside-tel').val();
        if($resTel.test($tel)){
            $(this).css({borderColor:"#999"});
            $(this).next().css({display:'none'});
            $(this).next().next().css({display:'block'});

        }else{
            $(this).css({borderColor:"red"});
            $(this).next().css({color:"#f00"}).html('手机号码格式错误');
            $(this).next().next().css({display:'none'});
        }
    });
    //设定密码：
    var $pd;
    var $pd2;
    $('.aside-pd').focus(function () {
        $(this).next().css({display:'block',color:"#999"}).html('6-24位字符，不能是纯数字，，不能含空格');
    })
    $('.aside-pd').blur(function () {
        $pd=$('.aside-pd').val();
        console.log($pd);
        var $resPd=/^\w{6,24}$/;
        var $resNum=/^\d{6,24}$/;
        if($resPd.test($pd) && $resNum.test($pd) == false){
            $(this).css({borderColor:"#999"});
            $(this).next().css({display:'none'});
            $(this).next().next().css({display:'block'});
        }else if($resNum.test($pd)){
            $(this).css({borderColor:"red"});
            $(this).next().css({color:"#f00"}).html('密码不能为纯数字');
            $(this).next().next().css({display:'none'});
        }else{
            $(this).css({borderColor:"red"});
            $(this).next().css({color:"#f00"}).html('请输入密码');
            $(this).next().next().css({display:'none'});
        }
    });
    //确定密码：
    $('.aside-pd2').focus(function () {
        $(this).next().css({display:'block',color:"#999"}).html('请再次输入密码');
    });
    $('.aside-pd2').blur(function () {
        $pd2=$('.aside-pd2').val();
        if($pd2.length ==0){
            $(this).css({borderColor:"red"});
            $(this).next().css({display:'block',color:"red"}).html('确认密码不能为空');
            $(this).next().next().css({display:'none'});
        }else if($pd2 !=$pd){
            $(this).css({borderColor:"red"});
            $(this).next().css({display:'block',color:"red"}).html('两次密码输入不一致');
            $(this).next().next().css({display:'none'});
        }else{
            $(this).css({borderColor:"#999"});
            $(this).next().css({display:'none'});
            $(this).next().next().css({display:'block'});
        }
    });
    //滑动验证
    $('.move').mousedown(function (event1) {
        var $evt1=event1||window.event;
        var $iOffsetL = $evt1.clientX-this.offsetLeft;
        console.log($iOffsetL);
        $(document).bind('mousemove',function (event2) {
            var $evt2=event2 || window.event;
            var $iPosX = $evt2.clientX - $iOffsetL;
            var $widths=$('.aside-move').width()-30;
            if($iPosX >=0 && $iPosX <=$widths){
                $('.aside-move-color').css({
                    height:30,
                    width:$iPosX,
                    background:'#7ac23c',
                    position:"absolute",
                    opacity: .5
                });
                $('.move').css({left:$iPosX});
            }
            if($iPosX >= $widths){
                $('.aside-move-color').css({opacity: 1,color:"#fff"}).html("验证通过");
                 //注册按钮
				    $('.aside-btn').click(function () {
				        if($('.aside-checkbox').is(':checked') && $('.aside-yanzheng').val() ==$numStr && $('.aside-yanzheng').val()!=''){
				            $.ajax({
				                url:'reg.php',
				                type:'post',
				                data:{"username":$('.aside-tel').val(),"password":$('.aside-pd').val(),"repassword":$('.aside-pd2').val()},
				                dataType:'text',
				                success:function(data){
				                    $("#warm").html(data);
				                    if(data==='注册成功'){
				                        location.href="index.php";
				                    }
				                }
				            });
				        }else {
				            $('.aside-tel').val("");
				            $('.aside-yanzheng').val("");
				            $('.aside-checkbox').removeAttr('checked');
				        }
				    })
    
            }else {
                $('.aside-move-color').html("");
            }
        });
        $(document).bind('mouseup',function () {
            $(document).unbind('mousemove');
        });
        return false;
    });
});