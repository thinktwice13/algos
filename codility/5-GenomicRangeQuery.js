function solution(S, P, Q) {
  return P.map((start, idx) => {
    const end = Q[idx] + 1 // Not next index! 
    const slice = S.slice(start, end);
    return getQueryImpact(slice)
  })
}

const getQueryImpact = (queryStr) => {
  return queryStr.indexOf("A") >= 0
    ? 1
    : queryStr.indexOf("C") >= 0
      ? 2
      : queryStr.indexOf("G") >= 0
        ? 3
        : 4
}

// TEST
const s = 'CAGCCTA'
const p = [2, 5, 0]
const q = [4, 5, 6]
const res = solution(s, p, q)

