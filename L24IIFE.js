// Immediately Invoked Function Expressions (IIFE)
// (function name(){})();
//kai baar global scope ke pollution se function execution me problem ho sakti hai isliye ye method use karte hai

(function chai(name){
    console.log(`DB CONNECTED ${name}`);
})("sym");  // (to end the function) semicolan lagana na bhule aage problem ho sakti hai 

//This Expression will immediatly invoke our function, so no need to call externaly


//Arrow Function can also be Immediately Invoked .
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("shyam");