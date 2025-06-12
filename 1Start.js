const Id = 12345 //Constant is fixed it can not be reassigned to change
let accountEmail = "sy@gmail.com"
var accPass = "1234" /*Prefer not to use var because of issue in block scope and functional scope*/
accCity = "Jaipur"

/*Above four are different ways to assign a variable in javascript*/
//Always try to use const or let

//Id = "345" // Not allowed
accountEmail = "s@gamil.com"
accPass = "456"
accCity = "Bengaluru"


let accuser; //if we leave it as it is , it will be saved as unassigned

console.log(accountEmail); //used to print in terminal

console.table([Id, accountEmail, accPass, accCity, accuser]) // USed to print in tabular form


