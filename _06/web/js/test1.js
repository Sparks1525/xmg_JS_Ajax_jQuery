


$("#btn1").bind("click",function () {
    alert('btn1');
});

$("#btn2").bind("click",function () {
    alert('btn2');
});

// 取消绑定事件
$(":button").unbind();//把所有按钮上所有事件都取消绑定
$(":button").unbind("click");// 取消所有按钮上的click事件


// 在jQuery中,为绑定事件提供了更简单的方式，其底层和上述相同
// jQuery对象.xxx(fn);
$("#btn1").click(function () {
   // TODO
});

//-------------------------------------

// 文档加载完毕 只能使用一次
window.onload = function () {
    // 文档加载完毕之后,就执行这里
};


// 传统写法 可以使用多次
$(document).ready(function () {
   // TODO
});

// 简写版本 可以使用多次
$(function () {
    // TODO
});