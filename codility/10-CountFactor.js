// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let factorCount = 0;

  // First check all smaller than sqrt
  const limit = Math.sqrt(N);
  for (let i = 1; i < limit; i++) {
    if (N % i === 0) factorCount += 2;
  }

  if (limit % 1 === 0) factorCount++;

  return factorCount;
}
