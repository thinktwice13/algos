// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function alternatingCharacters(s) {
  // Write your code here
  if (s.length < 2) return 0;

  let countDeletions = 0;

  for (let i = 1; i < s.length; i++) {
    // If char matches the previous one, delete
    if (s[i] === s[i - 1]) countDeletions++;
  }

  return countDeletions;
}
