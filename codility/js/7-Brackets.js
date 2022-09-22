
// Use stacks



function solution(S) {
  // Use as stacks: Can only close next bracket in stack
  const openStack = []
  const closingStack = []

  for (let char of S) {
    // Can always ooen a bracket
    // If found in bracketMap keys, then it is an opening bracket
    const matchingClosingBracket = bracketMap[char] // is openming bracket
    if (matchingClosingBracket) {
      // Add to openStack and add expected match to closing stack
      openStack.push(char)
      closingStack.push(matchingClosingBracket)
    } else {

      // otherwise it is a closing bracket: can only be a match from the recenlty use opening bracket
      const expectedClosingBracket = closingStack.pop()
      const isValidClosingBracket = char === expectedClosingBracket
      if (!isValidClosingBracket) {
        return 0
      }
      else openStack.pop() // Remove dfrom opening expected stack
    }
  }

  if (!openStack.length && !closingStack.length) return 1
  return 0
}
const bracketMap = {
  "(": ")",
  "[": "]",
  "{": "}"
}

// TEST
const str1 = "{[()()]}"
const str2 = "([)()]"

const r1 = solution(str1)
const r2 = solution(str2)
