// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const map = {}
    for (const element of A) {
        if (map[element]) delete map[element]
        else map[element] = 1
    }

    return +Object.entries(map)[0][0]
}