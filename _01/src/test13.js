Array.prototype.set = function (index, newEle) {
    this.splice(index, 1, newEle);
};

var arr1 = ["A", "B", "C", "D"];
console.debug(arr1);
arr1.set(1,"2B");

console.debug(arr1);
var arr2 = [1, 2, 3, 4];
console.debug(arr2);

arr2.set(0,99);
console.debug(arr2);
