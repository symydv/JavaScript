//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

    // pending: initial state, neither fulfilled nor rejected.
    // fulfilled: meaning that the operation was completed successfully.
    // rejected: meaning that the operation failed.

//Promise.then().catch().finally()



const promiseOne = new Promise(function(resolve, reject){
    //DO an async task.
    //DB calls, cryptography, network.

    setTimeout(function(){
        console.log("Async task is complete");
        resolve() //if we dont write this then .then() function will not run.
    }, 1000)
});


promiseOne.then(function(){  //.then() is directly connected to resolve()
    console.log("promise consumed");
    
});


//we can create a promise without storing it in a variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async pass 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
    
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@123.com"})
    }, 1000)
});

promiseThree.then(function(user){ //data inside the resolve is passed on to .then() -> user
    console.log(user);
    
});



const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "shyam", password: "123"})
        }else{
            reject('ERROR: something went wrong...')
        }
    },1000)
});


promiseFour.then((user) => {
    console.log(user);
    return user.username 
}).then((username) => {     //this is called chaining. This .then()  will get the returned value of above function
    console.log(username);   
}).catch((error) => {  // .catch() is directly connected to reject
    console.log(error);
    
}).finally(() => {   //.finally() will always execute
    console.log("The promise is either resolved or rejected");
    
});


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "JavaScript", password: "123"})
        }else{
            reject('ERROR: JS went wrong...')
        }
    },1000)
});


// Instead of .then() and other we can handle promises by an another method..

async function consumePromiseFive() {
    
    try {
        const response = await promiseFive ; //this is also to provide resolve code
        console.log(response);
    } catch (error) { //this block is for reject() (works in replacement for .catch())
        console.log(error);
        
    }
    
}

consumePromiseFive();


// async  function getAllUsers(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data  = await response.json(); //we write await because isko convert hone me time lagega to vo pending hone ke bajaye apana time le aur fir print ho.
//     console.log(data);
    
// }

// getAllUsers()

//aab isi upar wale kaam ko .then() .catch() se bhi kar sakte hai.

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((resp) => {console.log(resp);
})
.catch((error) => {
    console.log(error);
    
}) //if internet is fast this block of code will run before the previous blocks where we have given time delay.