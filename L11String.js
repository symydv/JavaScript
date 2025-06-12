const name = "sym"
const repoCount  = 50

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


// we can also assign string as

const gameName = new String('sYmydv') //Doing so we can use many string properties
//like we have access to key value pairs, length

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('Y'));

const newString = gameName.substring(0,3)
console.log(newString); //new substring index 0,1,2 of original string

const anotherString = gameName.slice(-5,4) //In slice we can take negative values which represent values from back
console.log(anotherString);

const newStr = "   sym   "
console.log(newStr);
console.log(newStr.trim()); //it will trim all spaces 

const url = "https://Google_com"
const newURL = url.replace('_', '.')

console.log(url);
console.log(newURL);

console.log(url.includes("Google")); //returns true if includes else false

const randomName = "abc_xyz_uvw"
console.log(randomName.split('_')); //it will create an array by spliting it from '_' 

//there are many more properties of string
//all these does not change our original string

