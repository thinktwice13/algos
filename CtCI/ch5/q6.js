// How many bit do you need to flip to convert the number A to number B?

const conversion = (a,b) => {
  // XOR gives the difference in bits
  let compared = a ^ b
  let count = 0

  // Keep shefting and checking if the last bit in comparisom marks a difference in bit
  while (compared !== 0) {
    if ((compared & 1) === 1) count++
    compared >>>= 1;
  }

  return count
}

console.log(conversion(29, 15))