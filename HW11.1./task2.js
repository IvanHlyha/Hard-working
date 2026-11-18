function fetchTodo() { 
   return fetch ('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .catch(error => console.error(error));
}
function fetchUser() {
    return fetch ('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => console.error(error));
}

const allIt = Promise.all([fetchTodo(), fetchUser()]);
allIt.then(results => console.log('Promise.all result:', results));

const raceIt = Promise.race([fetchTodo(), fetchUser()]);
raceIt.then(results => console.log('Promise.race results:', results))