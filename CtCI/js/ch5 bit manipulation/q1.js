/**
 * Insert M into N between positions j and i (assume it fits)
 * @param {string} M
 * @param {string} N
 * @param {number} i
 * @param {number} j
 * @returns {string}
 */
const insert = (N,M,i,j) => {
  m = M.split('')
  mLen = m.length - 1
  n = N.split('')
  nLen = n.length - 1


  // Shift 
  for (let pos = i; pos <= j; pos++) {
    const value = m[mLen - (pos - i)]
    n[nLen - pos] = value
  }

  const updated = n.join('');
  return updated
}


// Test
console.log(insert('10000000000', '10011', 2, 6) === '10001001100');