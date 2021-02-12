// Compute all permutations of a string of unique characters


const getPerms = str => {
  if ([undefined, null].includes(str)) return null;
  
  const permutations = new Set();
  if (str === "") {
    permutations.add("")
    return permutations
  }

  const firstChar = str[0];
  // Get permutations of n-1
  const rest = str.slice(1)
  const restPerms = getPerms(rest)
  
  // For each permutation of a n-1 str, create a new one with firstChar of original string at each position
  for (let perm of restPerms) {
    for (let pos = 0; pos <= perm.length; pos++) {
      const newPerm = perm.substring(0,pos) + firstChar + perm.substring(pos)
      permutations.add(newPerm)
    }
  }
  return permutations
}

// TEST
const str = "abc"
const p = getPerms(str)
