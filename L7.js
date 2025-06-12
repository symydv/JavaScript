let str1 = "hello" 
let str2 = " shyam"

let str3 = str1 + str2

console.log(str3);

console.log(1 + "2");

//JS is weird
console.log("1" + 2 + 2);  //output => 122

console.log(1 + 2 + "2");  //output => 32

console.log("1" + "2");  //output => 12

//So please use parentheses .

console.log(true); //true
console.log(+true); // 1
console.log(+""); // 0



let GameCounter = 100

GameCounter++
console.log(GameCounter);

++GameCounter
console.log(GameCounter);

//learn about prefix and postfix of ++
// Postfix increment x++

let x = 3;
const y = x++;

console.log(x); //4
console.log(y); //3


let u = 3;
const v = ++u;

console.log(u); //4
console.log(v); //4
