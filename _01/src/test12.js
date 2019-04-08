var arr1 = new Array();
arr1[0] = "A";
arr1[1] = "B";
arr1[2] = "C";
arr1[3] = "D";
arr1[10] = "X";
console.debug(arr1);

var arr2 = new Array("A", "B", "C", "D");
console.debug(arr2);

var arr3 = new Array(5);
console.debug(arr3);

var arr4 = ["A", "B", "C", "D"];
console.debug(arr4)


console.debug("----------------------------------------")

var arr = ["A", "B", "C", "D"];

for (var i = 0; i < arr.length; i++) {
    console.debug(arr[i]);
}

for (var index in arr) {
    console.debug(arr[index]);
}

console.debug("----------------------------------------");

arr.splice(2, 1);
console.debug(arr);

arr.splice(2, 0, "C");
console.debug(arr);

arr.splice(2, 1, "ls");
console.debug(arr);
