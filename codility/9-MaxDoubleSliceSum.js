// function solution(A) {
//   const slice1Maxes = {}
//   const slice2Maxes = {}

//   let maxSum = 0
//   // Save max for each processed index of the array. Do same in reverse for slice2
//   for (let i = 1; i < A.length - 1; i++) {
//     const slice1Value = A[i]
//     const slice1Prev = slice1Maxes[i - 1] || 0
//     const slice1Sum = slice1Value + slice1Prev
//     slice1Maxes[i] = Math.max(0, slice1Sum)
  
//     // Reverse for slice 2
//     const ii = A.length - 1 - i
//     const slice2Value = A[ii]
//     const slice2Prev = slice2Maxes[ii + 1] || 0
//     const slice2Sum = slice2Value + slice2Prev
//     slice2Maxes[ii] = Math.max(0, slice2Sum)

//     // TODO Only do this if both sides have already been processed for a given index
//     const currentSum = (slice1Maxes[i - 1] || 0) + (slice2Maxes[i + 1] || 0)
//     maxSum = Math.max(maxSum, currentSum)
//   }

//   // Process each index again and check for biggest sum of adjacent recorded slice sums
//   // for (let i = 1; i < A.length - 1; i++) {
//   //   const left = slice1Maxes[i - 1] || 0
//   //   const right = slice2Maxes[i + 1] || 0
//   //   maxSum = Math.max(maxSum, left + right)
//   // }

//   return maxSum
// }

function solution(A) {
  const fwd = {}
  const rev = {}
  let maxSum = 0

  for (let i = 1; i < A.length - 1; i++) {
    const fwdValue = A[i]
    const fwdPrev = fwd[i - 1] || 0
    const fwdSlice = fwdValue + fwdPrev
    fwd[i] = Math.max(0, fwdSlice)
    // If this index has been processed by reverse firection, start looking for maxSum
    if (rev[i] !== undefined) {
      const sum = (fwd[i - 1] || 0) + (rev[i + 1] || 0)
      maxSum = Math.max(maxSum, sum)
    }


    const ii = A.length - 1 - i
    const revValue = A[ii]
    const revPrev = rev[ii + 1] || 0
    const revSlice = revValue + revPrev
    rev[ii] = Math.max(0, revSlice)
    // If fwd for this index has been processed, check for mazsum
    if (fwd[ii] !== undefined) {
      const sum = (fwd[ii - 1] || 0) + (rev[ii + 1] || 0)
      maxSum = Math.max(maxSum, sum)
    }
  }
  return maxSum
}

// TEST 
const arr = [5, 17, 0, 3]
const r = solution(arr)