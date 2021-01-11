// TODO
const intToBin = num => {
  if (num > 1 || num < 0) throw new Error()
  if (num == 1) return 1
  return 0
}

const decToBinStr = num => {
  let str = ''
  for (let pos = 1; pos <= 32; pos++) {
    const n = Math.pow(2, -pos)
    if (num >= n) {
      num -= n
      str += '1'
      if (num === 0) return str;
    } else {
      str += '0'
    }
  }

  // After the loop number num should not be > 0
  if (num > 0) throw new Error()

  return str
}

const decimalToBinString = num => {
  const int = parseInt(num)
  const dec = num - int

  return intToBin(int) + "." + decToBinStr(dec)
}


/* TEST */
console.log(decimalToBinString(0.625) == '0.101');
console.log(decimalToBinString(0.6255342856783467856932), 'ERROR');