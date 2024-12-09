// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function minimumAbsoluteDifference(arr) {
  // Write your code here

  arr.sort((a, b) => Math.abs(a) - Math.abs(b));
  let diff = Infinity;

  for (let i = 1; i < arr.length; i++) {
    diff = Math.min(diff, Math.abs(arr[i] - arr[i - 1]));
    if (diff === 0) return 0; // Return early in case of zero (absolute minimum result)
  }

  return diff;
}

const getDiff = (a, b) => ({ a, b, diff: Math.abs(a - b) });

const arr = '-59 -36 -13 1 -53 -92 -2 -96 -54 75'.split(' ').map(Number);
minimumAbsoluteDifference(arr);
