// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = function(s) {
  const str = s.replace(/[^a-z0-9$]/gi, '').toLowerCase()
  const midpoint = Math.floor(str.length/2)
  for (let i = 0; i < midpoint; i++) {
    let ii = str.length - 1 - i

    if (str[i] !== str[ii]) return false
  }  

  return true
};

const s = "ab_a"
isPalindrome(s)