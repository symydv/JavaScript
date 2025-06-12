// let myName = "shyam    "

// console.log(myName.length) //this will give us the total length including spaces, not the true length of only string part
// so what if we want to create our own method like ".trueLength"



let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

//hamne Object ke upar ek method define kiya to sabhi chijo pe ise use kar sakte hai.
Object.prototype.shyam = function(){
    console.log(`shyam is present in all objects`);
    
}


// but agar hum array me koi method  define karenge to ise sirf arrays ke liye use kar sakte hai.
Array.prototype.shyamHii = function(){
    console.log(`shyam is present in all Arrays`);
    
}

heroPower.shyam(); //we can use this method on heroPower because it is a Object and we defined .shyam() for all Objects
myHeros.shyam(); //reason we can use .shyam() on myHeros (an array) because all type of things in javascript has prototype Object.

myHeros.shyamHii() 
// heroPower.shyamHii()  //this will cause error as we have difined this method for arrays not object.







//Inheritance


// 1. Old syntax (using __proto__)
const Teacher = {
    makeVid: true
}
const supportTeacher = {
    issAvailable: false
}
const TASupport = {
    fullTime: true,
    __proto__ : supportTeacher  //this is one way to inherit supportTeacher properties inside TASupport
}

// second method to inherit

// Teacher.__proto__ = supportTeacher ;  //here teacher inherited all properties of supportTeacher

// console.log(Teacher.issAvailable); //now we can access issAvailable for Teacher, although it is propertie of suportTeacher
// // console.log();
// // console.log();
// console.log(TASupport.issAvailable);




// 2. Modern syntax  (behind the scene __proto__ hi chal raha hai isme bhi)

Object.setPrototypeOf(supportTeacher, Teacher) // here we made supportTeacher to inherit all the properties of Teacher.
console.log(supportTeacher.makeVid);



// NOw we are going to solve our original problem .

let anotherUsename = "ChaiAurCode  ";
String.prototype.trueLength = function(){
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsename.trueLength()
