var msg1 = "全局变量";

function show1() {
    msg1 = "局部变量";
}

show1();
console.debug(msg1);//局部变量


var msg2 = "全局变量";

function show2() {
    var msg2;
    msg2 = "局部变量";
}

show2();
console.debug(msg2);//全局变量
