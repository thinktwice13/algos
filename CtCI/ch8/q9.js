// Find all valid combinations of n pairs of parenthesis

const genParens = (left, right = left, str = "", index = 0) => left < 0 || right < left
  ? [] // invalid if there is no lef parens left or there is more left than right parens left
  : (!left && !right) // No more parens left to use
    ? [str]
    : [ 
      ...genParens(left - 1, right, str.slice(0,index) + "(" + str.slice(index + 1), index + 1),
      ...genParens(left, right - 1, str.slice(0,index) + ")" + str.slice(index + 1), index + 1)
    ] // return all results for each of the next two options ('(' and ')')

// TEST
const n = 3
const res = genParens(n);