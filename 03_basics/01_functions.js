
function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
   
//     console.log(number1 + number2);
//     return
// }
// addTwoNumbers(32,68)


function addTwoNumbers(number1, number2){

    let result = number1 + number2
    //console.log("ritik");
    return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);


function loginUserMessage(username = "dbvu"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ritik"))
// console.log(loginUserMessage("riitik"))


function loginUserMessage(username = "myself"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "dada",
    prices: 200
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "shashi",
    price: 500
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));