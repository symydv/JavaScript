// "this" keyword : this is used for representing currrent context
//Browser ke andar "this" ki value window object aati hai

const user = {
    username : "sym",
    price  : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website.`);
        console.log(this); //here "this" repesents current context which is user object
        
    }

}

user.welcomeMessage()
console.log(this); //here in node environment there is no current context so "this" represents empty object {}


function chai(){
    let username = "hitesh"
    console.log(this);  //"this" ke andar bahut kuch hai even in a function but,
    console.log(this.username); // in functin "this" wont work as it work for Objects so it will print undefined
    
}

chai()



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Arrow function () => {}: Juct another way to assign a function
const addTwo = (num1, num2) => {
    return num1 + num2
}

//we can also write it as oneliner

const add = (num1, num2) => (num1 + num2)  //we can skip return in this type of assignment

console.log(addTwo(2,7));
console.log(add(2,7));
