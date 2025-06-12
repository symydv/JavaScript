//fetch API is evolved to overcome the drawbacks of XMLHttpRequest. 
//The Fetch API provides a JavaScript interface for making HTTP requests and processing the responses.

// Fetch is the modern replacement for XMLHttpRequest: unlike XMLHttpRequest, which uses callbacks, Fetch is promise-based and is integrated with features of the modern web such as service workers and Cross-Origin Resource Sharing (CORS). 

//object inside fetch is delevered in a special queue (micro task queue) which is a priority queue so they have priority over other delayed blocks.

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((resp) => {console.log(resp);
})
.catch((error) => {
    console.log(error);
    
})