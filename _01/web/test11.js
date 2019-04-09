function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person("zs", 18);

for (var attributeName in person1) {
    console.debug("-----");
    console.debug(attributeName, person1[attributeName]);
    console.debug(attributeName);
    console.debug(typeof attributeName);
}


console.debug(person1['name']);

console.debug("----------------------------------------------------------");

var obj = new Object();
obj.name = "Will";
obj.age = 17;
console.debug(obj);
console.debug(obj.constructor);
console.debug(obj.hasOwnProperty("age"));


console.debug("----------------------------------------------------------");

var str1 = new String("will");
var str2 = new String("will");

console.debug(str1 == str2);
console.debug(str1.valueOf() == str2.valueOf());

console.debug("ABCDE".length);
console.debug("ABCDEABC".charAt(0));
console.debug("ABCDEABC".charCodeAt(0));

var ch = String.fromCharCode(65);
console.debug(ch);

console.debug("----------------------------------------------------------");

console.debug(Math.random());
ch = String.fromCharCode(parseInt(Math.random() * 26) + 65);
console.debug(ch);

console.debug("----------------------------------------------------------");

var d = new Date();
console.debug(d);
var mon = d.getMonth() + 1 >= 10 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
var time = d.getFullYear() + "-" + mon + "-" + d.getDate() + " ";
console.debug(time);


