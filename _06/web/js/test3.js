

$(function () {
   // 给登陆按钮绑定单击事件-->发送Ajax请求

    $("#loginBtn").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        $.post("/ajax/login",
            {
                username:username,
                password:password
            }, function (data) {

                if(data.success){
                    // 登陆成功:条状到welcome.html页面
                    window.location.href = "index.jsp";
                } else {
                    // 登陆失败:不跳转,提示错误信息
                    $("#msg").text(data.errorMsg).css("color","red");
                }

            }, "json");
    });
});