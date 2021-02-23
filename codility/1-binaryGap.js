// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const str = N.toString(2)
  let longest = 0
  let current = -Infinity

  for (let char of str) {
    if (char == 0) current++
    if (char == 1) {
      if (current > longest) longest = current
      current = 0
    }
  }

  return longest
}

const n = 32
const r = solution(n)