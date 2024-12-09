// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen

function twoStrings(s1, s2) {
  // Write your code here
  const [short, long] = s1.length < s2.length ? [s1, s2] : [s2, s1];

  for (const char of short) {
    if (long.indexOf(char) > -1) return 'YES';
  }

  return 'NO';
}

const input = ['hello', 'world'];
twoStrings(...input);
