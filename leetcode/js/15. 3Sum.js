/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  /** Sort the nums array */
  nums.sort((a, b) => a - b);

  /**
   * Iterate sorted array
   * Skip repeated nums
   * For each distinct number, find pair of number to complete a triplet using 2 pointers on nums array
   */
  return nums.reduce((trips, num, idx, arr) => {
    // Here, nums are used as starting points to match a triplet. Do not use the same starting point twice
    const isRepeated = idx > 0 && num === arr[idx - 1];

    // Provide distinct nums from the rest of nums array and use current num as inverted target sum for the matching pair
    if (!isRepeated) getPair(nums.slice(idx + 1), -num, trips);
    return trips;
  }, []);
};

const getPair = (arr, targetSum, triplets) => {
  // Init triplets. There might be more than one found

  // Set pointers
  let left = 0,
    right = arr.length - 1;

  // Try looking for pairs until pointers meet
  while (left < right) {
    let sum = arr[left] + arr[right];

    // If pair sum equal to target, triplet is matched
    if (sum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) left += 1;
      while (left < right && arr[right] === arr[right + 1]) right -= 1;
    }

    // If sum smaller, move left pointer to find bigger number (sorted array)
    else if (sum < targetSum) left++;
    // If bigger, move right pointer to find smaller number (sorted array)
    else right--;
  }

  return triplets;
};

const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
