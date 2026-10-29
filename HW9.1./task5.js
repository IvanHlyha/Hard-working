const users = [
    {name: 'Bob', age: 24, email: 'ff@ff.gg'}, 
    {name: 'Tom', age: 25, email: 'tt@dd.hh'}
];
for (const { name, age, email} of users) {
  console.log(`${name}, ${age}, ${email}`)
};