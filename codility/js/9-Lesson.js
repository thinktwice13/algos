function solution(A) {
  let maxEnding = 0
  let maxSlice = 0

  for (let a of A) {
    maxEnding = Math.max(0,maxEnding + a) // Lowest possible maxEnding is 0
    maxSlice = Math.max(maxSlice, maxEnding) // maxSlice recorded even when maxEnding is reset to zero
  }

  return maxSlice
}

// TEST
const arr = [5,-7,3,5,-2,4,-1]
const res = solution(arr)