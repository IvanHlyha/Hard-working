// const firstArray = [3, 5, 8, 11];
// const secondArray = [2, 4, 7, 9];
// const union = [...firstArray] + [...secondArray];
// console.log(union);

const firstArray = new Set([3, 5, 8, 11]);
const secondArray = new Set([2, 4, 7, 9]);
const union = new Set ([...firstArray, ...secondArray]);
console.log(union);
