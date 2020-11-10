const a = str => str
  .split('')
  .reverse()
  .join('')

const b = str => {
  let reversed = ''
  for(let char of str) {
    reversed = char + reversed
  }
  return reversed
}

const c = str => str
  .split('')
  .reduce((rev, char) => char + rev,'')

module.exports = { a, b, c }