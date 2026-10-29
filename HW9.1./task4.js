// const person = { 
//     firstName: 'Tom',
//     lastName: 'Robertovich', 
//     age: 24
// }; 

// const {firstName, lastName, email = 'rest@vc.com'} = person; 

// console.log(firstName);
// console.log(lastName);
// console.log(email);


const person = { 
    firstName: 'Tom',
    lastName: 'Robertovich', 
    age: 24
}; 

function printUserInfo({firstName, lastName, email = 'rest@vc.com'}) 
{
	console.log(`${firstName} ${lastName} ${email}"`);
};
printUserInfo(person);