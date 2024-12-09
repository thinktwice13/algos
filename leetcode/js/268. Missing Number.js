// https://leetcode.com/problems/missing-number/

/**
 * Description: 
 * XOR Is used to exclude pairs of numbers: 1 ^ 1 = 0, n ^ n = 0
 * The function uses XOR to pair existing number with indices -> The result of .reduce will be an index value that has not found its matching number in the input array.
 * Since there is always one number missing in n length array, there will always be one number extra (>nums.length). Use final XOR with nums.length to match that extra number
 * @param {number[]} nums
 * @return {number}
 */
 const missingNumber = nums => nums.reduce((res, num, idx) => res ^ num ^ idx) ^ nums.length;


const nums = [3,0,1]
missingNumber(nums)