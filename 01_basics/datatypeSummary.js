// primitive datatype

// 1. string
// 2. number
// 3. Boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. BigInt

const name = "ritik"
const score = 123
const isLoggedin = true
const outsideTemp = null
let number;

const id = Symbol("12")
const anotherId = Symbol("12")

console.log(id == anotherId);

const Bignumber = 2345678n

// Reference datatype (non primitive)

// 1.array
// 2.objects
// 3.functions

const heros = ["shelby", "hesinberg","wick"]

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);    //symbol --> symbol
console.log(typeof number);       //undefined --> undefined
console.log(typeof outsideTemp);  //null   --> object
console.log(typeof isLoggedin);   //boolean --> boolean
console.log(typeof score);        //number --> number
console.log(typeof name);         // string --> string


// https://262.ecma-international.org/5.1/#sec-11.4.3

//******************************************** */

let myName="ch_ritik"

let anothername = myName
anothername = "riitiik"

console.log(myName);
console.log(anothername);

let userOne={
    email:"user@mail.com",
    upi:"user@paytm"
}

let userTwo = userOne

userTwo.email = "ritik@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);

