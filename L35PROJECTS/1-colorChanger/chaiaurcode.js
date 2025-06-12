const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")


buttons.forEach(function(button){
    //we have to add events
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
    })
})