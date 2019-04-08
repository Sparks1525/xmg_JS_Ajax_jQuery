
// 获取服务端时间
function getServerTime() {
    //1:创建Ajax对象
    var ajax = new XMLHttpRequest();
    //2:创建一个新的http请求(请求方式,请求地址,是否使用异步方式)
    ajax.open("get","/ajax/getServerTime",true);
    //4:监听readystate改变时间
    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4){
            // 获取服务端的响应
            var result = ajax.responseText;
            document.getElementById("time").innerHTML = result;
        }
    };
    //3:发送Ajax请求
    ajax.send();
}

