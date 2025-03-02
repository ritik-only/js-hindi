// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ritik",
    fullName: "Ritik Jangra",  
    age: 18,
    location: "Jaipur",
    email: "ritik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "friday"],
    [mySym]: "mykey1",
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullName"])
console.log(JsUser[mySym])

JsUser.email = "ritik@microsoft.com"
//Object.freeze(JsUser)
JsUser.email = "ritik@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
//this: is used when same object is reffered
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.fullName}`); 
}

console.log(JsUser.greeting());  //ye conssole print krne k liye frezze comment krna pde ga
console.log(JsUser.greetingTwo());
