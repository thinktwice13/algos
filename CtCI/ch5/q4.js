// Find first larger and smaller binary numbers that contain the smae count of ones as the source integer

const countOnes = num => num
  .toString(2)
  .split('')
  .reduce((count, bit) => {
    if (bit === "1") count++
    return count
  }, 0)

/**
 * Count ones
 */
const nextNumbers = num => {
  const onesCount = countOnes(num)

  let bigger = num + 1;
  while (countOnes(bigger.toString(2)) !== onesCount) {
    ++bigger
  }

  let smaller = num - 1;
  while (countOnes(smaller.toString(2)) !== onesCount) {
    --smaller
  }

  return { num: num.toString(2), bigger: bigger.toString(2), smaller: smaller.toString(2) };
}

/**
 * Solution B
 * 
 */
const bigger = num => {
  let trailingZeroSize = 0;
  let blockOfOnesSize = 0;

  // Count trailing zeroes by checking if logically shifted currNum & 1 are zero
  let curr = num;
  while (((curr & 1) == 0) && (curr != 0)) {
    trailingZeroSize++
    curr >>= 1
  }

  // Count block of ones by checking if logically shifted currNum & 1 are zero
  // No need to check if curr > 0 here
  while (curr & 1 == 1) {
    blockOfOnesSize++
    curr >>= 1
  }

  // Flip the zero bit that comes after trailing zeroes and the block of ones 
  let pos = trailingZeroSize + blockOfOnesSize;
  num |= 1 << pos

  // Clear less significant bits
  const a = 1 << pos; // Creates ie 1000 with 1 on position + 1
  const b = a - 1 // Creates 0111
  const mask = ~b // Creates 1000
  num &= mask

  // Insert (blockOfOnes - 1) 1s on the right
  const aa = 1 << (blockOfOnesSize - 1);  // Creates os with a 1 on position blockOfOnes - 1
  const bb = aa - 1; // Creates 0s with 1s at positions 0 to blockOfOnes - 2
  num |= bb // Inserts 1s at positions 0 to blockOfOnes - 2

  return num.toString(2);
}

const smaller = num => {
  let c1 = 0;
  let c0 = 0;

  // Count trailing ones by checking if logically shifted currNum & 1 are 1
  let temp = num;
  while (temp & 1 == 1) {
    c1++;
    temp >>= 1;
  }

  if (temp == 0) return -1;

  temp.toString(2)

  // Count block of zeroes by checking if logically shifted temp & 1 are zero
  // No need to check if temp > 0 here
  while (((temp & 1) == 0) && (temp !== 0)) {
    c0++;
    temp >>= 1
  }

  // Flip the zero bit that comes after trailing zeroes and the block of ones  and clear less significat bits
  let pos = c0; + c1;

  const mask = ((~0) << (pos + 1)); // Creates ie 1000 with 1 on pos + 1
  // Do ~0 to have all 1s instead of just 1
  num &= mask


  // Insert 1s
  const aa = 1 << (c1 + 1);  // Creates 0s with a 1 on position c1 + 1
  const bb = aa - 1; // Flips bits and creates a sequence of c1 + 1 1s
  num |= bb << (c0 - 1) // Inserts abnd shifts sequence of 1s 

  return num.toString(2);
}


const solB = num => {
  return {
    num: num.toString(2),
    bigger: bigger(num),
    smaller: smaller(num)
  }
}


console.log(nextNumbers(108));
console.log(solB(108))
