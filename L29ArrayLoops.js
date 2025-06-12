// ++++++++++++++++++++++++++++++++ for of ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world"

for(const char of greetings){
    console.log(char);
    
}


const map = new Map()   //Map holds key value pairs which are all unique
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Fr", "France")
map.set("IN", "India")

console.log(map);


for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//we can not do same for objects
//Instead
//++++++++++++++++++++++++++++++++++++++++++++++++++ for in ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by app"
}

for (const key in myObj) { //will give only keys
    console.log(`${key} is shortcut for ${myObj[key]}`);
    
}


const programming = ["js", "cpp", "py", "java"]
for(const key in programming){ //it will hold indexs which is actually keys of array
    console.log(key + ` :- ${programming[key]}`);
    
}


//++++++++IMPORTANT++++++++++++++++++++++++++++++++++++++++++ for each ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const coding = ["js", "cpp", "py", "java", "ruby"]

coding.forEach( function (item) {
    console.log(item);
    
})

//can also write as

coding.forEach( (item) => {console.log(item);})


//or
function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe) //just have to take referance, dont execute it by using ()


//we can also have access of mare things in it

coding.forEach((item, index, arr) => {console.log(item, index, arr);
})