//CONVERSION TO NUMBER

let score = "33"
let wrongScore = "33abc"
console.log(typeof score);

let valueInNumber = Number(score)
let WrongScoreInNumbers = Number(wrongScore)
console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(WrongScoreInNumbers);
console.log(typeof WrongScoreInNumbers);

// for different values of start Number function will give you different response 
//for eg
// "33" => 33
//"33abc" => NaN
// true => 1; false => 0


//CONVERSION TO BOOLEAN

let isLoggedIn = 1

let BooleanisLoggedIn = Boolean(isLoggedIn)

console.log(BooleanisLoggedIn);
// 1 => true; 0 => false;
// "" => fasle; "something" => true; 
//empty string converts to false;



//CONVERSION TO STRING

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);
console.log(typeof stringNumber);






