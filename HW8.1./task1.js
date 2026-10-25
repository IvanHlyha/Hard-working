 const numbers = [2, -5, 0, 7, -3, 0, 10, -8]; 
 let positiveNumbers = 0; 
 let negativeNumber = 0; 
 let zeroNumber = 0; 
     for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] > 0) {
            positiveNumbers++;
        } else if (numbers[i] < 0) {
            negativeNumber++;
         } else {
            zeroNumber++;
       }
    }
    console.log(`Кількість позитивних чисел: ${positiveNumbers}, Кількість негативних чисел: ${negativeNumber}, Кількість нульових чисел: ${zeroNumber}`);


// const numbers = [4, 11, 8, 15, 22, 3, 10, 7];
// let evenCount = 0; 
// let doubleCount = 0; 
// for (let i = 0; i <numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         doubleCount++; 
//     } else {
//         evenCount++;} 
//     }
// console.log(`countDoble ${doubleCount} countEven ${evenCount}`)