/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  const set = new Set();
  let [max, l, r] = [0, 0, 0];

  while (r < s.length) {
    if (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    } else {
      set.add(s[r]);
      max = Math.max(set.size, max);
      r++;
    }
  }

  return max;
};

const str = 'pwwkew';
const r = lengthOfLongestSubstring(str);
