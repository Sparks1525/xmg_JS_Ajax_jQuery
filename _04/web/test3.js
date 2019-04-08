

function checkUsername() {

    // 输入得账号名称
    var username = document.getElementById("username").value;

    console.debug('username');
    console.debug(username);

    //1:创建Ajax对象
    var ajax = createAjax();
    //2:创建http请求(请求方式,请求的URL)
    ajax.open("get","/ajax/check?username="+username,true);

    //4:监听readystate改变事件
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4 && ajax.status == 200) {

            // 把服务端的响应数据，显示在界面中
            document.getElementById("msg").innerHTML = ajax.responseText;
        }
    };

    //3:发送Ajax请求
    ajax.send();

}


function createAjax() {
    var ajax = null;

    try{
        ajax = new XMLHttpRequest();
    } catch (e) {
        ajax = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return ajax;
}