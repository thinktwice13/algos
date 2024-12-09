// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 const singleNumber = function(nums) {
   return nums.reduce((res, num) => res ^ num)
};

const nums = [4,1,2,1,2]
singleNumber(nums)