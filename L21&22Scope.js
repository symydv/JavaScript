//Scope is place inside curly braces {}  of functions or ifelse statements or loops..

let x = 1 //this is a global scope .

if(true){
    let a = 10
    const b = 20
    var c =30
}

// console.log(a);
// console.log(b);
// console.log(c);
//above print statements will not work as a,b and c are local variables defined inside scope of if else statement
//but var and empty defination can cause problems as they are not influenced by scope and can change thats why we avoid such assignments

function one(){
    const username = "shyam"

    function two(){
        const website = ".com"
        console.log(username); //this will run as function two is nested inside function one so we can use variables saved inside function one into two
        
    }

    two()

    // console.log(website); //this will show error as it is not inside its scope which is function two
}

one()

//Itna samajh lo ki in nested function child function can access the variables of parent function but reverse is not true.
//same for ifelse statements


//++++++++++++++++++++++++++++INTRESTING++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//we can also define functions as expresions
//when we define a function like this we can not use the function before declaration
const addTwo = function(num){
    return num + 2
}

addTwo()