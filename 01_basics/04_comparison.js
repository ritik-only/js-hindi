console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2!=1);
console.log(2 == 2);
console.log(2 === 2);



console.log("2" > 1);
console.log("02"<= 1);
console.log("02">= 1);



console.log(null <= 0);
console.log(null >= 0);
console.log(null > 0);
console.log(null > 0);
console.log(null == 0);



console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log(undefined <= 0);


// the reason is that an equality check == and comparisons < > >= <= works differently. 

// comparisons converts null to a number, treating is as zero.

// that is why null>=0 is true . and null>0 is false .

// avoid these type of comparison opertor



//  === 

console.log("2" === 1);
