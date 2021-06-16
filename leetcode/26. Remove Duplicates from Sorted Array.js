//  https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) nums.splice(i, 1);
    else i++;
  }

  return nums;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
