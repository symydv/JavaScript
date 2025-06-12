// introduced after ES6
//classes ke piche ka hamne pichle lectures me dekh liya hai ye to sirf sugar coated syntax hai.


class User { 
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return this.username.toUpperCase()
    }
}


const chai = new User("chai", "chai@123", 123);

console.log(chai.encryptPassword());
console.log(chai.changeUsername())


//Behind the scene.

// function User(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//         return this.username.toUpperCase()
//     }

// const tea = new User("tea", "tea@123", 123);

// console.log(tea.encryptPassword());
// console.log(tea.changeUsername());



//INHERITANCE

class me{
    constructor(username){
        this.username = username
    }

    LoginME(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends me{  //extend keyword is used to to inharit all methods
    constructor(username, email, password){
        super(username) //"super" is used because we want to inharit all constructore properties of username from me to Teacher
        this.email = email;
        this.password = password

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}


const coffee = new Teacher("coffee", "coffee@123" , 123)
coffee.LoginME()


console.log(coffee === Teacher);  //false  //its just an instance of Teacher not the actuall object Teacher.
console.log(coffee instanceof Teacher); //true
console.log(coffee instanceof me); //true




// STATIC properties.


class you{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){  //agar aapko har kisi ko ye property nahi deni ho tab aap static use karte hai.
        return `123`
    }
}

const shyam = new you("shyam")
// console.log(shyam.createId())  //this will give error
console.log(you.createId()); //you have call a static method via actuall class not the instance. 



class madam extends you{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new madam("iphone", "i@phone")
iphone.logMe()
// console.log(iphone.createId()) //this will give error
const IphonId = madam.createId()
console.log(`Iphone Id is : ${IphonId}`);
