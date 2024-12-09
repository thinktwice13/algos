/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  let set = new Set();
  let [max, fast, slow] = [0, 0, 0];

  while (fast < s.length) {
    console.log(s[slow], s[fast], set);
    if (set.has(s[fast])) {
      // When repeated char at fast is found, this will run again until slow deletes the previous occurence of it
      set.delete(s[slow]);
      slow++;
    } else {
      set.add(s[fast]);
      max = Math.max(set.size, max);
      fast++;
    }
  }

  return max;
};

const str = 'dvdf';
const r = lengthOfLongestSubstring(str);
