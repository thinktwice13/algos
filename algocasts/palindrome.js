// return bool as result if provided string is a palindrome (abba)

module.exports = {
  a: str => str === str.split('').reverse().join(''),
  b: str => str.split('').every((_, idx) => str[idx] === str[str.length - idx - 1])
}