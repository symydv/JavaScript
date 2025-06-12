// 1. Object literal..
const user = {
    username: "shyam",
    loginCount: 8,
    signedIn: true,
    getUserDetail: function(){
        console.log("Got user details from database");
        console.log(`username: ${this.username}`); //yaha "this" use karna pada kyu ki use pata nahi ki kis context ki baat kar rahe
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetail());
console.log(this); //Global context me "this" ek empty object hai halaki browser me global context me "this" windows hota hai


// 2. Contructor function. 
// Before ES6 classes, JavaScript used constructor functions to create reusable object templates. They're still valid and widely understood — especially in older or vanilla JavaScript code.

const date = new Date();  //this "new" used is a constructor function.


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this; //ye return karne ki jarurat nahi hai code fir bhi kaam karega
}

const userOne = new User("sym", 12, true);
const userTwo = new User("Chai", 11, false); //if we dont use "new" then second assignment will overwright the first one, remove new and try yourself. So what "new" does is it creates new instance every time a function is called.
console.log(userOne);
console.log(userOne.constructor); // prints -> "[Function: User]"
console.log(userOne.username);
