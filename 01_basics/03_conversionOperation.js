let score = 30;

console.log(typeof score);

let scoreInString = "33";
console.log(typeof scoreInString);

let scoreInNumber = Number(scoreInString);
console.log(typeof scoreInNumber);

scoreInString = "123sss"; // invalid number
scoreInNumber = Number(scoreInString);
console.log(scoreInNumber); // Nan
console.log(typeof scoreInNumber);

scoreInNumber = Number(null)
console.log(scoreInNumber)
console.log(typeof scoreInNumber)


// Boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn); // true

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn); // false

// operations

console.log("****** Operation ********")

let value = 20
let negValue = -value

console.log(negValue);

// supports arihmetic oprations 
// 2 + 2
// 2-2
// 2*2
// 2/2
// 2 **2 =>  2^2
// 2%2


// string concats

let str1 = "Suhel"
let str2 = "Zende"

console.log(str1 + " " + str2);

console.log( "1" + 2) // 12
console.log(1 + "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 122

console.log(true) // true
console.log(+true) // 1
console.log(+"") // 0 = false converted to 0 number


// increatemt
// let a = 1
// console.log(a++)
// console.log(++a)
// ref : https://tc39.es/ecma262/#sec-abstract-operations