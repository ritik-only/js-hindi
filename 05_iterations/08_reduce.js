//reduce

const myNums = [1,2,3,4]
 
const Total = myNums.reduce(function(acc,currval){   //acc = accurate
    console.log(`the ${acc} and ${currval}`);     //currval = current value
    return acc+ currval
    
},0)  // here 0 is accurate value 

const tell = myNums.reduce((acc,currval) => acc +currval,7)
console.log(Total);
console.log(tell);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "  py course",
        price: 999
    },
    {
        itemName: "  mobile dev course",
        price: 5999
    },
    {
        itemName: "  data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.itemName, 0)

console.log(priceToPay);