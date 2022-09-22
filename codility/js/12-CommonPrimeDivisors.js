// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    return A.reduce((sum, el, idx) => {
        const elA = A[idx]
        const elB = B[idx]
        
        if (check(elA, elB)) sum++;
        
        return sum
    },0)
}

function getGcd(a,b) {
    return (a%b)
        ? getGcd(b,a%b)
        : b
}

function check(a,b) {
    // If numibers are the equal, so are their prime factors
    if (a === b) return true
    // If gcd is 1, prime factors not shared
    const gcd = getGcd(a,b)
    if (gcd === 1) return false

    // Otherwise check against their gcds
    const aa = a / gcd
    const bb = b / gcd
    return check(aa, getGcd(aa, gcd)) && check(bb, getGcd(bb, gcd))
}