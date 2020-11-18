const lw = (r, l = 0, arr = [1]) => {
  if (!r.children) return arr;
  l++
  for (let child of r.children) {
    if (arr[l]) arr[l]++
    else arr[l] = 1
    
    lw(child, l, arr) // Do not return!
  }
  return arr;
}

module.exports = lw