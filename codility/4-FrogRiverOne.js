function solution(A,X) {
  const leaves = new Set()
  for (let second = 0; second < A.length; second++) {
    const currentLeaf = A[second]
    if (currentLeaf <= X) leaves.add(currentLeaf)
    if (leaves.size === X) return second
  }
  // If not all leaves found
  return -1
}

// test
const arr = [1,3,1,4,2,3,5,4]
const sec = solution(arr, 5)