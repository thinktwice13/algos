// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let buyPrice = A[0]
    let sellPrice = buyPrice
    let maxProfit = 0
    
    for (let i = 1; i < A.length; i++) {
        const price = A[i]
        if (price < buyPrice) {
            buyPrice = price
            sellPrice = price
        } else {
            sellPrice = Math.max(sellPrice, price)
            const currentProfit = sellPrice - buyPrice
            maxProfit = Math.max(maxProfit, currentProfit)
        }
    }

    return maxProfit
}