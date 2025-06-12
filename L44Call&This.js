
function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    // SetUsername(username) ; //ye call hoga  hi nahi because iske andar bhi "this" use ho raha hai aur jab do function ek ke andar ek ho aur andar wale me "this" keyword use ho raha ho to wo "this" Global context ko refer karata hai aur Node environment me Global context ek empty Object {} hota hai.
    // So we use below syntax.
    SetUsername.call(this, username)
    this.email = email ;
    this.password = password ;
}


const chai = new createUser("chai","chia@123", 123);

console.log(chai); //If we dont use "call", it will print -> createUser { email: 'chia@123', password: 123 }




