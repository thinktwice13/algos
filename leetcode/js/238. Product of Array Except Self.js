/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  // If there is one zero, only the product in its position wiill be non-zero
  // If there are two zeroes, all will be zero
  let zeroCount = 0;
  let totalProduct = 1;
  for (let num of nums) {
    if (num === 0) {
      if (zeroCount === 1) return new Array(nums.length).fill(0);

      zeroCount++;
      totalProduct *= 1;
    } else totalProduct *= num;
  }

  // We only get here if there is < 2 zeroes in the nums array
  return nums.map((num) => {
    if (num === 0) return totalProduct;
    else if (zeroCount) return 0;
    else return totalProduct / num;
  });
};

const a = [-1, 1, 0, -3, 3];
const expected = [0, 0, 9, 0, 0];
const s = productExceptSelf(a);
