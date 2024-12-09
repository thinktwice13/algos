// https://leetcode.com/problems/move-zeroes/

/**
 * Iterate nums array
 * Until first zero encountered, do nothing. 
 * When zero ecountered, remember position. For each next non-zero value, move to the recorded position and set to zero
 * Update next target position on every move
 */

const moveZeroes = function(nums) {
  if (nums.length < 2) return nums
  let next
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0 && next !== undefined) {
      const num = nums[i]
      nums[i] = 0
      nums[next++] = num
    }

    if (nums[i] === 0 && next === undefined) next = i // Will only run once to define initial next
  }

  return nums
};

// const nums = [0,1,0,3,12]
const test = [[1,0],[2,1],[0,1,0,3,12]]
test.forEach(moveZeroes)