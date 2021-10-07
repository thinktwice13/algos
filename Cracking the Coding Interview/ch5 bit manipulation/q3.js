/**
 * Find max sequence of 1s by flipping 1 bit only
 * @param {number} num integer number
 * @returns {number} length of a sequence
 */
const flipBitToWin = num => {
  if (num < 0) throw new Error()
  const binStr = num.toString(2)
  if (~num == 0) return binStr.length
  num = parseInt(num)

  const blocksOfOnes = binStr.split('0')
  let maxLength = 1; // We can always have a sequence of at least one

  for (let block = 0; block < blocksOfOnes.length - 1; block++) {
    // Calculate the length of adjacent blocks of ones (current and next in the array)
    const mergedBlockLength = blocksOfOnes[block].length + blocksOfOnes[block + 1].length
    // Update macLength
    maxLength = Math.max(maxLength, mergedBlockLength)
  }

  return maxLength + 1; // Add 1 for the flipped bit
}

/* TEST */
console.log(flipBitToWin(1775), 8);