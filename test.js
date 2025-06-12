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