// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     if (!response.ok) {
//       throw new Error('Request failed');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('An error occurred:', error);
//     throw error;
//   }
// }


async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const Todo = await response.json();
        return Todo;
    } catch (error) {
        console.error('An error accurred:', error);
        throw error;
    }
}    
async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Request failed');
        }
        const User = await response.json(); 
        return User; 
    } catch (error) {
        console.error('An error accurred:', error);
        throw error; 
    }
}
async function runTest() {
   try {
     const results = await Promise.all([fetchTodo(), fetchUser()])
    console.log('Results:', results);
} catch (error) {
        console.error('Fatal error');
    }
}
runTest();

