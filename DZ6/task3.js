function checkOrder (available, ordered) {
    if (available < ordered) {
    console.log('Your order is too large, we don’t have enough goods.')
}

else if (ordered <= 0) {
console.log('Your order is empty')
}

else if (available >= ordered) {
console.log('Your order is accepted')
}
}
console.log(checkOrder(100, 50)); 
console.log(checkOrder(10, 20)); 
console.log(checkOrder(50, 0)); 
