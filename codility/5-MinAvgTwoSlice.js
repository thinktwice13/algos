function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  // Start with slice of length 2
  const min = { from: 0, avg: (A[0] + A[1]) / 2 }

  for (let to = 2; to < A.length; to++) {
    // Tree part slice
    const slice1 = A.slice(to - 2, to + 1);
    const slice1Avg = getAvgFromSlice(slice1)
    if (slice1Avg < min.avg) {
      min.avg = slice1Avg
      min.from = to - 2
    }

    // New two part slice
    const slice2 = A.slice(to - 1, to + 1);
    const slice2Avg = getAvgFromSlice(slice2);
    if (slice2Avg < min.avg) {
      min.avg = slice2Avg
      min.from = to - 1
    }
  }
  
  return min.from
}

const getAvgFromSlice = slice => {
  return slice.reduce((sum, el) => sum += el, 0) / slice.length
}

// TEST
const arr = [-3, -5, -8, -4, -10]
const res = solution(arr)