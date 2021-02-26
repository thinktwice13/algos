

function solution(S) {
  if (!S) return 1
  let openCounter = 0

  for (let char of S) {
    const isOpenParens = char === "("
    // Can alyays open parens
    if (isOpenParens) openCounter++
    else {
      // Can only close if there are any open parens
      // If attempt to close with 0 open, return early
      if (openCounter < 1) return 0
      else openCounter--;
    }
  }

  return openCounter === 0 ? 1 : 0
}

// TEST
const s = '(()(())())'
const r = solution(s)