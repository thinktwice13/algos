function solution(A) {
  const sorted = A.sort((a, b) => b - a)

  // Always use biggest positive
  const a = sorted[0]
  
  let b = sorted[1] * sorted[2];
  // If all positive or all negative, always use next two biggest
  const oneSided = sorted[0] < 0 || sorted[sorted.length - 1] > 0
  // If mixed, use latger od two next positives or two smallest negatives
  if (!oneSided) b = Math.max(b, (sorted[sorted.length - 1] * sorted[sorted.length - 2]))

  return a * b
}

// TEST
const arr = [-3, 1, 2, -2, 5, 6]
const res = solution(arr)