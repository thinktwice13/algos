
const isInvalidMatrix = m => !m || !m.length



module.exports = m => {
  if (isInvalidMatrix(m)) throw new Error('invalid matrix')
  if (m.length === 1) return m;

  const zeroes = {
    rows: new Set(),
    cols: new Set()
  }

  // Iterate matrix and save zero values coordinates
  for (let row = 0; row < m.length; row++) {
    for (let col = 0; col < m[0].length; col++) {
      const val = m[row][col]
      if (val === 0) {
        // Save coordinates
        zeroes.rows.add(row)
        zeroes.cols.add(col)
      }
    }
  }

  for (let row of zeroes.rows) {
    // Update all cols in this row to zero
    for (let col = 0; col < m[0].length; col++) m[row][col] = 0
  }
  
  for (let col of zeroes.cols) {
    // Update all cols in this row to zero
    for (let row = 0; row < m.length; row++) m[row][col] = 0
  }

  return m;
}