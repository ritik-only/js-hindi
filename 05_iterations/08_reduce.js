const myNums = [1,2,3,4]
 
// const Total = myNums.reduce(function(acc,currval){   //acc = accurate
//     console.log(`the ${acc} and ${currval}`);     //currval = current value
//     return acc+ currval
    
// },0)  // here 0 is accurate value 
const tell = myNums.reduce((acc,currval) => acc +currval,7)
console.log(tell);
