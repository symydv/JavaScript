//Arrays

const myArry = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3)

//Shallow copy: means copied ellement share same refference point (as we studied in heap) means any changes in copy will change original
//Deep copy: means copy and original does not share same refferance point. 


//Array Methods

myArry.push(6) //add 6 at end
console.log(myArry);

myArry.pop() //remove end element
console.log(myArry);

myArry.unshift(9) //add 9 at start
console.log(myArry);


myArry.shift() //remove element from start
console.log(myArry);


const newArr = myArry.join() // make a string named newArry 
console.log(newArr);


//slice, splice
//slice method does not remove element from original array while splice remove the relements from original array while adding in new arry.

console.log("A " , myArry);


const myn1 = myArry.slice(1,3) //take elements from index 1,2 and add them in myn1  

console.log(myn1);
console.log("B " , myArry);

const myn2 = myArry.splice(1,3) //remove element from index 1,2,3 from original array and add them in myn2

console.log(myn2);
console.log("c " , myArry);

//##############################################################################################################################################3
//Arrays 2

const marvel = ["thor", "ironman", "spiderman"]
const DC = ["superman", "flash", "batman"]

// marvel.push(DC)

// console.log(marvel);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

let Heroes =  marvel.concat(DC)

console.log(Heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const allheroes = [...marvel,...DC] // ... is spread operator it spreades the array into individual elements.

console.log(allheroes);

const blunder  = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const solved = blunder.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth(in this case infinity).

console.log(solved);


console.log(Array.isArray("Shyam")); //check if given input is an array //false in this case
console.log(Array.from("Shyam")); // converts given input into array

console.log(Array.from({name: "shyam"})) //interesting , returns empty array

let score1=  100
let score2=  200
let score3=  300

console.log(Array.of(score1, score2, score3)) //Returns a new array from a set of elements.