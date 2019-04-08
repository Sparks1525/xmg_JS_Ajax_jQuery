
// 获取服务端时间
function getServerTime() {
    //1:创建Ajax对象
    var ajax = createAjax();
    //2:创建一个新的http请求(请求方式,请求地址,是否使用异步方式)
    ajax.open("get","/ajax/getServerTime?" + new Date().getTime(),true);
    //4:监听readystate改变事件
    ajax.onreadystatechange = function () {
        //reayState = 4:表示ajax接受完响应数据
        // status = 200:表示http响应OK
        if(ajax.readyState == 4 && ajax.status == 200){
            // 获取服务端的响应
            var result = ajax.responseText;
            document.getElementById("time").innerHTML = result;
        }
    };
    //3:发送Ajax请求
    ajax.send();
}

//创建Ajax对象
function createAjax() {
    var ajax = null;
    try{
        // W3C浏览器和IE7及其以上版本
        ajax = new XMLHttpRequest();
    } catch (e) {
        //IE6
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return ajax;
}

