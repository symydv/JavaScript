
//const height = parseInt(document.getElementById('#height').value) //this usecasce will give you empty value which is default. 



const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();  //it will prevent default empty value of weight and height 
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const result = document.querySelector('#results');
    
    if(height === '' || height<=0 || isNaN(height)){
        result.innerHTML = "Please give a valid height" ;
    }else if(weight === '' || weight<=0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight" ;
    }else{
        const BMI = (weight/ ((height*height)/10000)).toFixed(2)

        result.innerHTML = `<span>${BMI}</span>`
    }

})
