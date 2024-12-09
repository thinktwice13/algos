// https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function maxMin(k, arr) {
  if (k == arr.length) return k;
  // Write your code here
  arr.sort((a, b) => a - b);

  let min = Infinity;

  for (let end = arr.length - 1; end >= k - 1; end--) {
    const start = end - k + 1; // Start of arr slice
    min = Math.min(min, arr[end] - arr[start]);
  }

  return min;
}
