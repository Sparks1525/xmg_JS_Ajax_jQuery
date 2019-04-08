// 方式1 直接在元素上设置onXxx属性.(xxx表示事件名称).
function sayHello(current) {
    alert(current);
    alert("p标签1");
}

// 方式2 在元素对象上直接设置onXxx事件属性,再给事件属性设置响应的函数
window.onload = function () {
    var pEle = document.getElementById("p2");

    pEle.onclick = function () {
        alert(this);
        alert("p标签2");
    };

};


// 方式3 使用方法来完成对元素的监听

function addListener(ele, evenType, callback) {
    if (ele.attachEvent) {
        // IE
        ele.attachEvent("on" + evenType, callback);
    } else {
        // 非IE
        ele.addEventListener(evenType, callback);
    }
}


window.onload = function () {
    var divEle = document.getElementById("div1");
    addListener(divEle, "click", function () {
        alert("div1");
    });

};