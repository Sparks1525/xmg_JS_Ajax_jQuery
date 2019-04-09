


var ret1 = encodeURI("https://baidu.com?keyworkd=乔峰");
var ret2 = encodeURIComponent("https://baidu.com?keyworkd=乔峰");
console.debug(ret1);
console.debug(ret2);

var ret3 = decodeURI("https://baidu.com?keyworkd=%E4%B9%94%E5%B3%B0");
var ret4 = decodeURIComponent("https%3A%2F%2Fbaidu.com%3Fkeyworkd%3D%E4%B9%94%E5%B3%B0");
console.debug(ret3);
console.debug(ret4);

console.debug("--------------------------------------------");

console.debug(isFinite(1 / 0));
console.debug(isFinite(-1 / 0));
console.debug(isFinite(1 / 1));

console.debug("--------------------------------------------");

console.debug(parseInt("123"));
console.debug(parseInt("123.456"));
console.debug(parseInt("123S"));
console.debug(parseInt("1A23"));

console.debug(parseFloat("123"));
console.debug(parseFloat("123.456"));
console.debug(parseFloat("123S"));
console.debug(parseFloat("1A23"));

console.debug("--------------------------------------------");

var str = "console.debug('eval test1')";
eval(str);