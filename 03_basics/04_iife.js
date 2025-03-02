// Immediately Invoked Function Expressions (IIFE)
// IIFE : function which is executed immediately and global scope ke pollution ko hatane ke   liye iffe ko use kiya


(function chai(){                 // named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                      

//this last braces work as function call and we can also pass arguments into these

( (name) => {                      //in function braces we can input parameters too
       // simple iife           
    console.log(`DB CONNECTED BY ${name}`);
} )('ritik')                                 