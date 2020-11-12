// print the numbers in order. replace multiples of 3 with fizz and multiples of 5 with buzz

module.exports = max => {
  if (max < 0) return;

  for(let i = 1; i <= max; ++i) {
    let str = ''
    if (i % 3 === 0) str = str + 'fizz'
    if (i % 5 === 0) str = str + 'buzz'
    if (str === '') str = i

    console.log(str)
  }
}