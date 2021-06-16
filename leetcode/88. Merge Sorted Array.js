// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  /**
   * Iterate nums1 backwards from m - n index
   * While there is a bigger value in nums2, add it to the idx + currentNums2Length
   * Otherwise add current nums1 value to the idx + currentNums2Length
   */

  if (m === 0) {
    nums2.forEach((num, idx) => {
      nums1[idx] = num;
    });
  }

  // Start at the end of m
  for (let i = m - 1; i >= 0; i--) {
    const n1val = nums1[i];

    // If there is anyone bigger in nums2, pop from nums2 and move to the end of nums1
    while (n1val < nums2[nums2.length - 1]) {
      nums1[i + nums2.length] = nums2.pop();
    }

    // If after this, there are still items (only smaller will be left) in nums2, move self
    if (nums2.length) {
      nums1[i] = 0;
      nums1[i + nums2.length] = n1val;
    }
  }

  // When finished, move the rest of nums2 to start of nums1
  nums2.forEach((num, idx) => {
    nums1[idx] = num;
  });

  return nums1;
};

const input = [[0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6];
merge(...input);
