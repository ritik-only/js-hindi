const user = {
    username: "ritik",
    price: 1099,

    welcomeMessage: function() {
    //     console.log(`${this.username} , welcome to website`);
    //    console.log(this);
    } 

}

//user.welcomeMessage()
//user.username = "samay"
//user.welcomeMessage()

//console.log(this);



// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);          //console.log(this); ==> # {}
// }                                        // console.log(this.username); ==> undefined 

// chai()

const addTwo = (num1, num2) => {           // if used {} then must have to write return
    return num1 + num2
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   // if use () then not need to write return

// const addTwo = (num1, num2) => ({username: "hitesh"}) //want to return object then use ({}) 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()