// function solution(A) {
//   const N = A.length
//   const distances = getFibs(N)

//   const jumps = 1 + jump(A, distances) // If infinity, not possible to jump
//   return jumps === Infinity ? -1 : jumps
// }

// // Work backwards with initial jump to other shore (leaves.length)
// // Every target is 1 jump away from every previous leaf for each valid distance
// const jump = (leaves, distances, memo = {}, jumpTo = leaves.length, currDistIdx = 0) => {
//   const jumpDistance = distances[currDistIdx]
//   let result = Infinity;
//   // If jump too big
//   const tooFar = jumpDistance > jumpTo + 1
//   if (tooFar) return Infinity;
//   const jumpFrom = jumpTo - jumpDistance

//   // If already attempted this jump
//   if (memo[jumpFrom]) result = memo[jumpFrom];
//   else {
//     // If jumped from shore, this is all we need. Cannot be fewer jumps and no need to try other jumps to this position
//     if (jumpFrom == -1) {
//       memo[jumpFrom] = 0
//       return 0;
//     }

//     // For every other jump between shore and target, attempt only if there is a leaf
//     else if (leaves[jumpFrom] == 1) result = 1 + jump(leaves, distances, memo, jumpFrom)
//     memo[jumpFrom] = result // has to be hashed here, not otuside of the block because it applies for this target with all the distance options
//   }


//   // Compare result from this jump to the next possible distance for the same target
//   return Math.min(result, jump(leaves, distances, memo, jumpTo, currDistIdx + 1))
// }

// const getFibs = max => {
//   let f = new Set()
//   f.add(1)
//   let a = 0
//   let b = 1

//   while (b <= max) {
//     const next = a + b
//     a = b
//     b = next
//     f.add(b)
//   }

//   return Array.from(f)
// }

function solution(A) {
  const N = A.length // Also the index of the other shore

  // Get set of jump distances (fib numbers)
  let distances = new Set([1])
  let i = 0
  let ii = 1
  while (ii <= N) {
    const next = i + ii
    distances.add(next)
    i = ii
    ii = next
  }
  
  return (1 + jump(A, distances)) || -1
}

// Initially, try jumping from the shore. For each next jump try every leaf between current one and other shore
const jump = (allLeaves, distances, jumpFrom = [-1]) => {
  const leaves = new Set()
  // Try jumping to any of the valid targets
  for (let from of jumpFrom) {
    for (let distance of distances) {
      const jumpTo = from + distance
      
      // If jumped to shore, do not try additional jumps
      if (jumpTo == allLeaves.length) return 0; // Return 0 because we do not need any additional jumps

      // If jumped too far, do not try bigger jumps
      if (jumpTo > allLeaves.length) break;

      // For every other result, collect leaves between current position and other shore and try jumping from there
      if (allLeaves[jumpTo] == 1) leaves.add(jumpTo)
    }
  }

  // Try next jump only if there are leaves found to jump from 
  return !leaves.size ? -1 : 1 + jump(allLeaves, distances, leaves)
}

// TEST
// const leaves = "00011010000"
// const leaves = "001".repeat(205)
// const leaves = "01".repeat(243)
// const leaves = "000"
// const leaves = ""
const r = solution(leaves.split(''))
console.log(r)