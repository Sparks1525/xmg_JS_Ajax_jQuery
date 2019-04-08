var age1 = 17;
console.debug("age1:" + age1  + ",age1 instanceof Number");
console.debug(age1 instanceof Number);


var age2 = new Number(18);
console.debug("age2:" + age2  + ",age2 instanceof Number");
console.debug(age2 instanceof Number);


var str1 = 'str1';
console.debug("str1:" + str1  + ",str1 instanceof String");
console.debug(str1 instanceof String);


var str2 = new String('str2');
console.debug("str2:" + str2 + ",str2 instanceof String");
console.debug(str2 instanceof String);


var bl1 = true;
console.debug("bl1:" + bl1 + ",bl1 instanceof Boolean");
console.debug( bl1 instanceof Boolean);


var bl2 = new Boolean(567);
console.debug("bl2:" + bl2 + ",bl2 instanceof Boolean");
console.debug(bl2 instanceof Boolean);

var bl3 = new Boolean(NaN);
console.debug("bl3:" + bl3 + ",bl3 instanceof Boolean");
console.debug(bl3 instanceof Boolean);

var bl4 = new Boolean(0);
console.debug("bl4:" + bl4 + ",bl4 instanceof Boolean");
console.debug(bl4 instanceof Boolean);