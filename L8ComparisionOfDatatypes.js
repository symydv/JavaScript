console.log(2>1); //true
console.log("2">1);  //this will give unpredictable result, so always insure to compare two same datatypes

// === it represent strict check means it also compares the datatype unlike == 
console.log("2" == 2 ); //true
console.log("2" === 2 ); //false