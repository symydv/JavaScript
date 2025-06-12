
const colors = ['yellow', 'black', 'red', 'green', 'blue', 'orange', 'purple', 'pink', 'aliceblue', 'grey' ];

const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<6; i++){
        color += hex[parseInt(Math.random()*16)];
    } //as the numbers are just 6 digit codes.
    return color ;
};

const body = document.querySelector('body')


const changeColor = function(){
    let myColor = randomColor();
    body.style.backgroundColor = myColor;
}

let start ; //we are declaring it outside so it will be a global scope variable
document.querySelector('#start').addEventListener('click',function(e){
    if(!start){
        start = setInterval(changeColor,1000);
    }
    
})

document.querySelector('#stop').addEventListener('click',function(e){
    clearInterval(start);
    start = null; //we are deleting start to save space  #efficientCode
})