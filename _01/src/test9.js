function User() {

}

var u = new User();

u.name = 'zs';
u.age = 17;
u.sayHi = function () {
    console.debug("hiiiiii")
}

console.debug(u);
u.sayHi();




function Person(n, a) {
    this.name = n;
    this.age = a;
    this.doWork = function () {
        console.debug("doWork");
    }
}

var p = new Person("xm", 19);
console.debug(p);
p.doWork();