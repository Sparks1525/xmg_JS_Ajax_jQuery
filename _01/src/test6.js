



function foo1(value) {
    console.debug(value);
}


console.debug("foo1(\"foo1\")");
foo1("fool1");




function foo2(value) {
    console.debug(value);
}

var foo2 = foo2("foo2");
console.debug("var foo2 = foo2(\"foo2\")");
console.debug(foo2);


function foo3(value) {
    return value;
}


var foo3 = foo3("foo3");
console.debug("var foo3 = foo3(\"foo3\")");
console.debug(foo3);


var foo4 = function (a,b) {return a + b;};
console.debug("var foo4 = function (a,b) {return a + b;} , foo4(1,2)");
console.debug(foo4(1,2));

var foo5 = foo4;
console.debug("var foo5 = foo4 , foo5(3,4)");
console.debug(foo5(3,4));