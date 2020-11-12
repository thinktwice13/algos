// Accept integer N and build a spiral NxN matrix

// square [row, col] movement directions
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

const matrix = (n, m, v = 1, depth = 0) => {  
  // Completed
  if (n < 1) return m;

  // Build new empty matrix if needed
  if (!m) m = Array.from({length: n}, _ => [])

  let sc = depth, sr = depth, ec = n - 1 + depth, er = n - 1 + depth

  // TODO Refactor
  // top row
  for(let i = sc; i <= ec; i++) m[sr][i] = v++
  sr++

  // last col
  for(let i = sr; i <= er; i++) m[i][ec] = v++
  ec--

  // bottom row
  for(let i = ec; i >= sc; i--) m[er][i] = v++
  er--

  //first column
  for(let i = er; i > sc; i--) m[i][sc] = v++
  sc++

  return matrix(n - 2, m, v, depth + 1)
}

module.exports = matrix