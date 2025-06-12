const myArray = []
// %DebugPrint(myArray) // this syntax is not available in javacsript by default, you have to install jsvu to run it on a engine like v8-debug


//to run this 
//1. install jsvu
//2. Run "~/.jsvu/bin/v8-debug --allow-natives-syntax" in your cmd
//3. then you can write you code in the cmd to run it.


//it will show you many things about array
//one of them will be PACKED_SMI_ELEMENTS
//it will be written as -> element kind: PACKED_SMI_ELEMENTS , and like that many more things



//there can be two types of arrays
// 1. Continous array, 2. Holey array

//in both of this types we can have

// 1. SMI (small integers)
// 2. Packed elements
// 3. Double (float, string, function)

//every type has different optimization

const array2 = [1,2,3,4,5] // PACKED_SMI_ELEMENTS(Most optimised type also called constinous smi) -> because no holes in array

// PACKED_SMI_ELEMENTS is very strict as you can only have numbers in your array not even doubles are allowed
array2.push(6.0) //here we added a double in our array so now oit became PACKED_DOUBLE_ELEMENTS
//we can not convert PACKED_DOUBLE_ELEMENTS back to PACKED_SMI_ELEMENTS, even after deleting double we have added 

array2.push(7) // PACKED_ELEMENTS

array2[10] = 10 //HOLEY_ELEMENTS -> as the array also contains gapes now

console.log(array2); //[ 1, 2, 3, 4, 5, 6, 7, <3 empty items>, 10 ]
console.log(array2.length); // 11
console.log(array2[9]); // undefined

//what it has to do to get undefined at position 9
// step 1. bound check -> check if the position is in the boundary (length) of array, if yes then check step 2.
// step 2. hasOwnProperty(arrTwo, 9) -> to check if there is any element at position 9, in this case false, so it will check its prototypes again and again.
// step 3. hasOwnProperty(arrayTwo.prototype, 9) // after that it will check if Object has any prototype in step 4
// step 4. hasOwnProperty(Object.prototype, 9)

// so all this checking will be required everytime if it is a HOLE type


// and hasOwnProperty() is very expensive(unOptimised) in javaScript

//So make sure you dint have any holes in your array


// order of optimised array types 
// 1. constinous -> SMI > DOUBLE > PACKED
// 2. HOLES -> H_SMI, H_DOUBLE, H_PACKED


