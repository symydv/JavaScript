//two ways to define a number
const score = 40
console.log(score);

const balance = new Number(100)
console.log(balance);

//properties

console.log(balance.toString()); //convert to string
console.log(balance.toFixed(2)); //precision upto two decimals (100.00) //returns a num //round off to 2 values after decimal

const otherNum = 23.8966
console.log(otherNum.toPrecision(3)); //returns a string // 23.9  //round off to first 3 values from left(not after decimal ..remember)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //converts to INdian  notations 10,00,000 (10 lakh)


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//MATHS

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3)); //ROundOff to closest
console.log(Math.ceil(4.2)); //roundoff to upper int
console.log(Math.floor(4.9)); //roundoff to lower int
console.log(Math.min(1,2,3,6,5,4));

console.log(Math.random()); //between 0,1 include 0 and excludes 1.
console.log(Math.random()*10); //between 0,10
//so if you want between 2,12 just add 2 after multiplying with 10 (use brackets)


//so to get a random num between range of numbers 

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)  //(nax - min + 1) is range











