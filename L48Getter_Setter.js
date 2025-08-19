//getter aur setters by default hamari properties ke liye bane rehte hai bina likhe.

//get : The "get" syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.
//set : The "Set" object lets you store unique values of any type, whether primitive values or object references.


class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    //we dont want anyone to get our password so we use get and set so that people get destorted value of our password not actuall password
    get password(){  
        return this._password.toUpperCase() //if someone wnat to GET our password they will get this one, but actualy we have set something different in our database using "set".
    }
    //agar get (getter) use kar rahe ho to set(setter) bhi use karna padega
    set password(value){
        this._password = value; //here we have taken _password because if we take password it will cause error as we have already assigned it (as password) in constructor
    }


    get email(){
        return `${this._email}email.com`
    }

    set email(value){
        this._email = value
    }
}

const shyam = new User("sym@123", "abc");

console.log(shyam.password)
console.log(shyam.email)



//property get set

function User1(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value
        }
    })
}





// on Object
const me = new User1("sym@@@@", 1234)
console.log(me.email);


User2 = {
    _email: "email@13",
    _password: 123,

    get email(){  //here we made new property as we have given new name // ye sab function aur Object me ulta sidha hota hai
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User2)
console.log(tea.email); //EMAIL@13
console.log(tea._email); //email@13
