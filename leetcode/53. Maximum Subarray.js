/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0]; //Always start with the first val as sum
  let sliceSum = maxSum;

  // Check next values, starting with nums[1]
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];

    // We want max sum. Zero is the best option for the start of the slice
    if (sliceSum >= 0) {
      const sum = sliceSum + value; // new sum with current value included
      sliceSum = sum > 0 ? sum : 0; // Assign new sum as long as it is still > 0
    } else if (value > sliceSum) sliceSum = value; // If slice sum was < 0, reset to the max between itself and current value

    // Always check if maxSum could now be bigger
    if (sliceSum > maxSum) maxSum = sliceSum;
  }

  return maxSum;
};
