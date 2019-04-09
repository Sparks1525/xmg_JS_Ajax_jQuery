
// 页面加载完毕之后给ID为debug1的超链接绑定事件
window.onload = function () {
    document.getElementById("debug1").onclick = function () {
        var display = document.getElementById("detaill").style.display;
        if(display){
            document.getElementById("detaill").style.display="";
        } else {
            document.getElementById("detaill").style.display="none";
        }
    };
};


// 使用jQuery完成
$(function () {
    $("#debug2").click(function () {
        $("#detaill").toggle(3000);
    });
});