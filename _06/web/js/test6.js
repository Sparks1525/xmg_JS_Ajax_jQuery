$(function () {
    // 用户添加
    $("#addUser").click(function () {
        var username = $("#username").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var id = new Date().getTime();
        var tr = "<tr id=" + id + "><td>" + username + "</td><td>" + email + "</td><td>" + tel
            + "</td><td><a href='javascript:deleteUser(" + id + ");'>删除</a></td></tr>";
        $(tr).appendTo($("#userTbody"));
    });

    // 删除所有
    $("#deleteAll").click(function () {
        $("#userTbody").text("");
    });

});


// 删除用户
function deleteUser(id) {
    $("#" + id).remove();
}


