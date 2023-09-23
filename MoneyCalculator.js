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

/**
 * Calculates what an amount of money will be woth after a given number of years, at a given inflation rate (%)
 * and returns that amount as a whole rounded number.
 * @param amount
 * @param inflationPercentage
 * @param years
 * @returns {number}
 */
function inflationAdjusted(amount, inflationPercentage, years){
    return Math.round(amount / (1 + inflationPercentage / 100) ** years)
}

