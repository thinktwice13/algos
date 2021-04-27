/**
 * @param {number[]} nums
 * @return {number}
 *
 * Zeros are breakpoints: Reset the slice max to 1
 * Process the entire array from both sides so that each slice also gets processes from both sides
 */
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;
  let left = (right = 1);

  for (let i = 0; i < nums.length; i++) {
    left *= nums[i];
    max = Math.max(left, max);
    if (left === 0) left = 1; // If zero, reset to 1

    // From end
    const ii = nums.length - 1 - i;
    right *= nums[ii];
    max = Math.max(max, right);
    if (right === 0) right = 1; // If zero, reset to 1
  }

  return max;
};

// const test = [2, -1, 0, -5, -3, 2];
const test = [2, 3, -2, 4];
const expected = 30;
const r = maxProduct(test);
console.log(r);
