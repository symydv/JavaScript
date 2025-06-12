
// console.log(Math.PI);
// Math.PI = 5; //It will not change even if we overwrite it as it is a constant.
// console.log(Math.PI);

//but why ?????
//Lets check.
const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //Whith the help of "getOwnPropertyDescriptor" function we can check property descriptions of our functions

console.log(Descriptor);

// Descriptor -> {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

//As we can see Math.PI is unWritable inbuilt.

const Chai = {
    name : "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nahi bni");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));  

//we can edit properties of our own objects using "Object.defineProperty()"

Object.defineProperty(Chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Chai, "name")); 


for(let [key, value] of Object.entries(Chai)){
    if (typeof value!== 'function') {   //kyuki agar function aagaya kisi object me to galat print hoga loop me aacha nahi dikhega
        console.log(key, value);
    }
}  

//price 250
//isAvailable true

//We can see that "name" is not looped through in Chai as we turned of its enumerable property

