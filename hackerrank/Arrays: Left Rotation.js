/** https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen */

function rotLeft(a, d) {
  // If rotated a.length times, the arrar yreturns to the same posiiton
  if (a.length < 2) return a;

  // We only need to rotate remainer of a.length times
  const times = d % a.length;

  return [...a.slice(times), ...a.slice(0, times)];
}

const arr = [1, 2, 3, 4, 5];
const d = 4;
const r = rotLeft(arr, d);
