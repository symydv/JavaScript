

// function addTwoNumber(num1, num2){  //here num1 and num2 are parameters
//     console.log(num1 + num2);   
// }

function addTwoNumber(num1=1, num2){  //here num1 and num2 are parameters //we can take default values of parameters in case user forget to assign them , like here we assign num1 = 1 as default value.
    
    let result = num1 + num2
    return result   
}

const result = addTwoNumber(3, 4) //this result and the result stored inside the function are different

console.log("Result : ", result);


function calculateCartPrice(val1, val2, ...num1){  //... is rest operator
    //first two values will go to val1 and val2 and rest of them will be stored as an array in num1
    return num1
}

console.log(calculateCartPrice(200, 300, 500, 700));
//if we have not used rest operator we would get only 200. but now we will get an array of all the inputs we have provided  after assigning first two input as val1 and val2 , if val1 and val2 are not given then all given values will be stored as an array in num1




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));


