const clock = document.getElementById('clock')


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);  //setInterval function runs a function every definite intervals, in this case we set it to 1000 ms .