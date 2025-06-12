
// Mainly 2 types of data types 
// 1.Primitive: 
//    7 types: String, Number, Boolean, null, undefines, symbol, BigInt

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId); // it will give false, because symbole() ka kaam hi yahi hai, even if you give same input inside symbol it will give it some different value

const bigNummber = 2335987465259n  //bigInt

// 2.Reference(non premitive) : Array, Objects, Function
//non premitives ka type check karoge to object show karega sirf function ka type function object hota hai

const heroes = ["saktiman", "naagraj", "doga"] //array

let myObj = {
    name: "shyam",
    age: 19
} //object

const myFunction = function(){
    console.log("hello World")
}

myFunction()




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory in javaScript

// Stack (Primitive), DSA ki tarah hi ek ke upar ek store hota jata hai 
// Heap (Non-Primitive)

let myYoutube = "Sym"
let yourYoutube = myYoutube

yourYoutube = "ydv" //yaha hamne change kar diya youryoutube ko but this will not affect the value of myYoutube because in stack structure youryoutube only gets a copy of myyoutube.

console.log(myYoutube);
console.log(yourYoutube);



//but same cant be said for heap as in below case userOne and userTwo takes referace from same heap object so if we change one the value of second also changes
let userOne= {
    email : "user1@gamil.com",
    upi : "user1@ybl"
}

let userTwo= userOne

userTwo.email = "my@gamil.com"

console.log(userOne);
console.log(userTwo);








