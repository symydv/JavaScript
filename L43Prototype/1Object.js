//In JavaScript, prototypes are the foundation of inheritance and object behavior sharing.

// Every JavaScript object has a hidden internal link to another object called its prototype.

// This prototype object can contain shared properties and methods that other objects can access.

function multiBy5(num){
    return num*5;
}

multiBy5.power = 2

console.log(multiBy5(5));//25
console.log(multiBy5.power);//2 
console.log(multiBy5.prototype); //{}

//we can see that multiBy5.power = 2 works like it is a object which proves that javaScript me har ek chij end of the day ek object hi hai (suported by multiBy5.prototype returns an empty object). Object ka khud ka prototype null hota hai.
//so we can assign a function with key, value pair just like an object


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){   //prototype can be used to inject new methods in main function.
    this.score++ ;// yaha hamne "this" use kiya taki hame pata rahe kiska score badhana hai (current context ka)
}

createUser.prototype.printMe = function(){
    console.log(this.score);
    
}

const chai = new createUser("chai", 25); 
//IMPORTANT NOTE : "new" keyword ka ek aur kaam ye hai ki ye naye bane instances jaise ki chai ko  inform karta hai additional methods ke baare me jo ki hamne prototype ki madad se inject kiye the. if we dont use "new" while assigning another variable it will not work with exclusively added methods using prototype. (ek baar "new" hata ke try kar lena)
const tea = new createUser("tea", 250);


console.log(chai);
chai.increment() //this will increase the score of chai without confusion as we used "this" keyword above in the code.
chai.printMe()
console.log(chai);
console.log(tea);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
