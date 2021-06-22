// https://leetcode.com/problems/valid-parentheses/



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  /**
   * Bracket pair can be open at ay position
   * Closing brackets must match the last open bracket
   * Iterate string and check for fail case (closing brackets mismatch). Keep recording opening brackets
   * If loop finished, input is valid
   */
  if (s.length === 1) return false

  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  }

  const maps = {
    all: map,
    opening: Object.values(map),
    closing: Object.keys(map),
  }

  const openingBrackets = []

  for (const bracket of s) {
    if (maps.opening.includes(bracket)) {
      // If opening bracket, allow and add to openingBrackets list
      openingBrackets.push(bracket)
    }

    else {
      const lastOpening = openingBrackets.pop()
      // If mismatch, return eerly
      if (maps.all[bracket] !== lastOpening) return false
    }
  }

  return openingBrackets.length === 0
};

const s = "()[]{}"
isValid(s)