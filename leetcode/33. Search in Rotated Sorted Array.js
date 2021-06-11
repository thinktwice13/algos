/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // is target found
    if (nums[mid] === target) return mid;

    // is left sorted?
    if (nums[left] <= nums[mid]) {
      // is target left?
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
    // right sorted
    else {
      // is target right?
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};
