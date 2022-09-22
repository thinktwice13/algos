// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sliceSum = A[0];
  let maxSum = sliceSum;

  // If sliceSum > 0, try adding new value. If sliceSum < 0, try finding any number higher
  for (let i = 1; i < A.length; i++) {
    const value = A[i];
    if (sliceSum >= 0) sliceSum = Math.max(0, sliceSum + value);
    // Reset slice startig position if recorded slice was < 0
    else sliceSum = Math.max(sliceSum, value);

    maxSum = Math.max(maxSum, sliceSum);
  }

  return maxSum;
}
