// Find permutations of a string with duplicate characters. There cannot be duplicate permutations.

// Hash string and use each hash as a standalone character
const getPerms = (str) => {
  // Build map
  const map = new Map()
  for (let char of str) {
    if (!map.get(char)) map.set(char, 1)
    else map.set(char, map.get(char) + 1)
  }


  const perms = setPerms(map)
  console.log(perms)
  console.log(perms.length)
  return perms
}

const setPerms = (map, prefix = "") => {
  let perms = []

  for (let char of map.keys()) {
    const count = map.get(char)
    if (count > 0) {
      // Find permutation of everything else
      map.set(char, count - 1)
      perms = [...perms, ...setPerms(map, prefix + char)]
      map.set(char, count)
    }
  }
  if (!perms.length) perms = [...perms, prefix]
  return perms
}

// TEST
const str = 'abbc'
const perms = getPerms(str)