function solution(A) {
  const sorted = A.sort((a, b) => a - b);
  let expected = 1;
  for (let el of sorted) {
    if (el > expected) return expected;
    if (el === expected) {
      expected++;
      if (el === sorted.length) return expected;
    }
  }

  return 1;
}

// Use hash
function solutionB(A) {
  // Create hash and keep track of expected. Only consider positives
  let expected = 1;
  let hash = {};
  for (let el of A) {
    if (el > 0) {
      hash[el] = true;
      if (el === expected) expected++;
    }
  }

  // Loop through next expected values until not found
  while (!!hash[expected]) expected++;

  return expected;
}

// Use hash
function solutionC(A) {
  // Create hash and keep track of expected. Only consider positives
  const found = Array(A.length);

  for (const num of A) if (num > 0) found[num - 1] = true;
  return found.findIndex((num) => num === undefined) + 1 || A.length + 1; // It will be a zero if not found, which means the number missing is equal to A.length
}

// TEST
// const arr = [1,2,3]
const arr = [1, 3, 6, 4, 1, 2];
// const arr = [-1,-3]
const res = solutionC(arr);
