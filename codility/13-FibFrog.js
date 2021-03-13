function solution(A) {
  const N = A.length
  const distances = getFibs(N)

  const jumps = 1 + jump(A, distances) // If infinity, not possible to jump
  return jumps === Infinity ? -1 : jumps
}

// Work backwards with initial jump to other shore (leaves.length)
// Every target is 1 jump away from every previous leaf for each valid distance
const jump = (leaves, distances, memo = {}, jumpTo = leaves.length, currDistIdx = 0) => {
  const jumpDistance = distances[currDistIdx]
  let result = Infinity;
  // If jump too big
  const tooFar = jumpDistance > jumpTo + 1
  if (tooFar) return Infinity;
  const jumpFrom = jumpTo - jumpDistance

  // If already attempted this jump
  if (memo[jumpFrom]) result = memo[jumpFrom];
  else {
    // If jumped from shore, this is all we need. Cannot be fewer jumps and no need to try other jumps to this position
    if (jumpFrom == -1) {
      memo[jumpFrom] = 0
      return 0;
    }

    // For every other jump between shore and target, attempt only if there is a leaf
    else if (leaves[jumpFrom] == 1) result = 1 + jump(leaves, distances, memo, jumpFrom)
    memo[jumpFrom] = result // has to be hashed here, not otuside of the block because it applies for this target with all the distance options
  }


  // Compare result from this jump to the next possible distance for the same target
  return Math.min(result, jump(leaves, distances, memo, jumpTo, currDistIdx + 1))
}

const getFibs = max => {
  let f = new Set()
  f.add(1)
  let a = 0
  let b = 1

  while (b <= max) {
    const next = a + b
    a = b
    b = next
    f.add(b)
  }

  return Array.from(f)
}

// TEST
// const leaves = "00011010000"
// const leaves = "001".repeat(205)
// const leaves = "01".repeat(243)
// const leaves = "000"
const leaves = ""
const r = solution(leaves.split(''))
console.log(r)