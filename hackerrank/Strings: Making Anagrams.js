// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function makeAnagram(a, b) {
  // Write your code here

  const [s, l] = a.length < b.length ? [a, b] : [b, a];

  // map a with counts
  const mapShort = {};
  for (const char of s) mapShort[char] = (mapShort[char] || 0) + 1;

  // Count and reduce matched items from mapShort
  let matched = 0;
  for (const char of l) {
    const fromShort = mapShort[char];
    if (fromShort) matched++; // If exists, count as matched
    // If more than one found in a, reduce count
    if (fromShort > 1) mapShort[char]--;
    // If only one found, remove entire key
    else if (fromShort === 1) delete mapShort[char];
  }

  return a.length + b.length - matched * 2;
}

const input = ['fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'];
makeAnagram(...input);
