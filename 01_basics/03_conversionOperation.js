let number = 1;

console.log(number);
console.log(typeof number);

let num = String(number);
console.log(num);
console.log(typeof num);

let heys = Boolean(number);
console.log(heys);

let numbers = "44";

console.log(numbers);
console.log(typeof numbers);

let nums = Number(numbers);
console.log(nums);
console.log(typeof nums);

let some = "null";

console.log(some);
console.log(typeof some);

let somes = null;

console.log(somes);
console.log(typeof somes);

let somee = "null";

console.log(somee);
console.log(typeof somee);

let same = Number(somee);
console.log(same); // if string(null) -> (to) Number ==> NaN 
console.log(typeof same);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let hey = 23;

console.log(hey);
console.log(typeof hey);

let heyy = String(hey);
console.log(typeof heyy);

let stringhi = String(hey);
console.log(stringhi);

/*** ******** OPERATIONS ******** ***/

console.log(3 + 3);
console.log(3 - 3);
console.log(3 * 3);
console.log(3 / 3);
console.log(3 % 3);
console.log(3 ** 3);
console.log(3 ^ 3); // Bitwise XOR, not exponentiation

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 3);
console.log(1 + 2 + "3");

console.log(true);
console.log(+true);
console.log(-true);

console.log(+"");

let str1 = "ohh";
let str2 = " yehh";
let str3 = str1 + str2;
console.log(str3);

var a = 1;
a = ++a;
console.log(a);

var b = a;
b = ++b;
console.log(b);
