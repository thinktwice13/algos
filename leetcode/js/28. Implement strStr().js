// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 const strStr = function(haystack, needle) {
    if (needle === "") return 0
    if (haystack.length < needle.length) return -1

    // Iterate trough all possible haystack starting positions
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      // Try matching every needle char. Return position if completed
      for (let ii = 0; ii < needle.length; ii++) {    
        if (needle[ii] !== haystack[i + ii]) break;                                 
        else if (ii === needle.length - 1) return i
      }
    }

    // If no complete matches found
    return -1
};