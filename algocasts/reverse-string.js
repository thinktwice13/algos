const a = str => str
  .split('')
  .reverse()
  .join('')

const b = str => {
  let reversed = ''
  for(let char of str) {
    debugger;
    reversed = char + reversed
  }
  return reversed
}

b('asdf')

const c = str => str
  .split('')
  .reduce((rev, char) => char + rev,'')

module.exports = { a, b, c }