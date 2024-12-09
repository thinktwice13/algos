/**
 *
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  // If last is bigger than first, array not rotated or rotated nums.length times
  if (nums[nums.length - 1] >= nums[0]) return nums[0];

  // Otherwise, binary search
  let left = 1,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = left + 1;
    else right = mid;
  }

  return nums[left];
};

const a = [4, 5, 6, 7, 0, 1, 2];
findMin(a);
