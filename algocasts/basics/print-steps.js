// Recieve a number N and console log a step shape with N levels. Have spaces on the right side.)

const createLine = (n, row = 1, str = '') => {
  if (str.length === n) return str
  if (str.length < row) return createLine(n, row, str + '#')
  else return createLine(n, row, str + ' ')
}

const printLine = (n, row = 1) => {
  if (row > n) return;
  console.log(createLine(n, row))
  printLine(n, row + 1)
}


const b = n => {
  printLine(n)
}

module.exports = {
  b,
  a: n => {
    // iterate lines
    for (let line = 1; line <= n; line++) {
      // create empty line
      const chars = []
      // iterate character positions
      for (let pos = 0; pos < n; pos++) {
        char = pos < line ? '#' : ' '
        chars.push(char)
      }

      console.log(chars.join(''))
    }
  }
}