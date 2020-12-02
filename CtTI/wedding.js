// Compare if arrays equal

module.exports = (a1, a2) => {
  if (a1.length !== a2.length) return false
  
  // map first array
  const set = new Set()
  for(let i of a1) set.add(i)
  
  // check second array against first (remove found items)
  for(let i of a2) set.delete(i)

  // confirm map is empty
  return !set.size
}

// O(2n + m) => O(n)