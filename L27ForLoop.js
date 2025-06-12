// loops are also known as iterations

//for loop

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is best number");   
//     }
//     console.log(element);
// }



for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + " = " + i*j)  
    }
    console.log();
    
}

let array = ["flash", "batman", "superman"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


//break and continue

for (let i = 1; i <= 20; i++) {
    if( i == 5){
        console.log("detected 5");
        break  //it will break the loop
        
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if( i == 5){
        console.log("detected 5");
        continue // it will force the loop to move to next value without approaching further.
        
    }
    console.log(`value of i is ${i}`);
}