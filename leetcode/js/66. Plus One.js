// https://leetcode.com/problems/plus-one/

/**
 * Poor description
 * 'Increment one to the integer' means [2,9,9] to [3,0,0] or [9,0] to [1,0,0]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  // Check if last dig is 9, there wilil be a carrys over
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++;
    return digits;
  }

  // On Iterate backwards all sequential nines and set the to zero
  let pos = digits.length - 1;
  while (digits[pos] === 9) {
    digits[pos] = 0;
    pos--;
  }

  if (pos > -1) {
    digits[pos]++;
    return digits;
  }

  // On
  digits.unshift(1);
  return digits;
};

// const num = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
const num = [8, 9, 9, 9];
const exp = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];
plusOne(num);
