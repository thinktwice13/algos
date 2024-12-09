// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefixA = function (strs) {
  let prefix = strs[0];
  if (!prefix.length) return '';

  for (let i = 1; i < strs.length; i++) {
    const s = strs[i];
    if (!s.length) return '';
    let pre = '';
    let ii = 0;
    while (s[ii] === prefix[ii] && ii <= s.length) {
      pre += s[ii];
      ii++;
    }

    if (pre.length < prefix.length) prefix = pre;
  }

  return prefix;
};

const longestCommonPrefixB = function (strs) {
  strs.sort();

  // Compare first/last
  const [first, last] = [strs[0], strs[strs.length - 1]];
  if (last.startsWith(first)) return first;

  let pos = 0;
  let prefix = '';
  while (first[pos] === last[pos] && pos < first.length) {
    prefix += first[pos];
    pos++;
  }
  return prefix;
};

const strs = ['flower', 'flower', 'flower', 'flowe', 'flight'];
longestCommonPrefixA(strs);
longestCommonPrefixB(strs);
