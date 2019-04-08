


function ajaxLoin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var ajax = createAjax();

    ajax.open("post", "/ajax/login",true);

    ajax.onreadystatechange = function () {
        if(ajax.readyState == 4 && ajax.status == 200){
            console.debug("登录成功");
        }
    };

    /**
     * 如果用POST请求向服务器发送数据，需要将"Content-Type"的首部设置为"application/x-www-form-urlencoded"
     * 它会告知服务器正在发送数据，并且数据已经符合URL编码了。因为后台它使用URL进行解码
     */
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var data = "username=" + username + "&password=" +password;

    console.debug("data");
    console.debug(data);
    ajax.send(data);
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