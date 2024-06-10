// Rotate a matrix 90deg

const isInvalidMatrix = (m) => !m || m.length === 0 || m.length !== m[0].length;

class Point {
  constructor(m, row, col) {
    this.row = row;
    this.col = col;
    this.value = m[row][col];
  }
}

module.exports = (m) => {
  if (isInvalidMatrix(m)) throw new Error('invalid matrix');
  if (m.length === 1) return m;

  // Rotate matrix one layer at a time from outside
  for (let layer = 0; layer < m.length / 2; layer++) {
    // Move each pixel of a single a side four times
    for (let pixel = layer; pixel < m.length - layer * 2; pixel++) {
      // Initial fake target is the current pixel
      let target = new Point(m, layer, pixel);
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
        );

        m[target.row][target.col] = source.value;
      }
    }
  }
  return m;
};

/**
 * For each layer, switch values of for sides in place by rorating them
 * If N is odd, no need to rotat inner layer
 */
const fn2 = (matrix) => {
  // If matrix invalid, return
  if (isInvalidMatrix(matrix)) return false;
  const n = matrix.length;

  // Start from outer layer. We only need to iterate half the layers at most (always even, because odd central layer does not rotate)
  for (let layer = 0; layer < n / 2; layer++) {
    const row = layer;
    const lastCol = n - 1 - row;

    // For each position in layer side, rotate all sides
    for (let col = row; col < lastCol; col++) {
      const temp = matrix[row][col]; // top to tmp
      matrix[row][col] = matrix[col][lastCol]; // right to top
      matrix[col][lastCol] = matrix[lastCol][lastCol - col + row]; // bottom to right
      matrix[lastCol][lastCol - col + row] = matrix[lastCol - col + row][row]; // left to bottom
      matrix[lastCol - col + row][row] = temp; // temp (top) to left
    }
  }
  return matrix;
};

const matrix = [
  [1, 2, 3],
  [1, 2, 3],
  [7, 3, 4],
];
fn2(matrix);
