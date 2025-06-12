//dates

let myDate = new Date()  //defining //It is an object type
console.log(typeof myDate)
console.log(myDate);
console.log(myDate.toString()); //more readable
console.log(myDate.toDateString()); //only date in string formate
console.log(myDate.toISOString()); //in ISO formate
console.log(myDate.toJSON()); //Return JSON 
console.log(myDate.toLocaleDateString()); //only date 26/5/2025
console.log(myDate.toLocaleString()); //date and time
console.log(myDate.toLocaleTimeString()); //only time
console.log(myDate.toTimeString()); //time with Zone name


//declaring our own date..
let myCreatedDate = new Date(2023, 0, 23) //months start from 0
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3) //we can declare more precisely
let myCreatedDate3 = new Date("2023-01-14") //here month start from 1
console.log(myCreatedDate.toDateString()); // monday jan 23 2023
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am
console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp); //returns milliseconds from the date js created to now..
console.log(myCreatedDate.getTime()) // get miliseconds of our created date
console.log(Math.round(Date.now()/1000));//get soconds


let newDate = new Date()
console.log(newDate.getMonth() + 1); //get the month
console.log(newDate.getDay()); //get the day 1 if monday and so on

//we can costomize .toLocaleString

let day = newDate.toLocaleString('default',{
    weekday : "long"
})

console.log(day);



