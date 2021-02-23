function solution(A) {
  const sorted = A.sort((a,b) => a - b);

  // Array is not a permutatino if value does not match ththe index + 1
  for (let idx = 0; idx < sorted.length; idx++) {
    if (sorted[idx] !== (idx + 1)) return 0
  }

  return 1
}