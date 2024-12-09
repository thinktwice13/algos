/** https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup&h_r=next-challenge&h_v=zen */

const fn = (s, n) => {
  // Get number of ocerrences of a string in integer n
  // Then count occurrences of 'a' in the original string and remainder separately

  const strLen = s.length;
  const timesRepeatedFUll = Math.floor(n / s.length);
  const remainderLen = n - timesRepeatedFUll * strLen;

  const countinFullStr = getOccurrenes(s, 'a');
  const countInRemainder = getOccurrenes(s.slice(0, remainderLen), 'a');

  return countInRemainder + countinFullStr * timesRepeatedFUll;
};

const getOccurrenes = (str, char) => {
  let count = 0;
  for (const c of str) if (c == char) count++;
  return count;
};

const s = 'abcac';
const r = fn(s, 10);
