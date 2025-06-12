
//Object literals

const mysym = Symbol("key1")
const JsUser = {
    name: "Shyam", //the key name is also tracked as a string so you can write it as "name"
    age: 19,
    [mysym] : "myKey1", // if we dont use squared bracket it will be identified as a normal string key not a Symbol
    location: "India",
    email: "sym@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "saturday"]
}


//two methods to get data out .
console.log(JsUser.email) //we will mostly use this notation but sometime we have to use other notatins
console.log(JsUser["email"]) //we can also write spaced keys eg: "full name", so this notation is helpfull in such special cases
console.log(JsUser[mysym]);

//we can easyly just overwrite the values 
JsUser["email"] = "SHYAM@gmail.ccc" //this will change the email key's value

console.log(JsUser);

//we can freeze our object if we want no other changes in it.
// Object.freeze(JsUser)
// JsUser.email = "sys@sy.com" //now it will not change the value of email as we already freezed JsUser
// console.log(JsUser);


//we can add functions to our object

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);

//##############################################################################

// const tinderUser = new Object() //singleton object

const tinderUser = {}  //non singleton object

tinderUser.id = "124abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname: {
        userFullName: {
            firstName: "sam",
            LastName: "manek"
        }
    }
}

console.log(regularUser.fullname.userFullName.LastName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3= {obj1, obj2}
const obj4 = Object.assign( obj1, obj2)
const obj5 = {...obj1, ...obj2} // spread method can be used here also
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(Object.keys(tinderUser)); //return an array with all the keys of Object
console.log(Object.values(tinderUser)); //return an array with all the values of Object
console.log(Object.entries(tinderUser)); //return an array with more arrays of key value pairs

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //return true if there is a key named isLoggedIn else return false

//#################################################################################################################################################

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructure: "hitesh"
}

// to get courseInstructure value we use course.courseInstructure, but if we need it multiple times it can get lengthy so we use another method

const {courseInstructure : Instructure} = course //we can make course.courseInstructure as separate variable named Instructure

console.log(Instructure); //and directly use it


//#################################################################################################################################################

//JSON and API
