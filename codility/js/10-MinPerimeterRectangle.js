// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  const dividerMax = Math.floor(Math.sqrt(N));

  for (let d1 = dividerMax; d1 > 1; d1--) {
    // Dividers are valid of they are integers and if their product is N
    const d2 = N / d1;
    const isInteger = d2 % 1 === 0;
    if (isInteger) {
      const productEqualsN = d1 * d2 === N;
      if (productEqualsN) {
        const perimeter = 2 * (d1 + d2);
        return perimeter;
      }
    }
  }

  // If everything else fails, it is a prime number
  return N * 2 + 2;
}

function solutionB(N) {
  // The result comes from the possible factors that are closest together (5 and 6 for N=30)
  const a = Math.floor(Math.sqrt(N));
  return 2 * (a + N / a);
}

// TEST
const n = 2;
const r = solutionB(n);
