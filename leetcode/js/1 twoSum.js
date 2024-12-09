/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const a = nums[i];

    const b = target - a;
    if (map.hasOwnProperty(b)) return [map[b], i];
    else map[a] = i;
  }
};
