//+++++++++++ if

// if(condition){   //if condition is true it will run
// }

const isLoggedIn = true

if(isLoggedIn){
    console.log(`User Loggedin`);  
}else{
    console.log(`User not logged in`);
    
}

// 2 =='2' will be true in javascript so we use 2 ==='2' which will be false 


const balance = 1000

if ( balance > 500) console.log("test1"); //dont use this syntax as it is not readable


if(balance < 500){
    console.log("less than 500");
    
}else if( balance < 750){
    console.log("less than 750");
    
}else if( balance < 1200){
    console.log("less than 1200");
    
}


//+++++++++++ and  (&&)  used when we need multiple statements to be true simultaniously

const UserLogged = true
const debitCard = true

if(UserLogged && debitCard){
    console.log("Allow to buy course");
}else{
    console.log("Not allowed");
    
}

//+++++++++++or (||) any of condition should be true

const name = true
const middleName = false

if(name || middleName){
    console.log("Allow to buy course");
}else{
    console.log("Not allowed");
    
}



//++++++++++++++++Switch case

const month = 1

switch(month){
    case 1: 
        console.log("january");
        break; //dont forget to use break
    case 2:     
        console.log("February");
        break;
    case 3: 
        console.log("March");
        break;
    default:
        break;
}


//+++++++++++++ falsy and truthy values in if else statements

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//other than these all are considered true values

//truthy values
// "0", "false", " ", [], {}, function(){} empty function



//so how do we use empty arrays and objects in if else

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
    
}

// false == 0 => true
// false == '' => true
// 0 == '' => true



//++++++++ Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10
console.log(val1); 

val2 = null ?? 10
console.log(val2);


//so it works like we have a complex function instead at place of 10 so if the value of that function exists then it will be val2 or else it will take null as val2

var1 = undefined ?? 15
console.log(var1);




//+++++++++++Terniary operator
// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("more Than 80")  : console.log("Less Than 80");
