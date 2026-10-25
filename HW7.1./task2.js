const decrement = (num) => {console.log(num)
    if (num <= 0 ) {return num} else {
return decrement(num -1)}
};
(decrement(5));