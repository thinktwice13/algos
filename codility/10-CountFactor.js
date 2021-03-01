// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let factorCount = 0

    // First check all smaller than sqrt
    for (let i = 1; i < Math.sqrt(N); i++) {
        if (N % i === 0) factorCount += 2
    }

    if (Math.sqrt(N) % 1 === 0) factorCount++

    return factorCount;
}