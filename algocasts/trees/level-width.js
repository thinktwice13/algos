const lw = (r, level = 0, arr = [1]) => {
  if (!r.children) return arr;
  level++
  for (let child of r.children) {
    arr[level] = (arr[level] || 0) + 1
    lw(child, level, arr)
  }
  return arr;
}

module.exports = lw