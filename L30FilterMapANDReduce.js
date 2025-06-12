
//forEach loop does not return anything

// const coding = ["js", "cpp", "py", "java", "ruby"]

// const values = coding.forEach( (item) => {
//     return item
// })

// console.log(values); //undefined 


//FILTER.
// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.filter( (num) => num > 4) //returns values for which the function satisfies

// console.log(newNums);


//MAP : works same as forEach and directly returns  it.

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// // const newNums = myNum.map( (num) => {  
// //     return num + 10})

// //chaining : use maps in chain
// //num from first map will pass on to next map for further operations can also use filters
// const newNums = myNum
//                 .map((num) => num*10)
//                 .map((num) => num + 1)
//                 .filter((num) => num>40)
//                 .filter((num) => num%3 == 0)

// console.log(newNums);


//REDUCE

const myNum = [1,2,3,4]

// const myTotal = myNum.reduce(function(accumulator, currentValue){
//     console.log(`Accumulator : ${accumulator} and CurrentValue : ${currentValue}`);
    
//     return accumulator + currentValue //this is also returns as the next value for accumulator
// }, 0) //this 0 is given as initial value for accumulator


//using arrow function
// const myTotal =  myNum.reduce((acc, currVal) => acc + currVal, 0)
// console.log(myTotal);

const Shoping = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "Data science course",
        price : 12999
    },
]

const totalValue = Shoping.reduce((acc, currVal) => acc + currVal.price, 0 )

console.log(totalValue);

