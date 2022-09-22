function solution(A) {
  const sorted = A.sort((a, b) => a - b);

  // Array is not a permutatino if value does not match the index + 1
  for (let idx = 0; idx < sorted.length; idx++) {
    if (sorted[idx] !== idx + 1) return 0;
  }

  return 1;
}

function solutionB(A) {
  return (A.reduce((res, num, idx) => res ^ num ^ idx) ^ A.length) > 0 ? 0 : 1;
}

const arr = [4, 1, 3];
solutionB(arr);

function solutionC(A) {
  const map = {}

  for (let i = 1; i <= A.length; i++) {
    if (map[i]) {
      return false
    }

    m[i] = true
  }

  return true
}

const arr = [4, 1, 3];
const s = solutionC(arr);
console.log(s)
