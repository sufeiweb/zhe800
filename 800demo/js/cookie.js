/**
 * Created by sufei on 2017/3/23.
 */
//以下为cookie插件代码
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


/*
 添加商品及数量到购物车cookie中,返回当前商品在cookie中的总数
 */
function AddToShoppingCar(id, num) {
    var _num = 1;
    if (num != undefined)
        _num = num;
    var totalNum = _num; //总数默认为传入参数
    var cookieSet = { expires: 7, path: '/' }; //设置cookie路径的
//  $.cookie(cookieProductID, null, cookieSet);//清除Cookie
    var jsonStr = "[{'ProductID':'" + id + "','Num':'" + _num + "'}]"; //构造json字符串,id是商品id  num是这个商品的数量
    if ($.cookie(cookieProductID) == null) {
        $.cookie(cookieProductID, jsonStr, cookieSet); //如果没有这个cookie就设置他
    }
    else {
        var jsonObj = eval('(' + $.cookie(cookieProductID) + ')'); //如果有，把json字符串转换成对象
        var findProduct = false;//是否找到产品ID,找到则为TRUE,否则为FALSH
        for (var obj in jsonObj) {
            if (jsonObj[obj].ProductID == id) {
                jsonObj[obj].Num = Number(jsonObj[obj].Num) + _num;
                totalNum = jsonObj[obj].Num;
                findProduct = true;
                break;
            }
        }
        if (findProduct == false) { //没找到,则添加
            jsonObj[jsonObj.length] = new Object();
            jsonObj[jsonObj.length - 1].ProductID = id;
            jsonObj[jsonObj.length - 1].Num = num;
        }
        $.cookie(cookieProductID, JSON.stringify(jsonObj), cookieSet); //写入coockie  JSON需要json2.js支持
    }
    return totalNum;
    //  alert($.cookie(cookieProductID));
}
