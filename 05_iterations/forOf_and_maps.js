// forOf used for array

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//with forOf loop object can't iterate 

// Maps

const heyy = new Map()
heyy.set('IN', "India")
heyy.set('USA', "United States of America")
heyy.set('Fr', "France")
heyy.set('IN', "India")


console.log(heyy);

for (const [key, value] of heyy) {
    console.log(key, ':-', value);
}
