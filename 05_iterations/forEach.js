//foreach

const coding = ["js", "ruby", "java", "python", "cpp"]
// can write anything at place of val & item 
coding.forEach( function (val){   // here applied loop on line 1
    // console.log(val);
} )

coding.forEach( (item) => {   // applied loop on arrow function 
    // console.log(item);
} )

function printMe(items){  //here applied function on line 1
    // console.log(items);
}
// coding.forEach(printMe)  //here printMe func is called declared  
//                         //       in line number 11

coding.forEach( (itemss, index, arr)=> {
    // console.log(itemss, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (iteme) => {
    
    // console.log(iteme.languageName);
} )