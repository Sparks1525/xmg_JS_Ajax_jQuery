
$(function () {
    // 给username绑定失去焦点事件
    $("#username").blur(function () {
        // username控件,失去焦点之后,就发送请求
        $.get("/ajax/check", {username: $(this).val()}, function (data) {
            if(data.success){
                $("#msg").text(data.msg).css("color", "blue");
            } else {
                $("#msg").text(data.msg).css("color", "red");
            }
        },"json"); // "json" 响应数据格式
    });
});