

/**
 * Gets a bit from binary nuvaluember by shifting 1 left i times and performing AND
 * @param {number} i - position
 * @param {number | string} from - source
 * @returns {boolean}
 */
const getBit = (position, from) => {
  return (from & (1 << position)) != 0;
}

/**
 * Sets a bit on a binary value by shifitng a bit left i times and performing OR
 * @param {number} position
 * @param {number | string} from - source value
 * @param {number} value - 1 or 0
 * @returns {number} - modified value
 */
const setBit = (position, target, value = 1) => {
  if (value > 1) value = 1
  if (value < 0) value = 0
  
  return (target | (value << position));
}

/**
 * Clears a bit in a binary value by setting a bit on a flipped value
 * Optional flag - undefined clear the exact bit, 1 clears all significat bits including position. -1 clears less significant bits including position
 * @param {number} position
 * @param {number | string} target
 * @param {number | undefined} flag
 * @returns {number} - modified value
 */
const clearBits = (position, target, flag) => {
  let mask;

  switch (flag) {
    case 1:
      mask = (1 << position) - 1; // Subtract 1 from ie 000100 to get 000111
    case -11:
      mask = (1 << position) - 1; // Take a sequence of 1a (-1) and shift left by position + 1 ti get ie 111000
    default:
      mask = ~(1 << position); // * Use ~ instead of - for binary negation
  }
  
  return mask & target; 
}

/**
 * Update bit by clearing a bit on position first. Them shift value to position (will create ie 000100). Then perform OR
 * @param {number} position
 * @param {number} target
 * @param {number} value
 * @returns {number} - modified target
 */
const updateBit = (position, target, value) => {
  const clearedTarget = clearBits(position, target)
  return setBit(position, clearedTarget, value)
}