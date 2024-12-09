//  https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let i = 0;

  // Start second pointer at i + 1: The first possible duplicate
  for (let ii = 1; ii < nums.length; ii++) {
    // For every distinct num found, edit next i
    if (nums[ii] !== nums[i]) {
      nums[++i] = nums[ii];
    }
  }

  nums;

  return ++i; // So far, i was index, return coutn of distinct nums
};

// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const nums = [1, 1, 2];
removeDuplicates(nums);
