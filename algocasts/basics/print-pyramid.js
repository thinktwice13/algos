//print a pyramid using character '#' with spaces aside

const char = (n, row, len) => {
  const midpoint = Math.floor((n * 2 - 1) / 2)
  let char = '#'
  if (len < midpoint - (row - 1) || len > midpoint + (row - 1)) {
    char = ' '
  }
  return char
}

const line = (n, row, str = '') => {
  if (str.length >= n * 2 - 1) return str;
  return line(n, row, str + char(n, row, str.length))
}

const a = (n, row = 1) => {
  if (row > n) return;
  console.log(line(n, row))
  return a(n, row + 1)
}

module.exports = { a }