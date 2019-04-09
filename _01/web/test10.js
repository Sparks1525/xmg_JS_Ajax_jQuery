

function changeValue(x) {
    x = 5;
}
var x = 3;
changeValue(x);
console.debug(x);


function Person(name, age) {
    this.age = age;
    this.name = name;
    this.say = sayFunc;
}

function sayFunc() {
    console.debug(this.name + ":" + this.age);
}

function  change(p1) {
    p1.name = "ls";
}

var peson1 = new Person("zs", 18);
peson1.say();
change(peson1);
peson1.say();

