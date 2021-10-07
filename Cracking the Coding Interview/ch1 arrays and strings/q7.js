

const isInvalidMatrix = m => !m || m.length === 0 || m.length !== m[0].length

class Point {
  constructor(m, row, col) {
    this.row = row
    this.col = col
    this.value = m[row][col]
  }
}

module.exports = m => {
  if (isInvalidMatrix(m)) throw new Error('invalid matrix')
  if (m.length === 1) return m;
  
  // Rotate matrix one layer at a time from outside
  for (let layer = 0; layer < m.length / 2; layer++) {
    // Move each pixel of a single a side four times
    for (let pixel = layer; pixel < m.length - (layer * 2); pixel++) {

      // Initial fake target is the current pixel
      let target = new Point(m, layer, pixel)
      // Move four points
      for (let i = 0; i < 4; i++) {
        // Previous target now becomes source point
        let source = target;
        
        // New target
        // Saves the value in Point.value to be used when this point becomes a source
        target = new Point(
          m,
          source.col, // Rotation! target row taken from source column positino
          m.length - 1 - source.row
        )

        m[target.row][target.col] = source.value
      }
    }
  }
  return m
}

