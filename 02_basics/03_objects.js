// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

 // Man: is the name of the object
const Man = {
    name: "ritik",
    fullName: "Ritik Jangra",  
    age: 18,
    location: "Jaipur",
    email: "ritik@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "friday"],
    [mySym]: "mykey1",  //[mySym] denotes Symbol , Correct syntax
}

console.log(Man.email)
console.log(Man["email"]) 
console.log(Man["fullName"])
console.log(Man[mySym])

Man.email = "ritik@microsoft.com"
//Object.freeze(Man)
Man.email = "ritik@microsoft.com"
console.log(Man);

Man.greeting = function(){
    console.log("Hello JS user");
}
//this: is used when same object is reffered
Man.greetingTwo = function(){
    console.log(`Hello JS user, ${this.fullName}`); 
}
console.log(Man.greeting); //[Function(anonymous)]
console.log(Man.greeting());  //ye console print krne k liye frezze comment krna pde ga
console.log(Man.greetingTwo());
