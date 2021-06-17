// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  let leader = nums[0];
  const map = { [nums[0]]: 1 };

  const midpoint = Math.ceil((nums.length - 1) / 2);
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;

    if (map[num] > map[leader]) leader = num; // Update current leader

    // Return early of more than half nums passed and we have the funal leader
    if (map[leader] > midpoint) return leader;
  }
};

const nums = [3, 2, 3];
majorityElement(nums);

// TODO Optimize
