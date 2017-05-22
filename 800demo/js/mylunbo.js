
/**
 * Created by sufei on 2017/3/9.
 */
$.fn.mylunbo=function () {
    //添加hover事件
    var iTimer = null;
    var headerBtn = this.find('.rotate-btn');
    this.hover(function () {
        clearInterval(iTimer);
        headerBtn.css({display:'block'});
    },function () {
        headerBtn.css({display:'none'});
        autoMove();
    });
    // 给左右按钮添加click事件
    var
        oLeftBtn  = this.find('.rotate-btn-left'),
        oRightBtn = this.find('.rotate-btn-right'),
        iIndex	  = 0;//记录页码

    oLeftBtn.bind('click', function () {
        iIndex--;
        move();
    });

    oRightBtn.bind('click', function () {
        iIndex++;
        move();
    });
    var
        aBtnListA  = this.find('.rotate-a a'),
        aImgListLi = this.find('.rotate-view li');
    aBtnListA.bind('mouseenter', function () {
        iIndex = $(this).index();
        move();
    });
    $('#search-txt').focus(function () {
        clearInterval(iTimer);
    });
    $('#search-txt').blur(function () {
        iTimer = setInterval(function () {
            // iIndex++;
            // move();
            //模拟点击右按钮
            oRightBtn.trigger('click');
        }, 3000);
    });
    autoMove();
    // 自动运行函数
    function autoMove() {
        iTimer = setInterval(function () {
            // iIndex++;
            // move();
            //模拟点击右按钮
            oRightBtn.trigger('click');
        }, 2000);
    }

    // 轮播图运动过程函数
    function move() {
        // 左边界判断
        if(iIndex < 0) {
            iIndex = aBtnListA.size() - 1;
        }
        // 右边界判断
        if(iIndex >= aBtnListA.size()) {
            iIndex = 0;
        }
        // LI做动画
        aImgListLi.eq(iIndex).stop().animate({opacity:1}).siblings().stop().animate({opacity:0});
        aBtnListA.removeClass('ared').eq(iIndex).addClass('ared');
    }
};