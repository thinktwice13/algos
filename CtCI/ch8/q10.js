// Implement paint fill algorithm: click to paint a screen matrix of r x c

const fill = (screen, r, c) => {
  if (r >= screen.length || c >= screen[0].length || r < 0 || c < 0
  || !!screen[r][c]) return screen // screen pixel matches our chosen color) return false;  // out of bounds

  screen[r][c] = 1 // change pixel color
  fill(screen, r + 1, c)
  fill(screen, r - 1, c)
  fill(screen, r, c - 1)
  fill(screen, r, c + 1)

  return screen
}

// TEST
const scr = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,1,0],
  [0,0,0,0],
]

// const r1 = fill([...scr], 1,2)
const r2 = fill([...scr], 2,2)