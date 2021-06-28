// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

function substrCount(n, s) {
  let total = 0
  let position = 0
  
  while (position < n) {
    const char = s[position]
    ++total // Always count myself

    // Count palindromes as long as chars next to me are both the same in both directions
    let offset = 1
    const prevChar = s[position - offset]
    if (prevChar !== char) {
      while (s[position -offset] === prevChar && s[position+offset] === prevChar) {
        ++total
        ++offset
      }

    }

    // Check if I'm a repeating char
    // Add to caount as long as chars behind me are the same as me
    // TODO: Optimize. Look ahead instead of backwards
    offset = 1
    while (s[position - offset] === char) {
      ++total
      ++offset
    }

    position++
  }
  
  return total
}

const str = "aaaa"
substrCount(str.length, str)
