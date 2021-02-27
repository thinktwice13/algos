function solution(A) {
  let equiCount = 0
  
  // Find leader of the entire array. If none found return 0
  let leader;
  const map = {}
  for (let i = 0; i < A.length; i++) {
    const value = A[i]
    if (!map[value]) map[value] = 1
    else map[value]++;

    const isLeader = map[value] > Math.floor(A.length / 2)
    if (isLeader && !leader) leader = value
  }
  if (leader === undefined) return equiCount // Check undefined, because it might be a valid value of 0

  // Iterate again. Check if global leader is still valid on both slices for each index. 
  // Init leader counters
  let leftCount = 0
  let rightCount = map[leader]
  // Iterate again, check if leader is still valid for both slices of A at each index
  for (let i = 0; i < A.length - 1; i++) {
    // Move next item
    const value = A[i]
    const leftSize = i + 1
    const rightSize = A.length - 1 - i

    // If value equals leader, adjust counters
    if (value === leader) {
      ++leftCount;
      --rightCount;
    }

    // If still valid leader for both sides, record
    const isLeftValid = leftCount > Math.floor(leftSize / 2)
    const isRightValid = rightCount > Math.floor(rightSize / 2)
    if (isLeftValid && isRightValid) equiCount++

  }

  return equiCount
}


// TEST
// const arr = [4, 3, 4, 4, 4, 2]
const arr = [0,0]
const res = solution(arr)