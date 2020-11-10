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
  .reduce((acc, char) => {
    return char + acc
  },'')

module.exports = { a, b, c }