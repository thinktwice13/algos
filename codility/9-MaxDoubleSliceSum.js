function solution(A) {
  const slice1Maxes = {}
  const slice2Maxes = {}

  // Save max for each processed index of the array. Do same in reverse for slice2
  for (let i = 1; i < A.length - 1; i++) {
    const slice1Value = A[i]
    const slice1Sum = slice1Value + (slice1Maxes[i - 1] || 0)
    slice1Maxes[i] = Math.max(0, slice1Sum)
  
    // Reverse for slice 2
    const ii = A.length - 1 - i
    const slice2Value = A[ii]
    const slice2Sum = slice2Value + (slice2Maxes[ii + 1] || 0)
    slice2Maxes[ii] = Math.max(0, slice2Sum)
  }

  // Process each index again and check for biggest sum of adjacent recorded slice sums
  let maxSum = 0
  for (let i = 1; i < A.length - 1; i++) {
    const left = slice1Maxes[i - 1] || 0
    const right = slice2Maxes[i + 1] || 0
    maxSum = Math.max(maxSum, left + right)
  }

  return maxSum
}

// TEST 
const arr = [3,2,6,-1,4,5,-1,3]
const r = solution(arr)