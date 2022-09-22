// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const map = {};
  for (const element of A) {
    if (map[element]) delete map[element];
    else map[element] = 1;
  }

  return +Object.entries(map)[0][0];
}

// Can be solved without map: Use xor to cancel out number pairs
function solutionB(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return A.reduce((acc, num) => acc ^ num);
}
