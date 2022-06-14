function solution(A) {
  // Calc values for when P = 1 (initial position)
  let left = A[0];
  let right = A.slice(1).reduce((sum, el) => (sum += el), 0); // Sum for the right of P
  let minDiff = Math.abs(left - right);

  // Calculate rest of P positions. Update minDiff as needed
  for (let P = 2; P < A.length; P++) {
    const currValue = A[P - 1];
    left += currValue;
    right -= currValue;
    const currDiff = Math.abs(left - right);
    minDiff = Math.min(minDiff, currDiff);
  }
  return minDiff;
}

function sum(A) {
  return A.reduce((sum, el) => (sum += el), 0);
}

// TEST
// const arr = [3,1,2,4,3]
const arr = [-1000, 1000];
const minDiff = solution(arr);
