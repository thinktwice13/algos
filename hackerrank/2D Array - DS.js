/** https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays */

// 2d aray format = [r][c]
const fn = (arr) => {
  // We know the starting positions of all hourglasses - max r = 4 and max col = 4
  let sum = -Infinity;

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      sum = Math.max(sum, hgSum(arr, r, c));
    }
  }

  return sum;
};

function hgSum(arr, r, c) {
  const topRow = arr[r][c] + arr[r][c + 1] + arr[r][c + 2];
  const bottomRow = arr[r + 2][c] + arr[r + 2][c + 1] + arr[r + 2][c + 2];
  const mid = arr[r + 1][c + 1];

  return topRow + bottomRow + mid;
}

const arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

const r = fn(arr);
