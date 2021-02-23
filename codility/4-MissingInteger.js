function solution(A) {
  const sorted = A.sort((a, b) => a - b)
  let expected = 1
  for (let el of sorted) {
    if (el > expected) return expected
    if (el === expected) {
      expected++;
      if (el === sorted.length) return expected
    }
  }

  return 1
}

// Use hash
function sultionB(A) {
  // Create hash and keep track of expected. Only consider positives
  let expected = 1
  let hash = {}
  for (let el of A) {
    if (el > 0) {
      hash[el] = true
      if (el === expected) expected++;
    }
  }

  // Loop through next expected values until not found
  while (!!hash[expected]) expected++

  return expected;
}


// TEST 
const arr = [1,2,3]
const res = solution(arr)