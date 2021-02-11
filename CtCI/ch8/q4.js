// get all subsets of a set


// Iterate all combinations and convert to integer
const getSubsets = set => {
  const subsets = []
  const max = 1 << set.length // 2^n

  // Create subset and add to list  
  for (let i = 0; i < max; i++) {
    subsets.push(getSubset(i, set))
  }
  return subsets;
}

// Create subset of items that match the subset mask of x, eg, 1001 mask for set 1,2,3,4 will return 1 and 4
const getSubset = (x, set) => {
  const subset = []
  let idx = 0

  for (let i = x; i > 0; i >>= 1) {
    if ((i & 1) == 1) {
      subset.push(set[idx])
    }
    idx++;
  }

  return subset
}

// Recursive
// Generate subset at (index - 1), clone results and add current item to each of the cloned subsets
const getSubsets2 = (set, index = 0) => {
  // Base case: Add empty subset
  if (set.length === index) {
    return [[]]
  } else {
    const allSubsets = getSubsets2(set, index + 1);
    return [
      ...allSubsets, 
      ...allSubsets.map(ss => ([...ss, set[index]]))
    ]
  }
}

// TEST
const set = [1,2,3,4]
const ss = getSubsets(set)

const set2 = [1,2,3,4]
const ss2 = getSubsets2(set)