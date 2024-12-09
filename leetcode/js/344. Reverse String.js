// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 const reverseString = function(s) {
   if (s.length < 2) return s
    
   const midpoint = s.length / 2
    for (let i = 0; i < midpoint; i++) {
    
      const pair = s[s.length - i - 1]
      s[s.length - i - 1] = s[i]
      s[i] = pair
    }

    return s
};
