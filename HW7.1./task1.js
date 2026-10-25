const handleNum = (number, handleEven, handleOdd) => { 
    if (number % 2 === 0) {return handleEven(number)} else {return handleOdd(number)}
}
const handleEven = (number) => {console.log('number is even')} 
const handleOdd = (number) => {console.log('number is odd')}

(handleNum(10, handleEven, handleOdd))