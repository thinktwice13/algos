// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function commonChildA(s1, s2) {
  return check(s1.length - 1, s2.length - 1, s1, s2)
}

const check = (i, ii, s1, s2, matches = 0) => {
  if (i < 0 || ii < 0) return 0
  
  return s1[i] === s2[ii]
    ? 1 + check(i-1,ii-1,s1,s2)
    : Math.max(check(i-1,ii,s1,s2), check(i,ii-1,s1,s2))
}

function commonChildB(s1, s2) {
  const m = Array(s1.length)

  for (let i = 0; i < s1.length; i++) {
    m[i] = Array(s2.length)
    for (let ii = 0; ii < s2.length; ii++) {
      m[i][ii] =  s1[ii] === s2[i]
      ? 1 + (m[i-1]?.[ii-1] || 0)
      : Math.max((m[i-1]?.[ii]||0),(m[i][ii-1]||0))
    }
  }

  return m[s1.length-1][s2.length-1]
}


const s1 = 'SHINCHAN'
const s2 = 'NOHARAAA'
commonChildB(s1,s2)