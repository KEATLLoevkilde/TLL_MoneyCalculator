/**
 * Calculates the percentage change between two numbers, and returns it as a positive number.
 * @param startAmount
 * @param endAmount
 * @returns {number}
 */
function percentageChange(startAmount, endAmount){
    if(startAmount >= endAmount){
        return (startAmount - endAmount) / startAmount * 100
    }else {
        return (endAmount - startAmount) / startAmount * 100
    }
}

console.log(percentageChange(100,110))
